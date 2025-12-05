'use client'

import { useState, useEffect, useMemo } from 'react'
import { Sidebar } from '@/components/sidebar'
import { SearchBar } from '@/components/search-bar'
import { StatusBar } from '@/components/status-bar'
import { FileList } from '@/components/file-list'
import { FileViewer } from '@/components/file-viewer'
import { dotfiles } from '@/lib/dotfiles-data'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('shell')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null)

  // Filter files based on category and search
  const filteredFiles = useMemo(() => {
    let files = dotfiles.filter((file) => file.category === selectedCategory)
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      files = files.filter(
        (file) =>
          file.name.toLowerCase().includes(query) ||
          file.description.toLowerCase().includes(query) ||
          file.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }
    
    return files
  }, [selectedCategory, searchQuery])

  // Get current file
  const currentFile = useMemo(
    () => dotfiles.find((file) => file.id === selectedFileId) || null,
    [selectedFileId]
  )

  // Get current index in filtered files
  const currentIndex = useMemo(
    () => filteredFiles.findIndex((file) => file.id === selectedFileId),
    [filteredFiles, selectedFileId]
  )

  // Navigation functions
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedFileId(filteredFiles[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredFiles.length - 1) {
      setSelectedFileId(filteredFiles[currentIndex + 1].id)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setSearchQuery('')
      } else if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        document.querySelector('input')?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, filteredFiles])

  // Auto-select first file when category changes
  useEffect(() => {
    if (filteredFiles.length > 0 && !filteredFiles.find((f) => f.id === selectedFileId)) {
      setSelectedFileId(filteredFiles[0].id)
    }
  }, [filteredFiles, selectedFileId])

  return (
    <div className="h-screen flex flex-col">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category)
            setSearchQuery('')
          }}
        />
        
        <div className="flex-1 flex overflow-hidden border-l-4 border-r-4 border-border">
          <div className="w-96 border-r-4 border-border overflow-auto bg-card">
            <FileList
              files={filteredFiles}
              selectedFileId={selectedFileId}
              onSelectFile={setSelectedFileId}
            />
          </div>
          
          <FileViewer
            file={currentFile}
            onPrevious={goToPrevious}
            onNext={goToNext}
            canGoPrevious={currentIndex > 0}
            canGoNext={currentIndex < filteredFiles.length - 1}
          />
        </div>
      </div>
      
      <StatusBar
        currentFile={currentFile?.name || ''}
        totalFiles={filteredFiles.length}
        currentIndex={currentIndex}
      />
    </div>
  )
}
