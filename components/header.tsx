'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GameController, Bot, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/mode-toggle';

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <GameController className="h-6 w-6" />
            <span className="text-xl font-bold">Vots.eth</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Play</Button>
            <Button variant="ghost">Leaderboard</Button>
            <Button variant="ghost">Marketplace</Button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bot className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <ConnectButton />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Play</DropdownMenuItem>
              <DropdownMenuItem>Leaderboard</DropdownMenuItem>
              <DropdownMenuItem>Marketplace</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}