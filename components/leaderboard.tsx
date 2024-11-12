'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Medal } from 'lucide-react';

const topPlayers = [
  {
    rank: 1,
    name: "CryptoSkater",
    score: 2850,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
    address: "0x1234...5678"
  },
  {
    rank: 2,
    name: "BlockchainRider",
    score: 2720,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop",
    address: "0x8765...4321"
  },
  {
    rank: 3,
    name: "StreetMaster",
    score: 2680,
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop",
    address: "0x9876...1234"
  },
  {
    rank: 4,
    name: "TokenGrinder",
    score: 2590,
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop",
    address: "0x5432...8765"
  },
  {
    rank: 5,
    name: "NFTSkater",
    score: 2510,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop",
    address: "0x2468...1357"
  }
];

export function Leaderboard() {
  return (
    <div className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Top Skaters</h2>
        <p className="text-xl text-muted-foreground">
          The most skilled players in Street Skater X
        </p>
      </motion.div>

      <Card className="max-w-4xl mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Wallet</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPlayers.map((player, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {player.rank <= 3 && (
                      <Medal className={`h-5 w-5 ${
                        player.rank === 1 ? 'text-yellow-500' :
                        player.rank === 2 ? 'text-gray-400' :
                        'text-amber-600'
                      }`} />
                    )}
                    #{player.rank}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{player.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {player.score.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-mono text-muted-foreground">
                  {player.address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}