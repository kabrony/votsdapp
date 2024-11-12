'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Coins,
  Share2,
  Zap,
  Trophy,
  Users,
  Sparkles
} from 'lucide-react';

export function GameFeatures() {
  const features = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Play to Earn",
      description: "Earn $SKATE tokens while playing and trade them for exclusive items"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Cross-Platform",
      description: "Seamlessly play on mobile or desktop with Unity integration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Matches",
      description: "Jump into fast-paced 2-minute skating challenges"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Daily Rewards",
      description: "Complete daily missions to earn special rewards and NFTs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multiplayer",
      description: "Challenge friends or compete in global tournaments"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Custom Tricks",
      description: "Create and trade unique skateboarding trick NFTs"
    }
  ];

  return (
    <div className="bg-muted/50 py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Game Features</h2>
          <p className="text-xl text-muted-foreground">
            Experience next-gen blockchain gaming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-full h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}