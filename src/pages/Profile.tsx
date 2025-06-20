
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Camera, Edit2, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+234 123 456 7890",
    birthday: "1990-01-15",
    location: "Lagos, Nigeria",
  });

  const handleSave = () => {
    setIsEditing(false);
    // In production, save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">JD</span>
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </Card>

        {/* Profile Information */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit2 className="w-4 h-4 mr-2" />
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthday">Birthday</Label>
              <Input
                id="birthday"
                type="date"
                value={profile.birthday}
                onChange={(e) => setProfile(prev => ({ ...prev, birthday: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profile.location}
                onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <Button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                Save Changes
              </Button>
            )}
          </div>
        </Card>

        {/* Settings */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">App Settings</span>
              </div>
            </button>
            
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg text-red-600">
              <div className="flex items-center">
                <LogOut className="w-5 h-5 mr-3" />
                <span>Sign Out</span>
              </div>
            </button>
          </div>
        </Card>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
