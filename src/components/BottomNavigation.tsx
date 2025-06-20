
import { Home, Calendar, Gift, MessageSquare, User } from "lucide-react";
import { useState } from "react";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "gifts", icon: Gift, label: "Gifts" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "scale-110" : ""} transition-transform duration-200`} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
