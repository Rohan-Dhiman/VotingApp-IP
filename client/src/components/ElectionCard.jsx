import React from 'react'

function ElectionCard() {
return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-md mx-auto my-4 shadow-md bg-gray-100">
        <h1 className="text-2xl mb-2 text-gray-800">Election Title</h1>
        <p className="text-base text-gray-600 mb-4">
            This is a brief description of the election. It provides some context about what this election is about.
        </p>
        <p className="text-lg font-bold text-gray-700 mb-4">
            Voting ends on: <span className="text-gray-900">2023-12-31</span>
        </p>
        <a href="/VotingPanel">

        <button className="px-5 py-2 text-lg text-white bg-gray-500 rounded hover:bg-gray-600" >
            Vote Now
        </button>
        </a>
    </div>
)
}

export default ElectionCard