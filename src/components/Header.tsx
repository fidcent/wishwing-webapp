
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white p-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-600 text-white">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-gray-500">Welcome</p>
            <h1 className="text-lg font-semibold text-gray-900">John</h1>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full w-10 h-10 p-0"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
