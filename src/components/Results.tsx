import type { Candidate } from "../types/voting";

type ResultsProps = {
  candidates: Candidate[];
};

function Results({ candidates }: ResultsProps) {
  const totalVotes = candidates.reduce(
    (total, candidate) => total + candidate.votes,
    0
  );

  const leader = candidates.reduce(
    (currentLeader, candidate) =>
      candidate.votes > currentLeader.votes
        ? candidate
        : currentLeader,
    candidates[0]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      {/* Heading */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#EE5E3B]">
          Live results
        </p>

        <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
          The scoreboard
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          Watch the votes change in real time.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
            Total votes
          </p>

          <p className="mt-3 text-4xl font-black">
            {totalVotes}
          </p>
        </div>

        <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F69E37]">
            Current leader
          </p>

          <p className="mt-3 text-2xl font-black">
            {leader?.name ?? "No votes yet"}
          </p>
        </div>
      </div>

      {/* Candidate results */}
      <div className="space-y-4">
        {candidates.map((candidate) => {
          const percentage =
            totalVotes === 0
              ? 0
              : Math.round((candidate.votes / totalVotes) * 100);

          const isLeader = candidate.id === leader?.id;

          return (
            <div
              key={candidate.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">
                      {candidate.name}
                    </h4>

                    {isLeader && candidate.votes > 0 && (
                      <span className="rounded-full bg-amber-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F69E37]">
                        Leading
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-zinc-600">
                    {candidate.votes} votes
                  </p>
                </div>

                <span className="text-lg font-black">
                  {percentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-linear-to-r from-[#EE5E3B] via-[#F69E37] to-[#FED013] transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Results;