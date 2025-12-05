'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="h-16 bg-card border-b-4 border-border crt-border flex items-center px-6 gap-4">
      <div className="flex items-center gap-2 text-primary glow">
        <Search className="w-5 h-5" />
        <span className="text-sm">SEARCH:</span>
      </div>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter filename, tag, or keyword..."
        className="flex-1 bg-input border-2 border-border focus:border-primary focus:glow text-foreground placeholder:text-muted-foreground"
      />
      <div className="text-xs text-muted-foreground">
        [ESC] CLEAR
      </div>
    </div>
  )
}
