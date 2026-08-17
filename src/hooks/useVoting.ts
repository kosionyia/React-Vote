import { useState, useEffect } from "react";
import { initialCandidates } from "../data/candidates";
import type { Candidate, VoteStatus } from "../types/voting";




export function useVoting() {
  const [candidates, setCandidates] =
    useState<Candidate[]>(initialCandidates);

  const [selectedCandidate, setSelectedCandidate] =
    useState<number | null>(null);

  const [voterName, setVoterName] = useState("");

  const [votedVoters, setVotedVoters] =
    useState<string[]>([]);

  const [voteStatus, setVoteStatus] =
    useState<VoteStatus>("idle");

    useEffect(() => {
  if (voteStatus !== "success") {
    return;
  }

  const timer = setTimeout(() => {
    setVoteStatus("idle");
  }, 3000);

  return () => clearTimeout(timer);
}, [voteStatus]);

const selectCandidate = (candidateId: number) => {
  const normalizedName = voterName.trim().toLowerCase();

  if (!normalizedName) {
    setVoteStatus("missing-name");
    return;
  }

  if (votedVoters.includes(normalizedName)) {
    setVoteStatus("already-voted");
    return;
  }

  setSelectedCandidate(candidateId);
  setVoteStatus("idle");
}; 

const castVote = () => {
    const normalizedName = voterName.trim().toLowerCase();

    if (!normalizedName || selectedCandidate === null) {
      return;
    }

if (!normalizedName) {
    setVoteStatus("missing-name");
    return;
  }

    if (votedVoters.includes(normalizedName)) {
      setVoteStatus("already-voted");
      return;
    }

    setCandidates((currentCandidates) =>
      currentCandidates.map((candidate) =>
        candidate.id === selectedCandidate
          ? {
              ...candidate,
              votes: candidate.votes + 1,
            }
          : candidate
      )
    );

    setVotedVoters((currentVoters) => [
      ...currentVoters,
      normalizedName,
    ]);

    setSelectedCandidate(null);
    setVoteStatus("success");
  };

  const addCandidate = (name: string) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    const newCandidate: Candidate = {
      id: Date.now(),
      name: trimmedName,
      votes: 0,
    };

    setCandidates((currentCandidates) => [
      ...currentCandidates,
      newCandidate,
    ]);
  };

  const selectedCandidateData =
    candidates.find(
      (candidate) => candidate.id === selectedCandidate
    ) ?? null;

  const hasVoted =
    voterName.trim() !== "" &&
    votedVoters.includes(voterName.trim().toLowerCase());

  return {
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
  };
}