import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import LeadsTracking from '@/components/Dashboard/LeadsTracking';
import LeadLossReasons from '@/components/Dashboard/LeadLossReasons';
import LeadSummaryStats from '@/components/Dashboard/LeadSummaryStats';

/**
 * LeadsDashboardPage represents the main Sales Leads dashboard.
 * It showcases an overview of metrics including StatsCardGrid, LeadsTracking,
 * LeadLossReasons, etc., all within the AdminLayout (MainAppLayout).
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PageHeader />
      {/* 
        The main content area below the PageHeader.
        Based on Layout Requirements (mainContent.container: "grid grid-cols-2 gap-6"),
        we establish a 2-column grid for dashboard widgets.
        The mt-6 provides spacing from the PageHeader.
      */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 
          StatsCardGrid is an organism that itself contains a 2-column grid 
          for FunnelCountCard and SourcesCard. To make StatsCardGrid appear as a 
          single block spanning the full width of this parent 2-column grid, 
          we wrap it in a div that spans 2 columns on medium screens and up.
        */}
        <div className="md:col-span-2">
          <StatsCardGrid />
        </div>

        {/* 
          LeadsTracking component's root Card element has `className="col-span-1 md:col-span-2"`.
          This means it's designed to span both columns of its parent grid (this current div)
          on medium screens and up, effectively taking the full width of this row.
        */}
        <LeadsTracking />

        {/* 
          LeadLossReasons and LeadSummaryStats will each occupy one column 
          in this 2-column grid on medium screens and up, appearing side-by-side.
          On smaller screens, they will stack vertically due to `grid-cols-1`.
        */}
        <LeadLossReasons />
        <LeadSummaryStats />
      </div>
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
