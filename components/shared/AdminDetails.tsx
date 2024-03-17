import React from 'react';

interface Admin {
  name: string;
  email: string;
  role: string;
  contact: string;
  // Add more properties as needed
}

interface AdminDetailsProps {
  admin: Admin;
}

const AdminDetails: React.FC<AdminDetailsProps> = ({ admin }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className='text-black mb-1 text-1xl'>Contact the admin for manual cash payment or pay with an online transaction by choosing your package.</h1>
      <h3 className="text-2xl text-purple-500 font-semibold mb-4">Admin Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 font-semibold">Name:</p>
          <p className="text-gray-900">{admin.name}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Email:</p>
          <p className="text-gray-900">{admin.email}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Role:</p>
          <p className="text-gray-900">{admin.role}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Contact Us:</p>
          <p className="text-gray-900 font-semibold">{admin.contact}</p>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default AdminDetails;
