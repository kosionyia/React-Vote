function VoteError() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
      <div className="rounded-2xl border border-red-500/20 bg-zinc-950/95 p-4 shadow-2xl shadow-red-950/20 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            !
          </div>

          <div>
            <p className="font-bold text-white">
              Vote already recorded
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              This voter has already cast their vote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoteError;