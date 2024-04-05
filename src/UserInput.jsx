import React from 'react';

function UserInput({ username, setUsername, image, setImage, phoneNumber, setPhoneNumber, handleImageChange, handleClear }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <label className='font-bold'>Username</label>
      <input className='border-solid border-2 border-sky-500 w-96 py-2 rounded-md shadow-lg pl-2'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required
      />
      <label className='font-bold pt-4'>Image</label>
      <input 
        type="file"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      <label className='font-bold pt-6'>ID:</label>
      <input className='border-solid border-2 border-sky-500 w-96 py-2 rounded-md shadow-lg pl-2'
        type="text"
        inputMode="tel"
        pattern="[0-9]*" 
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)} required
      />
      <button className='bg-pink-200 p-2 px-4 mt-4 rounded-md hover:bg-orange' type="button" onClick={handleClear}>Clear</button>
    </div>
  );
}

export default UserInput;
