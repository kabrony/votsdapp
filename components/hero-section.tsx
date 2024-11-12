'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Skateboard, Gamepad2, Trophy } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

      <div className="container px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Skateboard className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Street Skater X
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Master the streets, dodge obstacles, and become a legendary skater in this
            blockchain-powered adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Gamepad2 className="h-5 w-5" />
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Trophy className="h-5 w-5" />
              View Rankings
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}