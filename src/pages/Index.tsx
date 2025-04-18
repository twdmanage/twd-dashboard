
import WeeklyOverview from "./WeeklyOverview";
import KeyMetrics from "./KeyMetrics";
import WeeklyPlanning from "./WeeklyPlanning";
import { Card } from "@/components/ui/card";
import { Calendar, CheckSquare, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-wood-700">Thys Wood Design Dashboard</h1>
        <p className="text-sage-600">Balancing Business & Life</p>
      </header>

      <WeeklyOverview />
      
      <KeyMetrics />
      
      <WeeklyPlanning />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="h-5 w-5 text-wood-500" />
            <h3 className="text-lg font-medium text-wood-700">Google Calendar</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Color-coded calendar integration for business and family time management
          </p>
          <button className="mt-4 px-4 py-2 bg-wood-500 text-white rounded-md hover:bg-wood-600 transition-colors">
            Open Calendar
          </button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckSquare className="h-5 w-5 text-sage-500" />
            <h3 className="text-lg font-medium text-wood-700">Task Manager</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Organize and track daily tasks for both business and personal life
          </p>
          <button className="mt-4 px-4 py-2 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors">
            View Tasks
          </button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-wood-500" />
            <h3 className="text-lg font-medium text-wood-700">Quick Links</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📊 Business Analytics</li>
            <li>📷 Social Media Manager</li>
            <li>📅 Workshop Schedule</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Index;
