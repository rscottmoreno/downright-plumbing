export { metadata } from './metadata';
import dynamic from 'next/dynamic';

const OurStoryContent = dynamic(() => import('./our-story-content').then(mod => ({ default: mod.OurStoryContent })), {
  loading: () => (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-amber-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-8 border border-white/30">
            <span className="font-semibold text-white">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Why We&apos;re Called<br /><span className="text-amber-400">Down Right</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            It&apos;s not just a business name. It&apos;s a promise. A tribute. And a reminder of what truly matters.
          </p>
        </div>
      </section>
    </main>
  ),
});

export default function OurStoryPage() {
  return <OurStoryContent />;
}
