
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Heart } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-blue-600 flex items-center justify-center">
      <div className="text-center">
        {/* Creative WishWing Logo */}
        <div className="relative w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl border border-white/20">
          {/* Wing design with overlapping elements */}
          <div className="relative">
            {/* Left wing */}
            <div className="absolute -left-4 top-1 w-8 h-6 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full transform -rotate-12 opacity-80"></div>
            {/* Right wing */}
            <div className="absolute -right-4 top-1 w-8 h-6 bg-gradient-to-l from-blue-300 to-purple-300 rounded-full transform rotate-12 opacity-80"></div>
            {/* Center W with stars */}
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                W
              </span>
              {/* Floating stars around the W */}
              <Star className="absolute -top-2 -right-1 w-3 h-3 text-yellow-300 fill-yellow-300" />
              <Heart className="absolute -bottom-1 -left-1 w-2 h-2 text-pink-300 fill-pink-300" />
            </div>
          </div>
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
