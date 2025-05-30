import React from 'react';
import FunnelCountCard from './FunnelCountCard';
import SourcesCard from './SourcesCard';

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      <FunnelCountCard />
      <SourcesCard />
    </div>
  );
};

export default StatsCardGrid;
