import React, { useState } from "react";
import './admin.css';

const Admin = () => {
  // Sample data for users, in a real scenario, you would fetch this from your backend
  const [users, setUsers] = useState([
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
  ]);

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");

  const handleCreateUser = () => {
    if (!newUsername || !newPassword) {
      alert("Please provide both username and password.");
      return;
    }

    const newUser = {
      id: users.length + 1,
      username: newUsername,
      password: newPassword,
    };

    setUsers([...users, newUser]);
    setNewUsername("");
    setNewPassword("");
  };

  const handleEditUser = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        if (editUsername) user.username = editUsername;
        if (editPassword) user.password = editPassword;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditUsername("");
    setEditPassword("");
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <p>Welcome to the Admin Dashboard!</p>

      <div className="user-actions">
        <h2>Manage Users</h2>

        {/* Create User Section */}
        <div className="create-user">
          <h3>Create a New User</h3>
          <input
            type="text"
            placeholder="Enter username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleCreateUser}>Create User</button>
        </div>

        {/* User List */}
        <div className="user-list">
          <h3>Existing Users</h3>
          {users.length === 0 ? (
            <p>No users available.</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id} className="user-item">
                  <strong>{user.username}</strong>
                  <p>Password: {user.password}</p>

                  {/* Edit User */}
                  <div className="edit-user">
                    <input
                      type="text"
                      placeholder="Edit username"
                      value={editUsername}
                      onChange={(e) => setEditUsername(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Edit password"
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                    />
                    <button onClick={() => handleEditUser(user.id)}>
                      Save Changes
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;