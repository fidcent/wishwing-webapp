
import { Calendar, Gift, Users, Coins, TrendingUp, Wallet, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const QuickStats = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl p-6 text-white mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-1 opacity-90">Your WishCoins</h2>
            <p className="text-4xl font-bold">2,500</p>
            <p className="text-sm opacity-75 mt-1">Available Balance</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Button 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 text-white border-0"
              onClick={() => navigate("/friends")}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add Friends
            </Button>
            <Button 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Top Up
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs opacity-80 mt-1">Upcoming</p>
          </div>
          
          <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Gift className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs opacity-80 mt-1">Wishes</p>
          </div>
          
          <div className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-bold">48</p>
            <p className="text-xs opacity-80 mt-1">Friends</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">+15%</p>
              <p className="text-sm text-gray-600 font-medium">This Month</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">8</p>
              <p className="text-sm text-gray-600 font-medium">Gifts Sent</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuickStats;
