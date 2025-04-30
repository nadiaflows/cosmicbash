"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const goatImages = [
  {
    src: "https://cdn.printerval.com/unsafe/960x960/asset/111049560a1d1c1a0d1a1a141d56161d0c571115191f1d564c404e4041404040404e564e4b4049571e14190c544f4d480054484f4d541e5508191c544f4d480049484848541e401e401e40560d495612081f",
    alt: "Cute baby goat with brown fur",
    photographer: "📸 Captured by Whisker Whisperer"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTeGj8KnkAyXJ5Sdz4hBhVZ3s8KjwFxHAAQ&s",
    alt: "Baby hedgehog",
    photographer: "🎥 Lens of the Hedgehog Hero"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4NuYAUjufA1gOxRhOD_UBRGvcyhYQCULKhT07spbje2YoP0azspJHBtODIHU1VRglX4&usqp=CAU",
    alt: "Baby bunny",
    photographer: "📷 Snapped by Bunny Buddy"
  },
  {
    src: "https://images.stockcake.com/public/8/6/a/86a204c8-fcb4-4547-9c3c-026fe65599d0/adorable-quail-character-stockcake.jpg",
    alt: "Baby bunny with white fur",
    photographer: "🎬 Frame by Fluffy Focus"
  },
  {
    src: "https://images.stockcake.com/public/e/f/4/ef45a11f-9c48-4c03-9f3c-32b2625c369e_medium/piggy-barn-party-stockcake.jpg",
    alt: "Two baby bunnies playing together",
    photographer: "📸 Clicked by Cuddle Capturer"
  },
  {
    src: "https://cdn.vectorstock.com/i/500p/38/23/cute-baby-sheep-cartoon-sitting-vector-38643823.jpg",
    alt: "Baby bunny eating grass",
    photographer: "🎥 Shot by Snuggle Specialist"
  }
];

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setGreeting(`Welcome, ${userName}! Enjoy these cute animals!`);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-8">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full border-2 border-pink-100">
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-4 rounded-xl mb-6">
              <h2 className="text-3xl font-bold text-center text-white">Animal Farm Album</h2>
            </div>
            <p className="text-gray-700 font-medium mb-4 text-center">What's your name, friend?</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-gradient-to-r from-pink-200/30 to-purple-200/30 p-2 rounded-xl">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-500 bg-white/80 text-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-colors shadow-md hover:shadow-lg"
              >
                Let's Explore! 🐾
              </button>
            </form>
          </div>
        </div>
      )}
      
      <div className={`max-w-7xl mx-auto ${showModal ? 'blur-sm' : ''}`}>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Cute Animal Farm Album</h1>
        {greeting && (
          <p className="text-xl text-center mb-8 text-gray-600">{greeting}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goatImages.map((image, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-pink-100">
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50">
                <p className="text-gray-600 text-sm">{image.photographer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
