import { DashboardCard } from "@/components/dashboard/dashboard-card";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Users"
          description="Number of registered users"
          content="10,000"
        />
        <DashboardCard
          title="Revenue"
          description="Total revenue this month"
          content="$50,000"
        />
        <DashboardCard
          title="Active Projects"
          description="Number of ongoing projects"
          content="25"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="bg-accent text-accent-foreground p-3 rounded-md">
            New user registered: John Doe
          </li>
          <li className="bg-accent text-accent-foreground p-3 rounded-md">
            Project "Website Redesign" completed
          </li>
          <li className="bg-accent text-accent-foreground p-3 rounded-md">
            Revenue milestone reached: $100,000
          </li>
        </ul>
      </div>
    </div>
  );
}
