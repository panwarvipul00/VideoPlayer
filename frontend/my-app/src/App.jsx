import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import StartSession from "./components/StartSession";
import VideoPlayer from "./components/VideoPlayer";
import { getSession } from "./api";

function StudentSession() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [valid, setValid] = React.useState(false);

  React.useEffect(() => {
    getSession(id).then((res) => {
      if (res?.unique_id) setValid(true);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading session...</p>;
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {valid ? <VideoPlayer /> : <p>❌ Session not found or expired.</p>}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartSession />} />
        <Route path="/session/:id" element={<StudentSession />} />
      </Routes>
    </BrowserRouter>
  );
}
