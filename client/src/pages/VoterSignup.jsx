import React, { useState } from 'react';
const VoterSignup = () => {

const [form, setForm] = useState({

name: '',

aadhar: '',

photo: null,

mobile: '',

password: '',

confirmPassword: '',

region: '',

});
const regions = ['North', 'South', 'East', 'West', 'Central'];
const handleChange = (e ) => {

const { name, value, files } = e.target;

setForm({

...form,

[name]: files ? files[0] : value,

});

};
const handleSubmit = (e) => {

e.preventDefault();

// Submit logic here

console.log('Submitted:', form);

};
return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Voter Signup</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Aadhar Number</label>
        <input
          name="aadhar"
          type="text"
          placeholder="12-digit Aadhar number"
          value={form.aadhar}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
        <input
          name="photo"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full text-gray-700 file:bg-gray-100 file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:text-sm file:font-medium hover:file:bg-gray-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          placeholder="10-digit mobile number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Re-enter password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
        <select
          name="region"
          value={form.region}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select Region</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300 ease-in-out"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>
);

};
export default VoterSignup;
