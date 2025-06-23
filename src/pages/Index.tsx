import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsAndOtherStats from '../components/Dashboard/ReasonsAndOtherStats';
import { ThemeProvider } from '../components/ThemeProvider';

/**
 * The main dashboard page component.
 * It orchestrates the layout and assembly of all major dashboard sections.
 */
const IndexPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainAppLayout>
        <div className="flex flex-col gap-6">
          <PageHeader />
          <StatsCardGrid />
          <LeadsTrackingChart />
          <ReasonsAndOtherStats />
        </div>
      </MainAppLayout>
    </ThemeProvider>
  );
};

export default IndexPage;