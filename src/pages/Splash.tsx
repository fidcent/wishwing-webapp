
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading and check auth status
    const timer = setTimeout(() => {
      // For MVP, we'll always redirect to login
      // In production, check if user is authenticated
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
          <span className="text-6xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            W
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">WishWing</h1>
        <p className="text-xl text-white/90 mb-8">Never miss a birthday</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
