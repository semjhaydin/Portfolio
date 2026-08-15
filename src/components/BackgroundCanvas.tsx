"use client";

import React, { useEffect, useRef } from "react";

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let t = 0;

    // Mouse position
    let mouseX = -9999;
    let mouseY = -9999;

    const REPEL_RADIUS = 110;
    const REPEL_STRENGTH = 2.8;
    const DAMPING = 0.88;
    const FLOW_SPEED = 0.35;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Flow field angle
    const getAngle = (x: number, y: number): number =>
      Math.sin(x * 0.005 + t * 0.18) * Math.PI +
      Math.cos(y * 0.005 + t * 0.14) * Math.PI +
      Math.sin((x + y) * 0.003 + t * 0.09) * Math.PI * 0.5;

    // Particles with velocity
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    };

    const NUM = 140;
    const particles: Particle[] = Array.from({ length: NUM }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      radius: 0.8 + Math.random() * 1.6,
      alpha: 0.12 + Math.random() * 0.28,
    }));

    const render = () => {
      t += 0.005;

      // Full clear every frame — no trails, no lines
      ctx.fillStyle = "#070709";
      ctx.fillRect(0, 0, width, height);

      // Subtle radial vignette
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.15,
        width / 2, height / 2, height * 0.8
      );
      vignette.addColorStop(0, "rgba(7,7,9,0)");
      vignette.addColorStop(1, "rgba(7,7,9,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        // Base flow field velocity
        const angle = getAngle(p.x, p.y);
        p.vx += Math.cos(angle) * FLOW_SPEED * 0.06;
        p.vy += Math.sin(angle) * FLOW_SPEED * 0.06;

        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0.1) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
          p.vx += (dx / dist) * force * 0.18;
          p.vy += (dy / dist) * force * 0.18;
        }

        // Velocity cap to prevent runaway particles
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const MAX_SPEED = 2.5;
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }

        // Apply velocity + damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        // Wrap-around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Glow effect for particles close to mouse
        const closeness = dist < REPEL_RADIUS ? (1 - dist / REPEL_RADIUS) : 0;
        const glowAlpha = p.alpha + closeness * 0.45;
        const glowRadius = p.radius + closeness * 1.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(glowAlpha, 0.85).toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    // Seed dark frame
    ctx.fillStyle = "#070709";
    ctx.fillRect(0, 0, width, height);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
