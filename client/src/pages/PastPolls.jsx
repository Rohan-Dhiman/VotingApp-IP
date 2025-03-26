import React from 'react'
import ElectionCard from '../components/ElectionCard'

function PastPolls() {
return (
    <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Past Polls</h1>
        <p className="text-lg text-gray-600 mb-4">The polls listed below are now closed.</p>
        <div className="bg-white shadow-md rounded p-4">
            <ElectionCard />
        </div>
    </div>
);
}

export default PastPolls