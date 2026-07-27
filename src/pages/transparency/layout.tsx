import { Outlet, useLocation } from 'react-router-dom';

import { ModuleHeader, PageHero } from '@/components/layout/PageLayouts';
import SidebarLayout from '@/components/layout/SidebarLayout';

import TransparencySidebar from './components/TransparencySidebar';

export default function TransparencyLayout() {
  const location = useLocation();
  const isIndexPage = location.pathname === '/transparency';

  return (
    <SidebarLayout
      sidebar={<TransparencySidebar />}
      collapsible={true}
      defaultCollapsed={!isIndexPage}
      headerNode={
        isIndexPage ? (
          <PageHero
            title='Transparency Portal'
            description='Public procurement, infrastructure, and financial information related to UPLB.'
          />
        ) : (
          <ModuleHeader
            title='Transparency Portal'
            description='Track funds, infrastructure projects, and procurement records related to UPLB.'
          />
        )
      }
    >
      <Outlet />
    </SidebarLayout>
  );
}
