
import { Calendar, Gift, Users, Coins } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickStats = () => {
  const stats = [
    { icon: Calendar, label: "Upcoming", value: "3", color: "text-blue-600" },
    { icon: Gift, label: "Wishes", value: "12", color: "text-green-600" },
    { icon: Users, label: "Friends", value: "48", color: "text-purple-600" },
    { icon: Coins, label: "WishCoins", value: "₦2,500", color: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
