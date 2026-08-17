type VoteConfirmationProps = {
  voterName: string;
};

type VoteWarningProps = {
  message: string;
};


export function VoteConfirmation({
  voterName,
}: VoteConfirmationProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-4xl border border-emerald-500/20 bg-zinc-950 p-8 text-center shadow-2xl shadow-emerald-950/30">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-3xl text-emerald-400 ring-1 ring-emerald-500/20">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
          Vote recorded
        </p>

        <h2 className="mt-3 text-3xl font-black">
          You're officially counted.
        </h2>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          Thank you, {voterName}. Your vote has been successfully
          recorded.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-500">
          One voter. One vote. That's it.
        </div>
      </div>
    </div>
  );
}

export function VoteWarning({ message }: VoteWarningProps) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
      <div className="rounded-2xl border border-red-500/20 bg-zinc-950/95 p-4 shadow-2xl shadow-red-950/20 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            !
          </div>

          <div>
            <p className="font-bold text-white">
              Almost there
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}