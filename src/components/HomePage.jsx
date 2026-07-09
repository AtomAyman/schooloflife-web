import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, TreePine, Compass, Mountain } from 'lucide-react';

// Hero carousel — 3 new field clips (not duplicated in Snapshots)
const carouselSlides = [
  {
    label: 'Dock Dueling',
    description: 'Testing balance, agility, and friendly competition out on the water.',
    videoUrl: '/videos/DockDueling.mp4',
  },
  {
    label: 'Fishing Catch and Release',
    description: 'Learning patience and technique on the lake. A core Sunnah-inspired skill.',
    videoUrl: '/videos/Fishing.mp4',
  },
  {
    label: 'Preparing for Cooking',
    description: 'Getting camp ready for outdoor cooking: setting up, prepping, and working together.',
    videoUrl: '/videos/GeetingReadytoCook.MOV',
  },
];

// Snapshots carousel — 6 core clips, vertical 9:16 format
const snapshotClips = [
  {
    id: 1,
    title: 'Kayaking on the Water',
    category: 'Water Skills',
    videoUrl: '/videos/Kayaking.MOV',
  },
  {
    id: 2,
    title: 'Setting up Fire',
    category: 'Fire Skills',
    videoUrl: '/videos/SettingupFire.MOV',
  },
  {
    id: 3,
    title: 'Chopping Wood',
    category: 'Fire Preparation',
    videoUrl: '/videos/ChoppingWood.MOV',
  },
  {
    id: 4,
    title: 'Roasting Marshmallows',
    category: 'Campfire',
    videoUrl: '/videos/RoastingMarshmellows.MOV',
  },
  {
    id: 5,
    title: 'Serenity on the Lake',
    category: 'Nature',
    videoUrl: '/videos/OntheLake.MOV',
  },
  {
    id: 6,
    title: 'Boating at Speed',
    category: 'Water Skills',
    videoUrl: '/videos/Boating.mov',
  },
];

export default function HomePage({ onNavigate, siteConfig }) {
  const [current, setCurrent] = useState(0);
  const [snapshotIndex, setSnapshotIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = carouselSlides.length;
  const totalSnaps = snapshotClips.length;

  // Auto-advance hero video every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  // Auto-advance snapshots carousel every 5 seconds (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setSnapshotIndex((prev) => (prev + 1) % totalSnaps);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSnaps, isHovered]);

  const goTo = (i) => setCurrent((i + total) % total);
  const goToSnap = (i) => setSnapshotIndex((i + totalSnaps) % totalSnaps);

  return (
    <div className="pb-20">
      {/* ─── Consolidated Video Hero ─── */}
      <section className="relative bg-forest text-canvas border-b-4 border-stone-900 min-h-[500px] md:min-h-[580px] flex flex-col justify-between overflow-hidden">
        {/* Background Video — reduced opacity so it's actually visible */}
        {carouselSlides[current].videoUrl && (
          <video
            key={carouselSlides[current].videoUrl}
            src={carouselSlides[current].videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40"
          />
        )}

        {/* Subtle dark gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/50 to-stone-950/70 pointer-events-none" />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20 flex-1 flex flex-col justify-center">
          <span className="inline-flex items-center gap-1.5 bg-campfire text-canvas border-2 border-stone-900 px-3 py-1 font-display font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#1C1917] mb-6 self-start">
            <TreePine className="w-3 h-3" /> {siteConfig.hero.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-white max-w-3xl">
            {siteConfig.hero.title}
          </h1>
          <p className="text-sm md:text-base text-stone-200 leading-relaxed font-semibold max-w-2xl mt-6">
            School of Life is a Tarbiyah-focused initiative designed to help our Muslim youth grow in faith, skill, and character through hands-on learning, outdoor education, and Sunnah-centered mentorship.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onNavigate('Events')}
              className="bg-campfire text-canvas px-5 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
            >
              Upcoming Events
            </button>
            <button
              onClick={() => onNavigate('About')}
              className="bg-transparent text-canvas px-5 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-canvas/40 hover:border-canvas hover:bg-white/10 transition-all duration-100 rounded-sm cursor-pointer"
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Dispatch Indicator Panel */}
        <div className="relative z-10 w-full bg-stone-950/85 border-t-2 border-stone-900 py-3.5 px-4 md:px-8 mt-12 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="bg-campfire text-canvas border border-stone-900 px-2 py-0.5 text-[8px] font-display font-black uppercase tracking-wider">
                  Field Dispatches
                </span>
                <span className="text-[10px] text-stone-400 font-bold">
                  Clip: {current + 1} / {total}
                </span>
              </div>
              <h3 className="text-sm font-display font-black text-white uppercase tracking-wide pt-0.5">
                {carouselSlides[current].label}
              </h3>
              <p className="text-xs text-stone-300 font-semibold max-w-2xl">
                {carouselSlides[current].description}
              </p>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center shrink-0">
              <button
                onClick={() => goTo(current - 1)}
                className="w-8 h-8 bg-canvas border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_#1C1917] active:shadow-none transition-all duration-100"
                aria-label="Previous clip"
              >
                <ChevronLeft className="w-4 h-4 text-stone-900" />
              </button>
              <div className="flex gap-1.5">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 border border-stone-900 rounded-sm cursor-pointer transition-all ${
                      i === current ? 'bg-campfire shadow-[1px_1px_0px_0px_#1C1917]' : 'bg-canvas/50 hover:bg-canvas'
                    }`}
                    aria-label={`Go to clip ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => goTo(current + 1)}
                className="w-8 h-8 bg-canvas border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_#1C1917] active:shadow-none transition-all duration-100"
                aria-label="Next clip"
              >
                <ChevronRight className="w-4 h-4 text-stone-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Snapshots Carousel ─── */}
      <section className="bg-canvas border-b-4 border-stone-900 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-display font-black uppercase tracking-widest text-campfire">Field Dispatches</span>
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 mt-1">
              Snapshots
            </h2>
          </div>

          {/* Carousel Container */}
          <div
            className="relative rounded-sm overflow-hidden trail-border trail-shadow"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Vertical/portrait format — like phone footage */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[9/16] max-h-[75vh] bg-stone-900">
              <video
                key={snapshotClips[snapshotIndex].videoUrl}
                src={snapshotClips[snapshotIndex].videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Bottom caption bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-4 md:p-6">
                <span className="text-[9px] font-display font-black uppercase tracking-widest text-campfire block mb-1">
                  {snapshotClips[snapshotIndex].category}
                </span>
                <h3 className="text-lg md:text-2xl font-display font-black uppercase tracking-tight text-white leading-tight">
                  {snapshotClips[snapshotIndex].title}
                </h3>
              </div>

              {/* Prev/Next arrows */}
              <button
                onClick={() => goToSnap(snapshotIndex - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-canvas/90 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:bg-canvas active:shadow-none transition-all duration-100 z-10"
                aria-label="Previous snapshot"
              >
                <ChevronLeft className="w-5 h-5 text-stone-900" />
              </button>
              <button
                onClick={() => goToSnap(snapshotIndex + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-canvas/90 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:bg-canvas active:shadow-none transition-all duration-100 z-10"
                aria-label="Next snapshot"
              >
                <ChevronRight className="w-5 h-5 text-stone-900" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 py-4 bg-stone-100 border-t-2 border-stone-900">
              {snapshotClips.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSnap(i)}
                  className={`w-2.5 h-2.5 border border-stone-900 rounded-sm cursor-pointer transition-all ${
                    i === snapshotIndex ? 'bg-campfire shadow-[1px_1px_0px_0px_#1C1917]' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to snapshot ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Vision Section ─── */}
      <section className="bg-white border-b-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Vision Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-display font-black uppercase tracking-widest text-forest">
                {siteConfig.vision.tagline}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 leading-none">
                {siteConfig.vision.title}
              </h2>

              {/* Hadith Block 1 */}
              <blockquote className="border-l-4 border-campfire pl-4 bg-stone-50 py-3 pr-3">
                <p className="text-sm text-stone-700 font-bold leading-relaxed italic">
                  "A strong believer is better and more beloved to Allah than a weak believer."
                </p>
                <cite className="text-[10px] font-display font-black uppercase tracking-wider text-campfire mt-1.5 block not-italic">
                  Sahih Muslim 2664
                </cite>
              </blockquote>

              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph1}
              </p>

              {/* Hadith Block 2 — Archery */}
              <blockquote className="border-l-4 border-forest pl-4 bg-stone-50 py-3 pr-3">
                <p className="text-sm text-stone-700 font-bold leading-relaxed italic">
                  "Indeed, Allah will admit three into Paradise by a single arrow: its maker who seeks good in making it, the one who shoots it, and the one who holds arrows for him."
                </p>
                <cite className="text-[10px] font-display font-black uppercase tracking-wider text-forest mt-1.5 block not-italic">
                  Sunan al-Tirmidhi 1637 / Jami al-Tirmidhi
                </cite>
              </blockquote>

              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph2}
              </p>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph3}
              </p>
            </div>

            {/* Right Column: Timeline + Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-canvas p-6 trail-border trail-shadow rounded-sm">
                <h3 className="text-xs font-display font-black uppercase tracking-wider text-campfire mb-4 flex items-center gap-1.5 border-b pb-2">
                  <Compass className="w-4 h-4" /> {siteConfig.timeline.title}
                </h3>
                <div className="space-y-4">
                  {siteConfig.timeline.items.map((item, index) => (
                    <div key={index} className={`flex gap-3 ${index > 0 ? 'border-t-2 border-stone-200 pt-4' : ''}`}>
                      <div className={`w-12 h-12 text-canvas border-2 border-stone-900 flex items-center justify-center font-display font-black text-xs shadow-[2px_2px_0px_0px_#1C1917] shrink-0 ${
                        index % 2 === 0 ? 'bg-forest' : 'bg-campfire'
                      }`}>
                        {item.year}
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-black text-stone-900">{item.title}</h4>
                        <p className="text-xs text-stone-600 font-semibold leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '🏹', label: 'Archery and Marksmanship' },
                  { icon: '🏊', label: 'Swimming and Water Safety' },
                  { icon: '🔥', label: 'Outdoor Cooking' },
                  { icon: '🧭', label: 'Wilderness Navigation' },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-100 p-3 trail-border rounded-sm flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#1C1917] transition-all duration-150">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-display font-black uppercase tracking-wider text-stone-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="bg-stone-900 text-canvas border-4 border-stone-900 p-8 md:p-12 shadow-[8px_8px_0px_0px_#D95D39] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <Mountain className="w-8 h-8 text-campfire mx-auto" />
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white leading-none">
              {siteConfig.cta.title}
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-semibold">
              {siteConfig.cta.description}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onNavigate('Events')}
                className="bg-campfire text-canvas px-6 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
              >
                View Events Schedule
              </button>
              <button
                onClick={() => onNavigate('About')}
                className="bg-transparent text-canvas px-6 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-canvas/40 hover:border-canvas hover:bg-white/10 transition-all duration-100 rounded-sm cursor-pointer"
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
