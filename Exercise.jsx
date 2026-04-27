import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services";

function Exercise() {
  // 1. Inisialisasi state untuk menampung data user
  const [users, setUsers] = useState([]);

  // 2. Gunakan useEffect untuk mengambil data saat halaman pertama kali dibuka
  useEffect(() => {
    getUsers()
      .then((data) => {
        // 3. Simpan data hasil fetch ke dalam state
        setUsers(data);
      })
      .catch((error) => {
        console.log("[Component] Gagal menampilkan data", error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {users.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;