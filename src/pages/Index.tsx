
import Header from "@/components/Header";
import QuickStats from "@/components/QuickStats";
import QuickActions from "@/components/QuickActions";
import UpcomingBirthdays from "@/components/UpcomingBirthdays";
import WishList from "@/components/WishList";
import RecentActivity from "@/components/RecentActivity";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      {/* Main Content */}
      <div className="space-y-6">
        <QuickStats />
        <QuickActions />
        <UpcomingBirthdays />
        <WishList />
        <RecentActivity />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
