import React from 'react'
import ElectionCard from '../components/ElectionCard'

function AvailablePolls() {
return (
    <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Available Polls</h1>
        <p className="text-gray-600 mb-6">Browse through the available polls and cast your vote.</p>
        <div className="bg-white shadow-md rounded-md p-6">
            <ElectionCard />
        </div>
    </div>
)
}

export default AvailablePolls