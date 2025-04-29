import React from 'react';
import Card from '../components/Card';

function VotingPage() {

    

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="text-black max-w-3xl mx-auto">
                <h1 className="text-center text-3xl font-bold">Event Title</h1>
                <p className="text-center text-gray-600 mt-2">Event Description (if provided)</p>
                <div className="my-5">
                    <h2 className="text-xl font-semibold">Instructions</h2>
                    <p className="text-gray-600">Select your preferred candidate below.</p>
                </div>
                <div className="my-5">
                    <h2 className="text-xl font-semibold">Candidates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card name="Candidate 1" description="Description for Candidate 1" />
                        <Card name="Candidate 2" description="Description for Candidate 2" />
                        <Card name="Candidate 3" description="Description for Candidate 3" />
                        <Card name="Candidate 3" description="Description for Candidate 3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotingPage;