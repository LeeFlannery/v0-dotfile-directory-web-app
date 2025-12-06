"use client"

import type { DotFile } from "@/lib/dotfiles-data"
import { ChevronRight } from "lucide-react"

interface FileListProps {
  files: DotFile[]
  selectedFileId: string | null
  onSelectFile: (fileId: string) => void
}

export function FileList({ files, selectedFileId, onSelectFile }: FileListProps) {
  if (files.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        <div className="text-4xl mb-4 text-terminal-blue">◊</div>
        <div>NO FILES FOUND</div>
        <div className="text-xs mt-2">
          <span className="text-terminal-blue">{">"}</span> TRY DIFFERENT SEARCH_
        </div>
      </div>
    )
  }

  return (
    <div className="divide-y-2 divide-border">
      {files.map((file) => (
        <button
          key={file.id}
          onClick={() => onSelectFile(file.id)}
          className={`w-full text-left p-4 transition-all ${
            selectedFileId === file.id
              ? "bg-primary text-primary-foreground glow"
              : "bg-card text-card-foreground hover:bg-secondary hover:border-l-4 hover:border-terminal-blue"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <ChevronRight
                  className={`w-4 h-4 flex-shrink-0 ${selectedFileId === file.id ? "" : "text-terminal-blue"}`}
                />
                <span className="font-bold truncate">{file.name}</span>
              </div>
              <p className="text-xs opacity-80 line-clamp-1 ml-6">{file.description}</p>
              <div className="flex flex-wrap gap-2 mt-2 ml-6">
                {file.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-accent text-accent-foreground border border-border">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
