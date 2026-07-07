export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[radial-gradient(circle_at_top,_#eff6ff,_#ffffff_42%,_#f8fafc)]">
      <div className="flex flex-col items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-white shadow-premium ring-1 ring-slate-200">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-primary animate-spin" aria-hidden="true" />
          <img src="/images/kmvs-logo.png" alt="Karam Manovikas Sansthan" className="h-16 w-16 object-contain" />
        </div>
        <p className="mt-6 font-heading text-lg font-extrabold text-dark">Karam Manovikas Sansthan</p>
        <p className="mt-2 text-sm font-semibold text-muted">Preparing your experience</p>
      </div>
    </div>
  );
}
