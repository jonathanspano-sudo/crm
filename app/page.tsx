export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-brand" />

      {/* Header */}
      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand font-extrabold text-white">
              TM
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold uppercase tracking-widest">
                Traffic Management
              </p>
              <p className="text-xs font-medium uppercase tracking-widest text-ink-soft">
                CRM
              </p>
            </div>
          </div>
          <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink-soft">
            Internal
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Traffic Management International
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Welcome, salespeople and account managers.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            This is Traffic Management&rsquo;s new CRM. One place for your
            accounts, your pipeline, and your follow-through.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block rounded-sm bg-brand px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row">
          <p className="text-sm text-ink-soft">
            &copy; {new Date().getFullYear()} Traffic Management Inc. All
            rights reserved.
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-soft">
            Safety. Service. Scale.
          </p>
        </div>
      </footer>
    </div>
  );
}
