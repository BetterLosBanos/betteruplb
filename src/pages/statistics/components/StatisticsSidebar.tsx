import { Trophy, Users } from 'lucide-react';

import {
  SidebarContainer,
  SidebarItem,
} from '@/components/navigation/SidebarNavigation';

export default function StatisticsSidebar() {
  const sections = [
    {
      path: '/statistics',
      label: 'Demographics',
      icon: Users,
      description: 'Population growth',
    },
    {
      path: '/statistics/competitiveness',
      label: 'Competitiveness',
      icon: Trophy,
      description: 'CMCI Index & rankings',
    },
  ];

  return (
    <SidebarContainer title='Campus Data'>
      <ul className='space-y-1'>
        {sections.map(section => (
          <SidebarItem key={section.path} {...section} />
        ))}
      </ul>
    </SidebarContainer>
  );
}
