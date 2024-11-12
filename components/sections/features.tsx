'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Gamepad, Bot, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Gamepad className="h-6 w-6" />,
    title: "Unity Powered",
    description: "Smooth gameplay experience built with Unity's powerful game engine"
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Assistant",
    description: "Get personalized tips and tricks from our AI skating coach"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "NFT Rewards",
    description: "Unlock and collect unique skateboard NFTs and rare tricks"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
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
    </section>
  );
}