import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { GameShowcase } from '@/components/sections/game-showcase';
import { Rankings } from '@/components/sections/rankings';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <GameShowcase />
        <Rankings />
      </main>
      <Footer />
    </div>
  );
}