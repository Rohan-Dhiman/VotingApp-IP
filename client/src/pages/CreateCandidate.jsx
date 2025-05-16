import React, { useState } from 'react';
import axios from 'axios';

const CreateCandidate = () => {
  const [candidateData, setCandidateData] = useState({
    name: '',
    party: '',
  });
  const [photo, setPhoto] = useState(null);
  const [partyLogo, setPartyLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateData({ ...candidateData, [name]: value });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0];
    if (file) {
      if (fieldName === 'photo') {
        setPhoto(file);
      } else {
        setPartyLogo(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setSuccess(false);

    const formData = new FormData();
    formData.append('name', candidateData.name);
    formData.append('party', candidateData.party);
    if (photo) {
      formData.append('photo', photo);
    }
    if (partyLogo) {
      formData.append('partyLogo', partyLogo);
    }

    try {
      const response = await axios.post('/api/candidates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        setSuccess(true);
        setCandidateData({ name: '', party: '' }); // Reset form
        setPhoto(null);
        setPartyLogo(null);
      } else {
        setError('Failed to create candidate.  Server responded with an error.');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while creating the candidate.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Create Candidate</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={candidateData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Enter candidate name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Party</label>
            <input
              type="text"
              name="party"
              value={candidateData.party}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Enter party name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'photo')}
              className="w-full text-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Party Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'partyLogo')}
              className="w-full text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300
                       ${loading ? 'bg-gray-400 text-gray-600 cursor-not-allowed' :
                      'bg-gray-800 text-white hover:bg-gray-900'}`}
          >
            {loading ? 'Creating...' : 'Create Candidate'}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">Candidate created successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateCandidate;

