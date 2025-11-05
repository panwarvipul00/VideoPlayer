import React from "react";

export default function VideoPlayer() {
  return (
    <div style={{ marginTop: "20px" }}>
      <video
        width="640"
        height="360"
        controls
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
