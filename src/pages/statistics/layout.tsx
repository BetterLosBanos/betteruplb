import { Outlet } from 'react-router-dom';

import { PageHero } from '@/components/layout/PageLayouts';
import SidebarLayout from '@/components/layout/SidebarLayout';

import StatisticsSidebar from './components/StatisticsSidebar';

export default function StatisticsLayout() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='container mx-auto px-4 py-8 md:py-12'>
        <PageHero
          title='Campus Data'
          description='Public demographic and performance data relevant to the UPLB community in Los Baños.'
        />

        <SidebarLayout sidebar={<StatisticsSidebar />} collapsible={true}>
          <Outlet />
        </SidebarLayout>
      </div>
    </div>
  );
}
