
import { ArrowLeft, Plus, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WishListCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      year: "2025",
      itemCount: 8,
      totalValue: "₦2,450,000",
      isPublic: true,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      year: "2024",
      itemCount: 12,
      totalValue: "₦1,800,000",
      isPublic: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      year: "Future Goals",
      itemCount: 5,
      totalValue: "₦5,200,000",
      isPublic: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    }
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
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">My Wish Lists</h1>
              <p className="text-sm opacity-90">Organize your dreams</p>
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            onClick={() => navigate("/add-category")}
          >
            <Plus className="w-4 h-4 mr-1" />
            New
          </Button>
        </div>
      </header>

      {/* Categories */}
      <div className="p-4 space-y-4">
        {categories.map((category) => (
          <Card 
            key={category.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/category-wishlist/${category.id}`)}
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.year}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 right-2">
                {category.isPublic ? (
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.year}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">{category.itemCount} items</span>
                <span className="text-lg font-bold text-green-600">{category.totalValue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  category.isPublic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {category.isPublic ? 'Public' : 'Private'}
                </span>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  View Items →
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WishListCategories;
