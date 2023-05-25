import BarChart from "@/components/admin/BarChart";
import RecentUpdate from "@/components/admin/RecentUpdate";
import TopCards from "@/components/admin/TopCards";
import React from "react";

function DashboardPage() {
  return (
    <div>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentUpdate />
      </div>
    </div>
  );
}

export default DashboardPage;
