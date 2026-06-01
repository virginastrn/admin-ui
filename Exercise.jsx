import React from "react"; 
import { postsData } from "./postsData"; 
import PostCard from "./PostCard"; 

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Soal 01: Menggunakan warna kustom [cite: 33] */}
      <h1 className="text-3xl font-bold text-center mb-10 text-special-red2">
        Post Cards
      </h1>
      
      {/* Soal 03: Container Grid sesuai gambar soal [cite: 74, 76] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {postsData.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;