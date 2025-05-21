import { useState } from "react";
import axios from "axios";

export default function CreateElection() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [candidates, setCandidates] = useState([
    { name: "", party: "", age: "" }
  ]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Add a new empty candidate row
  const handleAddCandidate = () => {
    setCandidates([...candidates, { name: "", party: "", age: "" }]);
  };

  // Remove a candidate row
  const handleRemoveCandidate = (idx) => {
    setCandidates(candidates.filter((_, i) => i !== idx));
  };

  // Handle candidate field change
  const handleCandidateChange = (idx, field, value) => {
    setCandidates(
      candidates.map((c, i) =>
        i === idx ? { ...c, [field]: value } : c
      )
    );
  };

  // Handle form submit
  const handleCreateElection = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Validate candidates
    if (candidates.some(c => !c.name)) {
      setError("Each candidate must have a name.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/v1/elections/results", {
        title,
        description,
        startDate,
        endDate,
        region,
        candidates: candidates.map(c => ({
          name: c.name,
          party: c.party,
          age: c.age ? Number(c.age) : undefined
        }))
      });
      setSuccess("Election created successfully!");
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setRegion("");
      setCandidates([{ name: "", party: "", age: "" }]);
    } catch (err) {
      setError("Failed to create election");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-4xl w-full p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Create New Election</h2>
        {error && <div className="mb-4 text-red-600 text-center font-medium">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center font-medium">{success}</div>}
        <form onSubmit={handleCreateElection} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">Candidates</label>
            <div className="space-y-4">
              {candidates.map((candidate, idx) => (
                <div key={idx} className="flex gap-3 items-end">
                  <div className="flex-1">
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent mb-2"
                      placeholder="Candidate Name"
                      value={candidate.name}
                      onChange={e => handleCandidateChange(idx, "name", e.target.value)}
                      required
                    />
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent mb-2"
                      placeholder="Party"
                      value={candidate.party}
                      onChange={e => handleCandidateChange(idx, "party", e.target.value)}
                    />
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="Age"
                      type="number"
                      value={candidate.age}
                      onChange={e => handleCandidateChange(idx, "age", e.target.value)}
                    />
                  </div>
                  {candidates.length > 1 && (
                    <button
                      type="button"
                      className="bg-red-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-600"
                      onClick={() => handleRemoveCandidate(idx)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
                onClick={handleAddCandidate}
              >
                Add Candidate
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-semibold transition duration-300"
          >
            Create Election
          </button>
        </form>
      </div>
    </div>
  );
}