export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="animate-pulse space-y-6">
        <div className="h-12 w-80 rounded-xl bg-muted" />

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="space-y-5">
            <div className="h-12 rounded-xl bg-muted" />
            <div className="h-12 rounded-xl bg-muted" />
            <div className="h-12 rounded-xl bg-muted" />
            <div className="h-40 rounded-xl bg-muted" />
            <div className="h-56 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-12 rounded-xl bg-muted" />
          </div>
        </div>
      </div>
    </main>
  );
}