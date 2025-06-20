
import { ArrowLeft, Plus, Share2, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const CategoryWishList = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  // Mock data - in real app, this would fetch based on categoryId
  const categoryData = {
    year: "2025",
    isPublic: true,
  };

  const wishes = [
    {
      id: 1,
      title: "Apple MacBook Pro",
      cost: "₦1,200,000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=150&fit=crop",
      contributions: "₦450,000",
      progress: 37.5,
    },
    {
      id: 2,
      title: "iPhone 15 Pro Max",
      cost: "₦850,000",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=150&fit=crop",
      contributions: "₦200,000",
      progress: 23.5,
    },
    {
      id: 3,
      title: "Nike Air Jordan 1",
      cost: "₦85,000",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=150&fit=crop",
      contributions: "₦25,000",
      progress: 29.4,
    },
    {
      id: 4,
      title: "Weekend in Dubai",
      cost: "₦500,000",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&h=150&fit=crop",
      contributions: "₦120,000",
      progress: 24,
    },
  ];

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
              onClick={() => navigate("/wishlist-categories")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{categoryData.year} Wishes</h1>
              <p className="text-sm opacity-90">{wishes.length} items</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </header>

      {/* Category Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryData.isPublic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {categoryData.isPublic ? (
                <>
                  <Eye className="w-3 h-3 inline mr-1" />
                  Public
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 inline mr-1" />
                  Private
                </>
              )}
            </span>
          </div>
          <span className="text-sm text-gray-600">Total: ₦2,635,000</span>
        </div>
        
        {/* Wish Items */}
        <div className="space-y-4">
          {wishes.map((wish) => (
            <Card key={wish.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="flex">
                <img
                  src={wish.image}
                  alt={wish.title}
                  className="w-20 h-20 object-cover"
                />
                
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{wish.title}</h3>
                  <p className="text-lg font-bold text-green-600 mb-2">{wish.cost}</p>
                  
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600">Contributions</span>
                      <span className="text-xs font-medium">{wish.contributions}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-600 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${wish.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{wish.progress}% funded</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryWishList;
