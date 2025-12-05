'use client'

interface StatusBarProps {
  currentFile: string
  totalFiles: number
  currentIndex: number
}

export function StatusBar({ currentFile, totalFiles, currentIndex }: StatusBarProps) {
  return (
    <div className="h-12 bg-card border-t-4 border-border crt-border flex items-center justify-between px-6 text-sm">
      <div className="flex items-center gap-6">
        <div className="glow text-primary">
          {'>'} {currentFile || 'NO FILE SELECTED'}
        </div>
        <div className="text-muted-foreground">
          [{currentIndex + 1}/{totalFiles}]
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-muted-foreground">
        <div>[←→] NAVIGATE</div>
        <div>[/] SEARCH</div>
        <div>[ESC] CLEAR</div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse glow"></div>
        <span className="text-primary glow">ONLINE</span>
      </div>
    </div>
  )
}
