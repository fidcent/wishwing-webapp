
import { Bell, Wallet, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">W</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">WishWing</h1>
            <p className="text-sm opacity-90">Never miss a birthday</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/friends")}
          >
            <UserPlus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Wallet className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
