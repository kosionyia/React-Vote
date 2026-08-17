import type { Candidate } from "../types/voting";

type VoteSummaryProps = {
  selectedCandidate: Candidate | null;
  onCastVote: () => void;
};

function VoteSummary({
  selectedCandidate,
  onCastVote,
}: VoteSummaryProps) {
  if (!selectedCandidate) {
    return null;
  }

  return (
    <section className="sticky bottom-4 z-40 mx-auto max-w-7xl px-4 sm:px-6 mb-5">
      <div className="overflow-hidden rounded-4xl border border-orange-500/30 bg-zinc-950/90 p-4 shadow-2xl shadow-orange-950/30 backdrop-blur-xl sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Selection info */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F69E37] text-lg font-black text-white shadow-lg shadow-orange-500/20">
              {selectedCandidate.name.charAt(0)}
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Your selection
              </p>

              <h3 className="mt-1 text-lg font-black">
                {selectedCandidate.name}
              </h3>
            </div>
          </div>

          {/* Action */}
          <button
            type="button"
            onClick={onCastVote}
            className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-black transition-all duration-300 hover:bg-[#F69E37] hover:text-white active:scale-[0.98]"
          >
            CAST MY VOTE

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default VoteSummary;