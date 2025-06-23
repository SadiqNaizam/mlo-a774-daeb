import React from 'react';
import FunnelStats from './FunnelStats';
import SourcesPieChart from './SourcesPieChart';

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <FunnelStats />
      <SourcesPieChart />
    </div>
  );
};

export default StatsCardGrid;
