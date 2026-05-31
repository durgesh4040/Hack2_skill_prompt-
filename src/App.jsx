import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-10">
        <header className="flex flex-col gap-6 rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Travel planning engine
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Plan the perfect trip, discover unforgettable experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Build itineraries, explore local hotspots, and book your next adventure with a travel engine designed for modern explorers.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Start planning
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/40 p-4 shadow-xl shadow-slate-950/20 sm:p-6">
            <img
              src={heroImg}
              alt="Travel destination collage"
              className="h-80 w-full object-cover object-center sm:h-96"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
        </header>

        <section id="features" className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/10">
            <span className="inline-flex rounded-2xl bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
              Smart planning
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-white">Itinerary suggestions</h2>
            <p className="mt-4 text-slate-300">
              Get AI-assisted day plans tailored to your travel style, budget and interests. Save time and explore with confidence.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/10">
            <span className="inline-flex rounded-2xl bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
              Local insights
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-white">Top experiences</h2>
            <p className="mt-4 text-slate-300">
              Discover restaurants, tours, and hidden gems curated from traveler reviews and local guides.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/10">
            <span className="inline-flex rounded-2xl bg-violet-500/10 px-3 py-1 text-sm font-semibold text-violet-300">
              Real-time updates
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-white">Travel-ready alerts</h2>
            <p className="mt-4 text-slate-300">
              Receive live recommendations for weather, events, and route changes so your journey stays smooth.
            </p>
          </article>
        </section>

        <section id="start" className="mt-16 rounded-[36px] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900/95 p-10 shadow-2xl shadow-slate-950/30 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300/90">
                Your next adventure awaits
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Plan faster with a travel experience engine built for explorers.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Select your destination, share your preferences, and let the platform generate a ready-to-book plan with curated experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-3xl bg-slate-950/60 px-5 py-4 text-slate-100 shadow-inner shadow-slate-900/40">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Trips created</p>
                  <p className="mt-2 text-3xl font-semibold text-white">12,400+</p>
                </div>
                <div className="rounded-3xl bg-slate-950/60 px-5 py-4 text-slate-100 shadow-inner shadow-slate-900/40">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Destinations covered</p>
                  <p className="mt-2 text-3xl font-semibold text-white">95+</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">What you can do</h3>
              <ul className="mt-6 space-y-5 text-slate-300">
                <li className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-semibold text-white">Create instant plans</p>
                  <p className="text-sm leading-6 text-slate-400">Enter your dates, interests, and travel pace to generate a complete itinerary.</p>
                </li>
                <li className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-semibold text-white">Customize every day</p>
                  <p className="text-sm leading-6 text-slate-400">Swap activities, add restaurant picks, and optimize routes with one tap.</p>
                </li>
                <li className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-semibold text-white">Book and share</p>
                  <p className="text-sm leading-6 text-slate-400">Save favorite stops, share plans with friends, and export your dream adventure.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
