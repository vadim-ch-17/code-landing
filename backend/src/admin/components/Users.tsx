import React, { useState, useEffect } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
    // console.log(data);
  };

  return (
    <div>
      <button className="btn btn-primary custom-btn" onClick={fetchUsers}>
        Fetch Users
      </button>
      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export { Users };
