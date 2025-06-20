
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, UserCheck, Search, Users } from "lucide-react";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const [searchQuery, setSearchQuery] = useState("");

  const friends = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 12,
      status: "connected"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 8,
      status: "connected"
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 15,
      status: "connected"
    }
  ];

  const friendRequests = [
    {
      id: 4,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 5,
      status: "pending"
    },
    {
      id: 5,
      name: "Lisa Smith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 3,
      status: "pending"
    }
  ];

  const suggestions = [
    {
      id: 6,
      name: "Alex Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 7,
      status: "suggested"
    },
    {
      id: 7,
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 4,
      status: "suggested"
    }
  ];

  const tabs = [
    { id: "friends", label: "Friends", count: friends.length },
    { id: "requests", label: "Requests", count: friendRequests.length },
    { id: "suggestions", label: "Suggestions", count: suggestions.length }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "friends": return friends;
      case "requests": return friendRequests;
      case "suggestions": return suggestions;
      default: return friends;
    }
  };

  const getActionButton = (person: any) => {
    switch (person.status) {
      case "connected":
        return (
          <Button size="sm" variant="outline" className="border-green-200 text-green-600">
            <UserCheck className="w-4 h-4 mr-1" />
            Friends
          </Button>
        );
      case "pending":
        return (
          <div className="flex space-x-2">
            <Button size="sm" className="bg-green-500 hover:bg-green-600">
              Accept
            </Button>
            <Button size="sm" variant="outline">
              Decline
            </Button>
          </div>
        );
      case "suggested":
        return (
          <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-600">
            <UserPlus className="w-4 h-4 mr-1" />
            Add
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Friends List */}
        <div className="space-y-3">
          {getCurrentData().map((person) => (
            <Card key={person.id} className="p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {person.mutualFriends} mutual friends
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getActionButton(person)}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {getCurrentData().length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No {activeTab} found</p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Friends;
