'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Skateboard } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="hero-gradient absolute inset-0" />
      
      <div className="container relative px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-6 p-3 bg-primary/10 rounded-full">
            <Skateboard className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Street Skater X
            <span className="block text-primary">Web3 Edition</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master the streets, earn tokens, and become a legendary skater
          </p>
          <Button size="lg" className="gap-2">
            <Skateboard className="h-5 w-5" />
            Play Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}