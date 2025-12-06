"use client"

import { categories } from "@/lib/dotfiles-data"

interface SidebarProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r-4 border-border crt-border flex flex-col">
      <div className="p-4 border-b-2 border-border">
        <h1 className="text-2xl font-bold glow-strong">
          <span className="text-terminal-blue">{">"}</span> <span className="text-primary">DOTFILE.SYS</span>
        </h1>
        <p className="text-xs text-muted-foreground mt-1">v1.0.1977</p>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left px-4 py-3 border-2 transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary glow"
                  : "bg-secondary text-secondary-foreground border-border hover:border-primary hover:glow"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t-2 border-border text-xs text-muted-foreground">
        <div className="glow">
          <span className="text-terminal-blue">[OK]</span> SYSTEM READY
        </div>
        <div className="mt-1">
          <span className="text-terminal-blue">{">"}</span> AWAITING INPUT_
        </div>
      </div>
    </div>
  )
}
