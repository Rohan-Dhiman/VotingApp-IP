import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateElection() {
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [pincode, setPincode] = useState("");
  const [startsOn, setStartsOn] = useState("");
  const [endsOn, setEndsOn] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState("");

  useEffect(() => {
    // Fetch existing candidates from your API
    // axios.get("/api/candidates")
    //   .then((res) => {
    //     setCandidates(res.data);
    //   })
    //   .catch(err => {
    //     console.error("Failed to fetch candidates:", err);
    //     alert("Failed to fetch candidates. Please check the console for errors.");
    //   });
      // Dummy data for candidates
      setCandidates([
        { _id: '1', name: 'Candidate A', party: 'Party X' },
        { _id: '2', name: 'Candidate B', party: 'Party Y' },
        { _id: '3', name: 'Candidate C', party: 'Party Z' },
      ]);
  }, []);

  const handleCreateElection = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/elections", {
        title,
        postion: position,
        pincode: Number(pincode),
        startsOn: new Date(startsOn),
        endsOn: new Date(endsOn),
        candidates: selectedCandidates
      });
      alert("Election created successfully!");
    } catch (err) {
      alert("Failed to create election");
      console.error(err);
    }
  };

  const handleAddNewCandidate = async () => {
    if (!newCandidateName) return;
    try {
      const res = await axios.post("/api/candidates", { name: newCandidateName });
      setCandidates([...candidates, res.data]);
      setSelectedCandidates([...selectedCandidates, res.data._id]);
      setNewCandidateName("");
    } catch (err) {
      alert("Failed to add candidate");
      console.error(err);
    }
  };

  const toggleCandidateSelection = (candidateId) => {
    setSelectedCandidates(prevSelected =>
      prevSelected.includes(candidateId)
        ? prevSelected.filter(id => id !== candidateId)
        : [...prevSelected, candidateId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-4xl w-full p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Create New Election</h2>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Pincode"
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Starts On</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              type="date"
              value={startsOn}
              onChange={(e) => setStartsOn(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ends On</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              type="date"
              value={endsOn}
              onChange={(e) => setEndsOn(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">Select Candidates</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {candidates.map((candidate) => (
                <div
                  key={candidate._id}
                  className={`
                    flex items-center p-4 rounded-lg border
                    ${selectedCandidates.includes(candidate._id)
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-100 transition-colors"
                    }
                    cursor-pointer
                  `}
                  onClick={() => toggleCandidateSelection(candidate._id)}
                >
                  <input
                    type="checkbox"
                    id={`candidate-${candidate._id}`}
                    className="mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2"
                    checked={selectedCandidates.includes(candidate._id)}
                    onChange={() => toggleCandidateSelection(candidate._id)} // Keep checkbox controlled
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      {candidate.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {candidate.party}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Add New Candidate</label>
            <div className="flex space-x-3">
              <input
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                placeholder="Candidate Name"
                value={newCandidateName}
                onChange={(e) => setNewCandidateName(e.target.value)}
              />
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
                onClick={handleAddNewCandidate}
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

