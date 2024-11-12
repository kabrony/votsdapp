'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Star } from 'lucide-react';

export function GameShowcase() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Game Modes</h2>
          <p className="text-xl text-muted-foreground">
            Choose your style and start skating
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 p-6">
              <h3 className="text-xl font-bold mb-2">Street Mode</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Master street tricks and collect tokens
              </p>
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Play Now
              </Button>
            </div>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-purple-500/10 p-6">
              <h3 className="text-xl font-bold mb-2">Tournament</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Compete for glory and NFT rewards
              </p>
              <Button variant="secondary" className="gap-2">
                <Trophy className="h-4 w-4" />
                Join Now
              </Button>
            </div>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-500/10 p-6">
              <h3 className="text-xl font-bold mb-2">Training</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Practice with AI assistance
              </p>
              <Button variant="outline" className="gap-2">
                <Star className="h-4 w-4" />
                Start Training
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}