
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Gift, Calendar as CalendarIcon } from "lucide-react";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const birthdays = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: new Date(2024, 11, 25), // December 25, 2024
      category: "Family",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Mike Chen",
      date: new Date(2024, 11, 26), // December 26, 2024
      category: "Friends",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma Wilson",
      date: new Date(2024, 11, 28), // December 28, 2024
      category: "Work",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
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

  const getSelectedDateBirthdays = () => {
    if (!selectedDate) return [];
    return birthdays.filter(birthday => 
      birthday.date.toDateString() === selectedDate.toDateString()
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="p-4 space-y-6">
        {/* Add Birthday Button */}
        <Card className="p-4">
          <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Birthday
          </Button>
        </Card>

        {/* Calendar */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Birthday Calendar
          </h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </Card>

        {/* Selected Date Birthdays */}
        {selectedDate && (
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            
            {getSelectedDateBirthdays().length > 0 ? (
              <div className="space-y-3">
                {getSelectedDateBirthdays().map((birthday) => (
                  <div key={birthday.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={birthday.avatar}
                      alt={birthday.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-800">{birthday.name}</h4>
                        <Badge className={getCategoryColor(birthday.category)}>
                          {birthday.category}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                      <Gift className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No birthdays on this date</p>
            )}
          </Card>
        )}

        {/* All Upcoming Birthdays */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Upcoming Birthdays</h3>
          <div className="space-y-3">
            {birthdays.map((birthday) => (
              <div key={birthday.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src={birthday.avatar}
                  alt={birthday.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{birthday.name}</h4>
                    <Badge className={getCategoryColor(birthday.category)}>
                      {birthday.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {birthday.date.toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  <Gift className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default CalendarPage;
