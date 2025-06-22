
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">W</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              WishWing
            </h1>
            <p className="text-sm text-gray-500 font-medium">Never miss a birthday</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full w-10 h-10 p-0"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
