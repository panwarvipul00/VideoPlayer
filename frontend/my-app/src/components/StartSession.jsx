import React, { useState } from "react";
import { createSession } from "../api";
import VideoPlayer from "./VideoPlayer";

export default function StartSession() {
  const [session, setSession] = useState(null);

  const handleStart = async () => {
    const data = await createSession();
   
    const correctUrl = `http://localhost:5173/session/${data.unique_id}`;
    setSession({...data, userurl: correctUrl});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {!session ? (
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all shadow-md"
        >
          Start Session
        </button>
      ) : (
        <div className="text-center bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            Session Started ✅
          </h3>
          <p className="text-gray-700 mb-2">Share this link with students:</p>
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <p className="text-sm text-blue-600 break-all">{session.userurl}</p>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(session.userurl)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all mb-3"
          >
            Copy Link
          </button>
          <div className="mt-6">
            <VideoPlayer />
          </div>
        </div>
      )}
    </div>
  );
}
