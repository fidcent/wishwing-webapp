
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Eye, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UpcomingBirthdays = () => {
  const navigate = useNavigate();

  const birthdays = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "Today",
      category: "Family",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      daysLeft: 0,
      userId: "sarah-123"
    },
    {
      id: 2,
      name: "Mike Chen",
      date: "Tomorrow",
      category: "Friends",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      daysLeft: 1,
      userId: "mike-456"
    },
    {
      id: 3,
      name: "Emma Wilson",
      date: "In 3 days",
      category: "Work",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      daysLeft: 3,
      userId: "emma-789"
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Family": return "bg-green-100 text-green-800";
      case "Friends": return "bg-blue-100 text-blue-800";
      case "Work": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewWishlist = (userId: string) => {
    navigate(`/public-wishlist/${userId}`);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Birthdays</h2>
        <Button variant="ghost" size="sm" className="text-blue-600">
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {birthdays.map((birthday) => (
          <Card key={birthday.id} className="p-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-3">
              <img
                src={birthday.avatar}
                alt={birthday.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-gray-800">{birthday.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(birthday.category)}`}>
                    {birthday.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {birthday.date}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => handleViewWishlist(birthday.userId)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  <Gift className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBirthdays;
