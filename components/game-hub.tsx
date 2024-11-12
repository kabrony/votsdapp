'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Trophy, Brain } from 'lucide-react';

export function GameHub() {
  return (
    <div className="container px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Vots.eth Gaming</h1>
        <p className="text-xl text-muted-foreground">
          Experience next-gen blockchain gaming with AI assistance
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold">Play Now</h2>
              <p className="text-muted-foreground">
                Jump into the action with our latest blockchain-powered games
              </p>
              <Button className="w-full">Start Playing</Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Trophy className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold">Tournaments</h2>
              <p className="text-muted-foreground">
                Compete in tournaments and win exclusive NFT rewards
              </p>
              <Button variant="outline" className="w-full">View Tournaments</Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold">AI Assistant</h2>
              <p className="text-muted-foreground">
                Get strategic advice and tips from our AI gaming assistant
              </p>
              <Button variant="secondary" className="w-full">Chat with AI</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}