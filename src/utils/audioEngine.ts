// Web Audio API Procedural Engine Sound Synthesizer

class AudioEngineService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isRunning: boolean = false;
  private idleOsc: OscillatorNode | null = null;
  private idleGain: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.idleGain && this.ctx) {
      this.idleGain.gain.setValueAtTime(muted ? 0 : 0.15, this.ctx.currentTime);
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Play Key Click Sound
  public playKeyTurn() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Synthesize Engine Starter Crank + High RPM Rev Sweep
  public triggerIgnitionRev(onRpmUpdate: (rpm: number) => void, onComplete: () => void) {
    this.initContext();
    if (!this.ctx || this.isRunning) {
      // Fallback timer if audio context fails
      this.animateRpm(onRpmUpdate, onComplete);
      return;
    }

    this.isRunning = true;
    const t0 = this.ctx.currentTime;

    // Starter Crank Clicks
    const crankOsc = this.ctx.createOscillator();
    const crankGain = this.ctx.createGain();
    crankOsc.type = "sawtooth";
    crankOsc.frequency.setValueAtTime(45, t0);
    crankGain.gain.setValueAtTime(this.isMuted ? 0 : 0.2, t0);
    crankGain.gain.exponentialRampToValueAtTime(0.01, t0 + 0.5);
    crankOsc.connect(crankGain);
    crankGain.connect(this.ctx.destination);
    crankOsc.start(t0);
    crankOsc.stop(t0 + 0.5);

    // Main Engine Exhaust Synthesizer Node
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const mainGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = "sawtooth";
    osc2.type = "square";
    filter.type = "lowpass";

    // Initial Pitch (Idle ~40Hz)
    osc1.frequency.setValueAtTime(40, t0 + 0.4);
    osc2.frequency.setValueAtTime(80, t0 + 0.4);
    filter.frequency.setValueAtTime(250, t0 + 0.4);

    // Rev Up to 8000 RPM Pitch (~220Hz + overtones)
    const revDuration = 1.6;
    const revStartTime = t0 + 0.5;

    osc1.frequency.exponentialRampToValueAtTime(220, revStartTime + revDuration);
    osc2.frequency.exponentialRampToValueAtTime(440, revStartTime + revDuration);
    filter.frequency.exponentialRampToValueAtTime(1600, revStartTime + revDuration);

    // Rev Limiter bounce (Redline peak effect)
    const redlineTime = revStartTime + revDuration;
    osc1.frequency.setValueAtTime(220, redlineTime);
    osc1.frequency.setValueAtTime(190, redlineTime + 0.1);
    osc1.frequency.setValueAtTime(225, redlineTime + 0.2);

    // Return to Smooth Engine Idle (~50Hz)
    osc1.frequency.exponentialRampToValueAtTime(50, redlineTime + 0.9);
    osc2.frequency.exponentialRampToValueAtTime(100, redlineTime + 0.9);
    filter.frequency.exponentialRampToValueAtTime(350, redlineTime + 0.9);

    mainGain.gain.setValueAtTime(0.0, t0);
    mainGain.gain.setValueAtTime(this.isMuted ? 0 : 0.25, t0 + 0.4);
    mainGain.gain.setValueAtTime(this.isMuted ? 0 : 0.08, redlineTime + 1.2); // Low persistent rumble

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    osc1.start(t0 + 0.4);
    osc2.start(t0 + 0.4);

    this.idleOsc = osc1;
    this.idleGain = mainGain;
    this.filterNode = filter;

    // Visual RPM Animation Drive
    this.animateRpm(onRpmUpdate, () => {
      this.isRunning = false;
      onComplete();
    });
  }

  private animateRpm(onRpmUpdate: (rpm: number) => void, onComplete: () => void) {
    const startTime = performance.now();
    const duration = 2600; // total millis

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let currentRpm = 0;
      if (progress < 0.2) {
        // Starter Crank stage (0 -> 1200 RPM)
        currentRpm = Math.floor((progress / 0.2) * 1200);
      } else if (progress < 0.75) {
        // Ara gaz / High Rev stage (1200 -> 8000 RPM Redline)
        const p = (progress - 0.2) / 0.55;
        // Ease-in exponential climb
        currentRpm = Math.floor(1200 + Math.pow(p, 1.8) * 6800);
      } else if (progress < 0.85) {
        // Redline bounce (7600 <-> 8000 RPM)
        const bouncePhase = (progress - 0.75) / 0.1;
        currentRpm = Math.floor(8000 - Math.sin(bouncePhase * Math.PI * 4) * 400);
      } else {
        // Return to Idle (8000 -> 1100 RPM)
        const p = (progress - 0.85) / 0.15;
        currentRpm = Math.floor(8000 - p * 6900);
      }

      onRpmUpdate(currentRpm);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        onRpmUpdate(1000); // Settled idle RPM
        onComplete();
      }
    };

    requestAnimationFrame(step);
  }
}

export const audioEngine = new AudioEngineService();
