
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to our custom HTML page on component mount
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading personal website...</h1>
        <p className="text-gray-600">Please wait while we redirect you to the portfolio.</p>
      </div>
    </div>
  );
};

export default Index;
