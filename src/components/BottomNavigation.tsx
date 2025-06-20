
import { Home, Calendar, Gift, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "calendar", icon: Calendar, label: "Calendar", path: "/calendar" },
    { id: "gifts", icon: Gift, label: "Gifts", path: "/wishlist-categories" },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },
  ];

  const handleTabClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  // Determine active tab based on current route
  const getCurrentTab = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname.includes("/wishlist") || location.pathname.includes("/category")) return "gifts";
    if (location.pathname === "/calendar") return "calendar";
    if (location.pathname === "/profile") return "profile";
    return activeTab;
  };

  const currentTab = getCurrentTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              currentTab === tab.id
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className={`w-5 h-5 ${currentTab === tab.id ? "scale-110" : ""} transition-transform duration-200`} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
