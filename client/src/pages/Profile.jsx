import React from 'react'

function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 max-w-xl bg-white rounded-lg shadow-md">
            <img
                src="https://swarajya.gumlet.io/swarajya/2024-06/86181ebe-60cb-467d-a01a-f88c58b9632c/27_06_1.png?w=610&q=50&compress=true&format=auto"
                alt="Profile"
                className="block mx-auto "
            />
            <h2 className="text-center text-3xl font-semibold mt-6 mb-8">John Doe</h2>
            <p className="text-gray-700 text-lg"><strong>Phone Number:</strong> +1 234 567 890</p>
            <p className="text-gray-700 text-lg"><strong>Aadhaar Number:</strong> 1234-5678-9012</p>
            <p className="text-gray-700 text-lg"><strong>Voter ID:</strong> ABC1234567</p>
            <p className="text-gray-700 text-lg"><strong>Address:</strong> 123 Main Street, Springfield, USA</p>
        </div>
    </div>
  )
}

export default Profile