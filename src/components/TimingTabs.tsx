'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

const timings = ['Immediate', '5s', '10s', '30s'] as const;

interface TimingTabsProps {
  onSelect: (timing: string) => void;
  active: string;
}

export default function TimingTabs({ onSelect, active }: TimingTabsProps) {
  return (
    <div className="flex gap-2 mb-4">
      {timings.map((label) => (
        <Button
          key={label}
          // variant={active === label ? 'default' : 'outline'}
          onClick={() => onSelect(label)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
