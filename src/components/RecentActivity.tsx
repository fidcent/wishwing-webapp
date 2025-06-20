
import { Card } from "@/components/ui/card";
import { Gift, MessageCircle, Calendar, Coins } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "gift",
      icon: Gift,
      title: "Gift sent to Sarah",
      description: "₦5,000 WishCoins for MacBook Pro",
      time: "2 hours ago",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      type: "message",
      icon: MessageCircle,
      title: "Birthday greeting sent",
      description: "Happy birthday message to Mike Chen",
      time: "1 day ago",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      type: "birthday",
      icon: Calendar,
      title: "Birthday added",
      description: "Emma Wilson's birthday on Dec 25",
      time: "2 days ago",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      type: "wallet",
      icon: Coins,
      title: "Wallet topped up",
      description: "Added ₦10,000 WishCoins",
      time: "3 days ago",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-3 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.bgColor} ${activity.color}`}>
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">{activity.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
