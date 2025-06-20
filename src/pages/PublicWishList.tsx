
import { ArrowLeft, Heart, Share2, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const PublicWishList = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  // Mock data - in real app, this would fetch based on userId
  const userData = {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    birthday: "Today",
    category: "Family"
  };

  const wishes = [
    {
      id: 1,
      title: "Apple MacBook Pro",
      cost: "₦1,200,000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=150&fit=crop",
      contributions: "₦450,000",
      progress: 37.5,
      description: "For my design work and studies"
    },
    {
      id: 2,
      title: "Weekend Spa Retreat",
      cost: "₦150,000",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=150&fit=crop",
      contributions: "₦85,000",
      progress: 56.7,
      description: "Need some relaxation time"
    },
    {
      id: 3,
      title: "Photography Course",
      cost: "₦200,000",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=150&fit=crop",
      contributions: "₦50,000",
      progress: 25,
      description: "Always wanted to learn photography"
    },
  ];

  const handleContribute = (wishId: number) => {
    // In real app, this would open contribution modal
    console.log(`Contributing to wish ${wishId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 to-blue-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{userData.name}'s Wishes</h1>
              <p className="text-sm opacity-90">Birthday {userData.birthday}</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* User Info */}
      <div className="p-4">
        <Card className="p-4 mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">{userData.name}</h2>
              <p className="text-sm text-gray-600">Birthday {userData.birthday}</p>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mt-1">
                {userData.category}
              </span>
            </div>
            <div className="text-center">
              <p className="text-2xl">🎂</p>
              <p className="text-xs text-gray-600">Birthday</p>
            </div>
          </div>
        </Card>
        
        {/* Wish Items */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Wish List ({wishes.length} items)</h3>
          {wishes.map((wish) => (
            <Card key={wish.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={wish.image}
                  alt={wish.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{wish.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{wish.description}</p>
                <p className="text-lg font-bold text-green-600 mb-3">{wish.cost}</p>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Contributions</span>
                    <span className="text-sm font-medium">{wish.contributions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${wish.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{wish.progress}% funded</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Heart className="w-3 h-3 mr-1" />
                    Like
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                    onClick={() => handleContribute(wish.id)}
                  >
                    <Coins className="w-3 h-3 mr-1" />
                    Contribute
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicWishList;
