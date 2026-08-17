import type { Candidate } from "../types/voting";
import CandidateCard from "./CandidateCard";
import AddCandidate from "./AddCandidate";


type CandidateListProps = {
  candidates: Candidate[];
  selectedCandidate: number | null;
  onSelect: (candidateId: number) => void;
  onAddCandidate: (name: string) => void;
};
function CandidateList({
  candidates,
  selectedCandidate,
  onSelect,
  onAddCandidate,
}: CandidateListProps) {
    return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      {/* Section heading */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
            Step 02
          </p>

          <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
            Who gets your vote?
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Pick one candidate. Make it count.
          </p>
        </div>

        <span className="w-fit rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400">
          {candidates.length}{" "}
          {candidates.length === 1 ? "candidate" : "candidates"}
        </span>
      </div>

      {/* Candidate grid */}
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {candidates.map((candidate, index) => (
    <CandidateCard
      key={candidate.id}
      candidate={candidate}
      index={index}
      isSelected={selectedCandidate === candidate.id}
      onSelect={onSelect}
    />
  ))}
</div>

<AddCandidate onAddCandidate={onAddCandidate} />    </section>
  );
}

export default CandidateList;