export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="h-12 w-2/3 bg-ink-100 rounded-2xl animate-shimmer bg-gradient-to-r from-ink-100 via-ink-50 to-ink-100 bg-[length:200%_100%]" />
        <div className="h-6 w-1/2 bg-ink-100 rounded-xl animate-shimmer bg-gradient-to-r from-ink-100 via-ink-50 to-ink-100 bg-[length:200%_100%]" />
        <div className="h-64 w-full bg-ink-100 rounded-3xl animate-shimmer bg-gradient-to-r from-ink-100 via-ink-50 to-ink-100 bg-[length:200%_100%]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-ink-100 rounded-2xl animate-shimmer bg-gradient-to-r from-ink-100 via-ink-50 to-ink-100 bg-[length:200%_100%]" />
          ))}
        </div>
      </div>
    </div>
  );
}
