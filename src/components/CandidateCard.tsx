import type { Candidate } from "../types/voting";

type CandidateCardProps = {
  candidate: Candidate;
  index: number;
  isSelected: boolean;
  onSelect: (candidateId: number) => void;
};

function CandidateCard({
  candidate,
  index,
  isSelected,
  onSelect,
}: CandidateCardProps) {
  return (
    <div
      onClick={() => onSelect(candidate.id)}
      className={`group relative cursor-pointer overflow-hidden rounded-4xl border p-6 transition-all duration-300 sm:p-7 ${
        isSelected
          ? "border-[#F69E37] bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          : "border-zinc-800 bg-zinc-900/60 hover:-translate-y-1 hover:border-[#F69E37] hover:bg-zinc-900"
      }`}
    >
      {/* Inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/3" />

      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

      {/* Candidate number */}
      <div className="absolute right-6 top-5 text-7xl font-black tracking-tighter text-zinc-800/40 transition-colors duration-300 group-hover:text-orange-500/10">
        0{index + 1}
      </div>

      {/* Candidate avatar */}
      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black transition-all duration-300 ${
            isSelected
              ? "bg-[#F69E37] text-white shadow-lg shadow-[#F69E37]/30 ring-1 ring-[#F69E37]"
              : "bg-linear-to-br from-[#EE5E3B]/20 to-[#FED013]/10 text-[#F69E37] ring-1 ring-inset ring-[#F69E37]/20"
          }`}
        >
          {isSelected ? "✓" : candidate.name.charAt(0)}
        </div>

        {/* Status badge */}
        <span
          className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
            isSelected
              ? "border-[#F69E37]/30 bg-[#F69E37]/20 text-[#F69E37]"
              : "border-zinc-800 bg-zinc-950/80 text-zinc-500"
          }`}
        >
          {isSelected ? "Selected ✓" : "Candidate"}
        </span>
      </div>

      {/* Candidate information */}
      <div className="relative mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
         
        </p>

        <h4 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
          {candidate.name}
        </h4>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-zinc-800" />

      {/* Vote information */}
      <div className="relative flex items-end justify-between gap-4">
        <div>
          <p className="text-4xl font-black tracking-tight">
            {candidate.votes}
          </p>

          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Total votes
          </p>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(candidate.id);
          }}
          className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 active:scale-95 ${
            isSelected
              ? "bg-[#F69E37] text-white shadow-lg shadow-[#F69E37]/20"
              : "bg-white text-black hover:scale-105 hover:bg-[#F69E37] hover:text-white"
          }`}
        >
          {isSelected ? "Selected ✓" : "Vote →"}
        </button>
      </div>
    </div>
  );
}

export default CandidateCard;