
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import { Link } from 'react-router-dom';

const AdminUsersPage = () => {
  const { getAllUsers } = useUserContext();
  const users = getAllUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cpmBlue to-cpmBlack p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">User Lists</h1>
          <Link to="/" className="text-cpmYellow hover:underline">
            Back to Home
          </Link>
        </div>
        
        {users.length === 0 ? (
          <div className="bg-black/30 rounded-lg p-8 text-center">
            <p className="text-white text-lg">No users registered yet.</p>
          </div>
        ) : (
          <div className="bg-black/30 rounded-lg overflow-hidden">
            <table className="w-full text-white">
              <thead className="bg-black/50">
                <tr>
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Full Name</th>
                  <th className="px-6 py-3 text-left">Username</th>
                  <th className="px-6 py-3 text-left">Bkash Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-white/10 hover:bg-white/5">
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.fullName}</td>
                    <td className="px-6 py-4">
                      <Link to={`/profile/${user.username}`} className="text-cpmYellow hover:underline">
                        {user.username}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{user.bkashNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsersPage;
