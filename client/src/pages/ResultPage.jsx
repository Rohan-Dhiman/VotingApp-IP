import React from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

function ResultPage() {
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const barData = {
    labels: ['Candidate A', 'Candidate B', 'Candidate C'],
    datasets: [
        {
            label: 'Votes',
            data: [500, 300, 200],
            backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
        },
    ],
};

const pieData = {
    labels: ['Candidate A', 'Candidate B', 'Candidate C'],
    datasets: [
        {
            data: [500, 300, 200],
            backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
        },
    ],
};

return (
    <div className="p-5 font-sans bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
            <h1 className="text-2xl font-bold mb-4">Election Results</h1>
            <p className="text-red-600 font-semibold mb-6">Voting Closed</p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Results Overview</h2>
                <div className="flex justify-around mb-6">
                    <div className="text-center">
                        <h3 className="text-lg font-medium mb-2">Bar Chart</h3>
                        <div className="w-72 h-48">
                            <Bar data={barData} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-medium mb-2">Pie Chart</h3>
                        <div className="w-48 h-48">
                            <Pie data={pieData} />
                        </div>
                    </div>
                </div>

                <h3 className="text-lg font-medium mb-4">Ranked Choice Voting Table</h3>
                <table className="w-full border-collapse mb-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Rank</th>
                            <th className="border border-gray-300 px-4 py-2">Candidate</th>
                            <th className="border border-gray-300 px-4 py-2">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1</td>
                            <td className="border border-gray-300 px-4 py-2">Candidate A</td>
                            <td className="border border-gray-300 px-4 py-2">500</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2</td>
                            <td className="border border-gray-300 px-4 py-2">Candidate B</td>
                            <td className="border border-gray-300 px-4 py-2">300</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="text-lg font-medium mb-2">Total Votes Cast</h3>
                <p className="mb-4">800</p>

                <p className="italic text-gray-600">
                    Note: All votes were cast anonymously to ensure voter privacy.
                </p>
            </div>
        </div>
    </div>
);
}

export default ResultPage