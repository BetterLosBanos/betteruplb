import { config } from '../lib/lguConfig';
import { NavigationItem } from '../types';
import serviceCategories from './service_categories.json';

interface Category {
  name: string;
  slug: string;
}

const serviceNav: NavigationItem = {
  label: 'Services',
  href: '/services',
  children: (serviceCategories.categories as Category[]).map(category => ({
    label: category.name,
    href: `/services?category=${category.slug}`,
  })),
};

const campusNav: NavigationItem = {
  label: 'Campus',
  href: '/government',
  children: [
    { label: 'University Officials', href: '/government/elected-officials' },
    { label: 'Offices & Units', href: '/government/departments' },
    { label: 'Campus Area Barangays', href: '/government/barangays' },
  ],
};

const statisticsNav: NavigationItem = {
  label: 'Campus Data',
  href: '/statistics',
  children: [
    { label: 'Demographics', href: '/statistics' },
    { label: 'Competitiveness', href: '/statistics/competitiveness' },
  ],
};

const transparencyNav: NavigationItem = {
  label: 'Transparency',
  href: '/transparency',
  children: [
    { label: 'Financial Reports', href: '/transparency/financial' },
    { label: 'Procurement', href: '/transparency/procurement' },
    { label: 'Infrastructure', href: '/transparency/infrastructure' },
  ],
};

export const mainNavigation: NavigationItem[] = [
  serviceNav,
  campusNav,
  ...(config.features.statistics ? [statisticsNav] : []),
  ...(config.features.transparency ? [transparencyNav] : []),
];

export const footerNavigation = {
  brand: {
    title: config.portal.name,
    description: `An open-source initiative making university services and campus information accessible for the ${config.lgu.name} community.`,
    cost: `Cost to the People of ${config.lgu.fullName} = ₱0`,
  },

  mainSections: [
    {
      title: 'University Services',
      links: [
        { label: 'All Services', href: '/services' },
        {
          label: 'Certificates & Records',
          href: '/services?category=certificates-vital-records',
        },
        {
          label: 'Health & Wellness',
          href: '/services?category=health-wellness',
        },
        {
          label: 'Education & Scholarship',
          href: '/services?category=education-scholarship',
        },
      ],
    },
    {
      title: 'Campus',
      links: [
        { label: 'University Officials', href: '/government/elected-officials' },
        { label: 'Offices & Units', href: '/government/departments' },
        { label: 'Campus Area Barangays', href: '/government/barangays' },
        ...(config.features.transparency
          ? [{ label: 'Transparency', href: '/transparency' }]
          : []),
      ],
    },
    {
      title: 'BetterGov Network',
      links: [
        {
          label: 'Transparency Portal',
          href: 'https://transparency.bettergov.ph',
          target: '_blank',
        },
        {
          label: 'Open Data Portal',
          href: 'https://data.bettergov.ph',
          target: '_blank',
        },
        {
          label: 'BetterLB',
          href: 'https://betterlb.org',
          target: '_blank',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'UPLB.edu.ph',
          href: config.lgu.officialWebsite,
          target: '_blank',
        },
        {
          label: 'uplb.tools',
          href: 'https://uplbtools.me',
          target: '_blank',
        },
        {
          label: 'Room TBA',
          href: 'https://room-tba.uplbtools.me',
          target: '_blank',
        },
        {
          label: 'Elbi GradeSim',
          href: 'https://gradesim.uplbtools.me',
          target: '_blank',
        },
        {
          label: 'Freedom of Information',
          href: 'https://www.foi.gov.ph',
          target: '_blank',
        },
        {
          label: `Province of ${config.lgu.province}`,
          href: config.lgu.provinceWebsite,
          target: '_blank',
        },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://facebook.com/betterlb.org',
      target: '_blank',
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/mHtThpN8bT',
      target: '_blank',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/BetterLosBanos/betteruplb',
      target: '_blank',
    },
  ],
};
