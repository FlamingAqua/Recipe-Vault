export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="animate-pulse space-y-8">
        <div className="h-12 w-72 rounded-xl bg-muted" />

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="space-y-6">
            <div className="h-12 rounded-xl bg-muted" />
            <div className="grid grid-cols-2 gap-6">
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
            </div>

            <div className="h-44 rounded-xl bg-muted" />
            <div className="h-64 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />

            <div className="h-12 rounded-xl bg-muted" />
          </div>
        </div>
      </div>
    </main>
  );
}