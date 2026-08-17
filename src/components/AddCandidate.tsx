import { useState } from "react";

type AddCandidateProps = {
  onAddCandidate: (name: string) => void;
};

function AddCandidate({ onAddCandidate }: AddCandidateProps) {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) return;

    onAddCandidate(name);
    setName("");
    setIsOpen(false);
  };

  return (
    <div className="mt-6">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 px-6 py-5 text-sm font-bold text-zinc-500 transition-all hover:border-[#FED013] hover:bg-[#FED013]/5 hover:text-[#FED013]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 transition-colors group-hover:border-[#FED013]">
            +
          </span>

          Add a candidate
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#EE5E3B]/20 bg-[#EE5E3B]/5 p-5"
        >
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE5E3B]">
              New candidate
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Add someone to the ballot.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Candidate name"
              autoFocus
              className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#FED013] focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="submit"
              className="rounded-2xl bg-[#F69E37] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#F69E37]"

            >
              Add candidate
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-zinc-800 px-6 py-3.5 text-sm font-bold text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddCandidate;