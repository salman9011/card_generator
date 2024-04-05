import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import UserList from "./UserList";
function UserForm() {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    return storedUsers || [];
  });

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !image || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    const newUser = { username, image, phoneNumber };
    setUsers([...users, newUser]);

    setUsername("");
    setImage("");
    setPhoneNumber("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    localStorage.removeItem("users");
    setUsers([]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-4 pb-4 font-bold text-2xl">
        Id Card Generator
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <UserInput
          username={username}
          setUsername={setUsername}
          image={image}
          setImage={setImage}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleImageChange={handleImageChange}
          required
        />
        <button
          className=" bg-pink-200 m-auto mt-2 p-2 px-10 rounded-md hover:bg-orange-200"
          type="submit"
        >
          Add
        </button>
      </form>

      <button
        className="bg-pink-200 m-auto p-2 mt-2 hover:bg-orange-200 rounded-md"
        onClick={handleClear}
      >
        Clear All Data
      </button>
      <input
        className="border-solid  m-auto border-2 border-sky-500 w-96 h-14 shadow-2xl rounded-md p-2 mt-5"
        type="text"
        placeholder="Search by name... "
        value={searchTerm}
        onChange={handleSearch}
        required
      />
      <UserList filteredUsers={filteredUsers} />
    </div>
  );
}

export default UserForm;
