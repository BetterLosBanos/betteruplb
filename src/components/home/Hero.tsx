import { FC, useId, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import Fuse from 'fuse.js';
import {
  BookOpenIcon,
  BriefcaseIcon,
  FileTextIcon,
  HeartIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import SearchInput from '@/components/ui/SearchInput';

import servicesData from '@/data/services/services.json';

interface Service {
  slug: string;
  service?: string;
  office_name?: string;
  office?: string;
  description?: string;
  category?: { name: string; slug: string };
  subcategory?: { name: string; slug: string };
}

const Hero: FC = () => {
  const { t } = useTranslation('common');
  const [query, setQuery] = useState('');
  const listboxId = useId();

  const fuse = useMemo(() => {
    return new Fuse(servicesData as Service[], {
      keys: [
        'service',
        'office_name',
        'office',
        'description',
        'category.name',
        'subcategory.name',
      ],
      threshold: 0.3,
    });
  }, []);

  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map(r => r.item);
  }, [query, fuse]);

  const popularServices = useMemo(() => {
    if (!servicesData || servicesData.length === 0) return [];
    return (servicesData as Service[]).slice(0, 3).map(service => ({
      label: service.service || 'Service',
      href: `/services?category=${encodeURIComponent(service.category?.slug || '')}`,
    }));
  }, []);

  interface QuickCategory {
    name: string;
    slug: string;
    label: string;
    icon: JSX.Element;
  }

  const quickCategories: QuickCategory[] = [
    {
      name: 'Certificates & Civil Registry',
      slug: 'certificates-vital-records',
      label: 'Records',
      icon: <FileTextIcon className='h-6 w-6 text-kapwa-text-inverse' />,
    },
    {
      name: 'Business & Licensing',
      slug: 'business-trade-investment',
      label: 'Business',
      icon: <BriefcaseIcon className='h-6 w-6 text-kapwa-text-inverse' />,
    },
    {
      name: 'Education & Learning',
      slug: 'education-scholarship',
      label: 'Education',
      icon: <BookOpenIcon className='h-6 w-6 text-kapwa-text-inverse' />,
    },
    {
      name: 'Health & Nutrition',
      slug: 'health-wellness',
      label: 'Health',
      icon: <HeartIcon className='h-6 w-6 text-kapwa-text-inverse' />,
    },
  ];

  const showResults = query.length > 0;

  return (
    <div className='from-kapwa-brand-600 to-kapwa-brand-700 bg-linear-to-r py-12 text-kapwa-text-inverse md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
          <div className='animate-fade-in'>
            <h1 className='mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
              {t('hero.title')}
            </h1>
            <p className='mb-8 max-w-lg text-lg text-kapwa-text-inverse/80'>
              {t('hero.subtitle')}
            </p>

            <div className='mb-4'>
              <label htmlFor='hero-service-search' className='sr-only'>
                Search university services
              </label>
              <SearchInput
                id='hero-service-search'
                role='combobox'
                aria-expanded={showResults}
                aria-controls={listboxId}
                aria-autocomplete='list'
                aria-label='Search university services'
                value={query}
                onChangeValue={setQuery}
                placeholder='Search services...'
                className='bg-kapwa-bg-surface/80'
              />
            </div>

            <div
              id={listboxId}
              role='listbox'
              aria-label='Service search results'
              className='sr-only'
              aria-live='polite'
            >
              {showResults
                ? `${results.length} result${results.length === 1 ? '' : 's'}`
                : ''}
            </div>

            {showResults && results.length > 0 && (
              <ul
                role='listbox'
                aria-label='Matching services'
                className='max-h-80 overflow-y-auto rounded-lg bg-kapwa-bg-surface text-kapwa-text-strong shadow-md'
              >
                {results.slice(0, 5).map(hit => (
                  <li key={hit.slug} role='option'>
                    <Link
                      to={`/services/${hit.slug}`}
                      className='block border-b border-kapwa-border-weak p-3 last:border-none hover:bg-kapwa-bg-hover focus-visible:bg-kapwa-bg-hover focus-visible:outline-none'
                    >
                      <strong>
                        {hit.service || hit.office_name || hit.office}
                      </strong>
                      {hit.description && (
                        <p className='text-sm text-kapwa-text-support'>
                          {hit.description}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {showResults && results.length === 0 && (
              <p
                role='status'
                className='rounded-lg bg-kapwa-bg-surface/90 px-4 py-3 text-sm text-kapwa-text-strong'
              >
                No matching services.
              </p>
            )}

            <div className='mt-4 flex flex-wrap gap-2'>
              {popularServices.map(service => (
                <Link
                  key={service.label}
                  className='rounded-xl border border-kapwa-text-inverse/20 bg-kapwa-bg-surface/10 px-4 py-2 text-sm text-kapwa-text-inverse hover:bg-kapwa-bg-surface/20 focus-visible:ring-2 focus-visible:ring-kapwa-text-inverse focus-visible:outline-none'
                  to={service.href}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className='animate-slide-in rounded-xl bg-kapwa-bg-surface/10 p-6 shadow-lg backdrop-blur-sm'>
            <h2 className='mb-4 text-2xl font-semibold'>
              {t('services.title')}
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              {quickCategories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/services?category=${encodeURIComponent(cat.slug)}`}
                  className='flex flex-col items-center rounded-lg bg-kapwa-bg-surface/10 p-4 text-center transition-all duration-200 hover:bg-kapwa-bg-surface/20 focus-visible:ring-2 focus-visible:ring-kapwa-text-inverse focus-visible:outline-none'
                >
                  <div className='mb-3 rounded-full bg-kapwa-brand-500 p-3'>
                    {cat.icon}
                  </div>
                  <span className='font-medium'>{cat.label}</span>
                </Link>
              ))}
            </div>
            <div className='mt-4 flex'>
              <Link
                className='w-full rounded-lg bg-kapwa-bg-surface/10 p-4 text-center text-kapwa-text-inverse transition-all duration-500 hover:bg-kapwa-bg-surface/20 focus-visible:ring-2 focus-visible:ring-kapwa-text-inverse focus-visible:outline-none'
                to='/services'
              >
                {t('services.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
