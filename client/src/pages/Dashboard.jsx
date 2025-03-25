import React from 'react'
import ElectionCard from '../components/ElectionCard'


function Dashboard() {
return (
    <div className="max-w-5xl mx-auto p-5">
        <section className="p-5 text-center bg-gray-100 rounded-2xl">
            <h1 className="text-4xl font-bold">Welcome to the Voting App Dashboard</h1>
            <p className="text-lg mt-2">Cast your vote, view results, and manage polls effortlessly.</p>
        </section>
        <div className="bg-gray-200 p-5 rounded-2xl">
            <div className="mt-5">
                <h2 className="text-3xl font-semibold mb-3">Ongoing Elections</h2>
                <hr className="border-t-2 border-gray-300 mb-5" />
                <div className="flex gap-5 flex-wrap justify-center">
                    <ElectionCard />
                    <ElectionCard />
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-3xl font-semibold mb-3">Upcoming Elections</h2>
                <hr className="border-t-2 border-gray-300 mb-5" />
                <div className="flex gap-5 flex-wrap justify-center">
                    <ElectionCard />
                    <ElectionCard />
                </div>
            </div>
        </div>
    </div>
)
}

export default Dashboard