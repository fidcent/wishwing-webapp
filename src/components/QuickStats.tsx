
import { Calendar, Gift, Users, Coins, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickStats = () => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-green-400 to-blue-600 rounded-2xl p-6 text-white mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Your WishCoins</h2>
            <p className="text-3xl font-bold">2,500</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <Coins className="w-8 h-8" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm opacity-90">Upcoming</span>
            </div>
            <p className="text-xl font-bold">3</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Gift className="w-4 h-4 mr-1" />
              <span className="text-sm opacity-90">Wishes</span>
            </div>
            <p className="text-xl font-bold">12</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm opacity-90">Friends</span>
            </div>
            <p className="text-xl font-bold">48</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">+15%</p>
              <p className="text-xs text-gray-600">This Month</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-green-100">
              <Gift className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">8</p>
              <p className="text-xs text-gray-600">Gifts Sent</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuickStats;
