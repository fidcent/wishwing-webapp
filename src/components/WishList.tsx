
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Share2, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();

  const wishes = [
    {
      id: 1,
      title: "Apple MacBook Pro",
      cost: "₦1,200,000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=150&fit=crop",
      isPublic: true,
      contributions: "₦450,000",
      progress: 37.5,
    },
    {
      id: 2,
      title: "Nike Air Jordan 1",
      cost: "₦85,000",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=150&fit=crop",
      isPublic: false,
      contributions: "₦25,000",
      progress: 29.4,
    },
    {
      id: 3,
      title: "Weekend in Dubai",
      cost: "₦500,000",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&h=150&fit=crop",
      isPublic: true,
      contributions: "₦120,000",
      progress: 24,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">My Wish List</h2>
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
          onClick={() => navigate("/wishlist-categories")}
        >
          <Plus className="w-4 h-4 mr-1" />
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {wishes.slice(0, 2).map((wish) => (
          <Card key={wish.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <img
                src={wish.image}
                alt={wish.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2">
                {wish.isPublic ? (
                  <div className="bg-green-500 text-white p-1 rounded-full">
                    <Eye className="w-3 h-3" />
                  </div>
                ) : (
                  <div className="bg-gray-500 text-white p-1 rounded-full">
                    <Lock className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{wish.title}</h3>
              <p className="text-lg font-bold text-green-600 mb-2">{wish.cost}</p>
              
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
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-3 h-3 mr-1" />
                  Share
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate("/wishlist-categories")}
        >
          View All Categories
        </Button>
      </div>
    </div>
  );
};

export default WishList;
