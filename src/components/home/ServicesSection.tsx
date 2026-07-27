import { FC } from 'react';

import { Link } from 'react-router-dom';

import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

import serviceCategories from '../../data/service_categories.json';
import { Card, CardContent } from '../ui/Card';

interface Category {
  name: string;
  slug: string;
  description: string;
}

const ServicesSection: FC = () => {
  const { t } = useTranslation('common');

  const getIcon = (categoryName: string) => {
    const iconMap: { [key: string]: keyof typeof LucideIcons } = {
      'Certificates & Vital Records': 'ScrollText',
      'Business & Licensing': 'Store',
      'Taxation & Assessment': 'Landmark',
      'Infrastructure & Engineering': 'HardHat',
      'Social Services': 'HeartHandshake',
      'Health & Wellness': 'Stethoscope',
      'Agriculture & Livelihood': 'Sprout',
      'Environment & Waste': 'Leaf',
      'Education & Scholarship': 'GraduationCap',
      'Public Safety': 'ShieldCheck',
    };

    const iconName = iconMap[categoryName] || 'FileText';
    const Icon = LucideIcons[iconName] as React.ElementType;

    return Icon ? <Icon className='h-6 w-6' aria-hidden='true' /> : null;
  };

  const categories = serviceCategories.categories as Category[];
  const displayedCategories = categories.slice(0, 8);

  return (
    <section
      className='bg-kapwa-bg-surface py-12'
      aria-labelledby='university-services-heading'
    >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2
            id='university-services-heading'
            className='mb-4 text-2xl font-bold text-kapwa-text-strong md:text-3xl'
          >
            {t('services.governmentServices')}
          </h2>
          <p className='mx-auto max-w-2xl text-kapwa-text-support'>
            {t('services.description')}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {displayedCategories.map(category => (
            <Link
              key={category.slug}
              to={`/services?category=${category.slug}`}
              className='group h-full focus-visible:outline-none'
            >
              <Card
                hoverable
                className='border-kapwa-border-brand h-full border-t-4 transition-all hover:-translate-y-1'
              >
                <CardContent className='flex h-full flex-col p-6'>
                  <div className='mb-4 flex items-start justify-between'>
                    <div className='bg-kapwa-bg-brand-weak text-kapwa-text-brand group-hover:bg-kapwa-bg-brand-default rounded-lg p-3 transition-colors group-hover:text-kapwa-text-inverse'>
                      {getIcon(category.name)}
                    </div>
                  </div>

                  <h3 className='group-hover:text-kapwa-text-brand-bold mb-2 text-lg font-bold text-kapwa-text-strong'>
                    {category.name}
                  </h3>

                  <p className='mb-6 line-clamp-3 grow text-sm text-kapwa-text-support'>
                    {category.description}
                  </p>

                  <div className='text-kapwa-text-brand flex items-center text-sm font-medium group-hover:underline'>
                    View Services
                    <LucideIcons.ArrowRight
                      className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1'
                      aria-hidden='true'
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <Link
            to='/services?category=all'
            className='bg-kapwa-bg-brand-default hover:bg-kapwa-bg-brand-hover focus-visible:ring-kapwa-border-focus inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-kapwa-text-inverse shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            {t('services.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
