import React from 'react';

function UserList({ filteredUsers }) {
  return (
    <div className='flex gap-4 mt-10 '>
      {filteredUsers.map((user, index) => (
        <div key={index} className='border-solid border-2 border-slate-600 rounded-md shadow-lg p-4'>
          <p>Name: {user.username}</p>
          <img src={user.image} alt="User" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <p>Phone: {user.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
