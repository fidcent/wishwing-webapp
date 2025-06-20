
import { Card } from "@/components/ui/card";
import { MessageCircle, Gift, Calendar, Wallet } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: MessageCircle,
      label: "Send Greeting",
      description: "Quick birthday message",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Gift,
      label: "Send Gift",
      description: "WishCoins or contribution",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Calendar,
      label: "Add Birthday",
      description: "Never forget again",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Wallet,
      label: "Top Up Wallet",
      description: "Add more WishCoins",
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{action.label}</h3>
              <p className="text-xs text-gray-600">{action.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
