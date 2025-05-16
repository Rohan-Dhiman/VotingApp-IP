import { useEffect, useState } from "react";
import axios from "axios";

export default function RunningElectionsPage() {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRunningElections = async () => {
      try {
        const res = await axios.get("/api/elections/running"); // Adjust this endpoint based on your API
        setElections(res.data);
      } catch (error) {
        console.error("Error fetching running elections", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRunningElections();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading elections...</div>;
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 text-center">Running Elections</h2>
      {elections.length === 0 ? (
        <p className="text-gray-500 text-center py-6 md:py-8">No elections are currently running.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {elections.map((election) => (
            <div
              key={election._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200
                         border border-gray-200 p-4 md:p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{election.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Position: <span className="font-medium text-gray-800">{election.postion}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Pincode: <span className="font-medium text-gray-800">{election.pincode}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Start: <span className="font-medium text-gray-700">{new Date(election.startsOn).toLocaleDateString()}</span>
                </p>
                <p className="text-sm text-gray-500">
                  End: <span className="font-medium text-gray-700">{new Date(election.endsOn).toLocaleDateString()}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
