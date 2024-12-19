"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Loader from "./components/Loader";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"

      );

      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
   

    fetchUsers();
  }, []);

  const handleUserSelection = (userId) => {
    const user = users.find((x) => x.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full flex">
        {loading ? (
         
          <Loader/>
        ) : error ? (
          <p className="m-auto text-red-500">{error}</p>
        ) : (
          <>
            <UserList
              users={users}
              selectedUserId={selectedUser?.id}
              onSelectUser={handleUserSelection}
            />
            <UserDetails user={selectedUser} />
          </>
        )}
      </div>
    </div>
  );
}
