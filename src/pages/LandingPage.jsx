import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listener for messages from the iframe
    const handleMessage = (event) => {
      // Ensure the message comes from a trusted origin (optional, but recommended)
      if (event.origin !== window.location.origin) return;

      const { action, route } = event.data;

      if (action === "navigate" && route) {
        navigate(route); // Navigate to the specified route
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  return (
    <div className="w-screen h-screen">
      <iframe
        src="/landing/index.html"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="KPKT Landing Page"
      />
    </div>
  );
};

export default LandingPage;
