export interface DotFile {
  id: string
  name: string
  category: string
  tags: string[]
  content: string
  description: string
}

export const categories = [
  { id: 'shell', name: 'SHELL', icon: '>' },
  { id: 'git', name: 'GIT', icon: '±' },
  { id: 'editors', name: 'EDITORS', icon: '≡' },
  { id: 'ai', name: 'AI CONFIG', icon: '◊' },
  { id: 'system', name: 'SYSTEM', icon: '⚙' },
]

export const dotfiles: DotFile[] = [
  {
    id: 'zshrc',
    name: '.zshrc',
    category: 'shell',
    tags: ['zsh', 'shell', 'config'],
    description: 'ZSH configuration with custom prompt',
    content: `# ZSH Configuration
# Path to oh-my-zsh installation
export ZSH="$HOME/.oh-my-zsh"

# Theme
ZSH_THEME="robbyrussell"

# Plugins
plugins=(git docker kubectl)

source $ZSH/oh-my-zsh.sh

# Custom aliases
alias ll='ls -lah'
alias gs='git status'
alias gp='git push'
alias gc='git commit -m'

# Environment variables
export EDITOR='vim'
export PATH="$HOME/bin:$PATH"

# Custom prompt
PROMPT='%F{green}[%*]%f %F{cyan}%~%f %F{yellow}❯%f '`,
  },
  {
    id: 'bash_profile',
    name: '.bash_profile',
    category: 'shell',
    tags: ['bash', 'shell', 'config'],
    description: 'Bash profile with environment setup',
    content: `# Bash Profile Configuration
# Load .bashrc if it exists
if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi

# Environment variables
export PATH="/usr/local/bin:$PATH"
export EDITOR="vim"
export VISUAL="vim"

# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Node version manager
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Custom functions
mkcd() {
    mkdir -p "$1" && cd "$1"
}`,
  },
  {
    id: 'gitconfig',
    name: '.gitconfig',
    category: 'git',
    tags: ['git', 'vcs', 'config'],
    description: 'Git global configuration',
    content: `[user]
    name = Your Name
    email = your.email@example.com

[core]
    editor = vim
    autocrlf = input
    excludesfile = ~/.gitignore_global

[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --graph --oneline --all

[color]
    ui = auto

[push]
    default = simple

[pull]
    rebase = false`,
  },
  {
    id: 'vimrc',
    name: '.vimrc',
    category: 'editors',
    tags: ['vim', 'editor', 'config'],
    description: 'Vim editor configuration',
    content: `" Vim Configuration
set nocompatible
filetype plugin indent on
syntax on

" UI Settings
set number
set relativenumber
set cursorline
set showmatch
set wildmenu

" Indentation
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set smartindent

" Search
set incsearch
set hlsearch
set ignorecase
set smartcase

" Key mappings
let mapleader = ","
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>

" Color scheme
colorscheme desert
set background=dark`,
  },
  {
    id: 'claude_md',
    name: 'claude.md',
    category: 'ai',
    tags: ['ai', 'claude', 'prompt'],
    description: 'Claude AI system prompt configuration',
    content: `# Claude AI Configuration

## System Prompt
You are a helpful AI assistant focused on:
- Clear, concise communication
- Technical accuracy
- Code best practices
- Security considerations

## Preferences
- Language: English
- Code style: Clean, well-commented
- Explanations: Detailed but accessible
- Format: Markdown for documentation

## Custom Instructions
1. Always explain your reasoning
2. Provide examples when helpful
3. Consider edge cases
4. Suggest improvements
5. Be honest about limitations`,
  },
  {
    id: 'tmux_conf',
    name: '.tmux.conf',
    category: 'system',
    tags: ['tmux', 'terminal', 'multiplexer'],
    description: 'Tmux terminal multiplexer config',
    content: `# Tmux Configuration
# Change prefix from C-b to C-a
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

# Split panes using | and -
bind | split-window -h
bind - split-window -v
unbind '"'
unbind %

# Reload config
bind r source-file ~/.tmux.conf

# Enable mouse mode
set -g mouse on

# Start windows at 1
set -g base-index 1
setw -g pane-base-index 1

# Status bar
set -g status-position bottom
set -g status-bg colour234
set -g status-fg colour137`,
  },
  {
    id: 'ssh_config',
    name: 'ssh_config',
    category: 'system',
    tags: ['ssh', 'network', 'security'],
    description: 'SSH client configuration',
    content: `# SSH Configuration
Host *
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_ed25519

Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519

Host production
    HostName prod.example.com
    User deploy
    Port 22
    IdentityFile ~/.ssh/prod_key`,
  },
  {
    id: 'git_aliases',
    name: 'git-aliases.sh',
    category: 'git',
    tags: ['git', 'aliases', 'snippet'],
    description: 'Useful Git aliases snippet',
    content: `#!/bin/bash
# Git Aliases Snippet

# Quick status
alias gs='git status -sb'

# Pretty log
alias gl='git log --oneline --graph --decorate'

# Undo last commit
alias gundo='git reset --soft HEAD~1'

# Clean branches
alias gclean='git branch --merged | grep -v "\\*" | xargs -n 1 git branch -d'

# Quick commit
function gac() {
    git add -A && git commit -m "$1"
}`,
  },
]
