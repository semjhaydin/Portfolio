import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-md mx-auto py-16 text-center space-y-4 font-mono">
      <h2 className="text-3xl font-bold text-white">404</h2>
      <p className="text-xs text-white/60">ARANAN SAYFA BULUNAMADI</p>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-white text-black font-bold text-xs hover:bg-white/90 transition-all"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
