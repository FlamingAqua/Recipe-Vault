export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-32 rounded-xl bg-muted" />

        <div className="space-y-4">
          <div className="h-6 w-24 rounded bg-muted" />
          <div className="h-12 w-96 rounded bg-muted" />

          <div className="flex gap-4">
            <div className="h-5 w-24 rounded bg-muted" />
            <div className="h-5 w-24 rounded bg-muted" />
            <div className="h-5 w-24 rounded bg-muted" />
          </div>
        </div>

        <div className="h-64 rounded-3xl bg-muted" />
        <div className="h-80 rounded-3xl bg-muted" />
        <div className="h-48 rounded-3xl bg-muted" />
      </div>
    </main>
  );
}