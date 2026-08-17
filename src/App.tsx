import { useVoting } from "./hooks/useVoting";
import CandidateList from "./components/CandidatesList";
import VoteSummary from "./components/VoteSummary";
import Results from "./components/Results";
import {VoteConfirmation} from "./components/VoteConfirmation";
import VoteError from "./components/VoteError";
import {VoteWarning} from "./components/VoteConfirmation"



function App() {
const {
  candidates,
  selectedCandidate,
  selectedCandidateData,
  voterName,
  voteStatus,
  hasVoted,
  setVoterName,
  selectCandidate,
  castVote,
  addCandidate,
} = useVoting();
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-0 top-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6">
        <img
          src="https://res.cloudinary.com/jp3wixzz/image/upload/v1786939437/apf-logo_r6azk9.png"
          alt="VOTE//24"
          className="h-10 w-auto"
        />
        <h1 className="text-xl font-black tracking-tight">
          VOTE<span className="text-[#EE5E3B]">Hackathon3.0</span>HeadOfCohort
        </h1>

        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-zinc-300">
            LIVE
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5E3B]">
            Your voice matters
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            YOUR VOICE.
            <br />
            <span className="bg-linear-to-r from-[#EE5E3B] via-[#F69E37] to-[#FED013] bg-clip-text text-transparent">
              YOUR CHOICE.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
            Choose your candidate, cast your vote, and see the results
            unfold in real time.
          </p>
        </div>
      </section>

      {/* Voter Identity */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Step 01
            </p>

            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Enter Your Name
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Enter your name before casting your vote.
            </p>
          </div>

          <label
            htmlFor="voterName"
            className="mb-3 block text-sm font-medium text-zinc-300"
          >
            Your name
          </label>

<input
  id="voterName"
  type="text"
  value={voterName}
  onChange={(event) => setVoterName(event.target.value)}
  placeholder="e.g. Kosi"
  disabled={hasVoted}
  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FED013] focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
/>        </div>
      </section>

      {/* Candidates */}
      <CandidateList
        candidates={candidates}
        selectedCandidate={selectedCandidate}
        onSelect={selectCandidate}
        onAddCandidate={addCandidate}
      />

      <VoteSummary
  selectedCandidate={selectedCandidateData}
  onCastVote={castVote}
/>


<Results candidates={candidates} />

{voteStatus === "success" && (
  <VoteConfirmation voterName={voterName} />
)}
{voteStatus === "already-voted" && <VoteError />}

{voteStatus === "missing-name" && (
  <VoteWarning message="Enter your name before choosing a candidate." />
)}




    </main>


  );
}

export default App;
  // UI...

