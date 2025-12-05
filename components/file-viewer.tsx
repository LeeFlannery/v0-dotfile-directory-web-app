'use client'

import { DotFile } from '@/lib/dotfiles-data'
import { ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FileViewerProps {
  file: DotFile | null
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

export function FileViewer({ file, onPrevious, onNext, canGoPrevious, canGoNext }: FileViewerProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (file) {
      await navigator.clipboard.writeText(file.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!file) {
    return (
      <div className="flex-1 flex items-center justify-center bg-card">
        <div className="text-center">
          <div className="text-6xl mb-4 text-primary glow-strong">◊</div>
          <div className="text-xl text-muted-foreground glow">
            {'>'} SELECT A FILE TO VIEW_
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            Use sidebar or search to browse dotfiles
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-card">
      {/* File header */}
      <div className="border-b-4 border-border p-4 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary glow mb-1">
            {'>'} {file.name}
          </h2>
          <p className="text-sm text-muted-foreground">{file.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {file.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-accent text-accent-foreground border-2 border-border glow"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="border-2 border-border hover:border-primary hover:glow"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                COPIED
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                COPY
              </>
            )}
          </Button>
        </div>
      </div>

      {/* File content */}
      <div className="flex-1 overflow-auto p-6">
        <pre className="text-sm leading-relaxed text-foreground glow font-code">
          <code>{file.content}</code>
        </pre>
      </div>

      {/* Navigation controls */}
      <div className="border-t-4 border-border p-4 flex items-center justify-between">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="outline"
          className="border-2 border-border hover:border-primary hover:glow disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          PREVIOUS
        </Button>
        
        <div className="text-sm text-muted-foreground">
          USE ARROW KEYS TO NAVIGATE
        </div>
        
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          variant="outline"
          className="border-2 border-border hover:border-primary hover:glow disabled:opacity-30"
        >
          NEXT
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
