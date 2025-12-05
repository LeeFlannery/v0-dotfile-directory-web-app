export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-primary p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="crt-border p-8 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 animate-pulse"></div>
          
          <h1 className="text-3xl font-bold glow-strong mb-8 text-center tracking-widest">
            SYSTEM LOADING
          </h1>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">CORE KERNEL</span>
              <span className="text-primary glow">OK</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">MEMORY BANKS</span>
              <span className="text-primary glow">OK</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">DOTFILE INDEX</span>
              <span className="animate-pulse">LOADING...</span>
            </div>
          </div>

          <div className="mt-8 h-2 bg-secondary border border-border">
            <div className="h-full bg-primary w-2/3 animate-[width_2s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="mt-4 text-center text-xs text-muted-foreground animate-pulse">
            PLEASE WAIT_
          </div>
        </div>
      </div>
    </div>
  )
}
