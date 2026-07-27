import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { ArrowRight, Building2Icon, MapPinIcon, UsersIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

const GovernmentSection: FC = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const branches = [
    {
      id: 'officials',
      title: t('government.electedofficialsTitle'),
      description: t(
        'government.electedofficialsDescription',
        'Meet university leadership and campus officials.'
      ),
      icon: <UsersIcon className='text-kapwa-text-brand h-10 w-10' />,
      link: '/government/elected-officials',
    },
    {
      id: 'offices',
      title: t('government.departmentsTitle'),
      description: t(
        'government.departmentsDescription',
        'Administrative offices and units across campus.'
      ),
      icon: <Building2Icon className='text-kapwa-text-brand h-10 w-10' />,
      link: '/government/departments',
    },
    {
      id: 'area',
      title: t('government.barangaysTitle'),
      description: t(
        'government.barangaysDescription',
        'Barangays around the UPLB campus in Los Baños.'
      ),
      icon: <MapPinIcon className='text-kapwa-text-brand h-10 w-10' />,
      link: '/government/barangays',
    },
  ];

  return (
    <section
      className='bg-kapwa-bg-surface py-12'
      aria-labelledby='campus-directory-heading'
    >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2
            id='campus-directory-heading'
            className='mb-4 text-2xl font-bold text-kapwa-text-strong md:text-3xl'
          >
            {t('government.title')}
          </h2>
          <p className='mx-auto max-w-2xl text-kapwa-text-support'>
            {t('government.description')}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {branches.map(branch => (
            <Card key={branch.id} hoverable className='text-center'>
              <CardContent className='p-6'>
                <div className='mb-4 flex justify-center'>{branch.icon}</div>
                <h3 className='mb-2 text-xl font-semibold text-kapwa-text-strong'>
                  {branch.title}
                </h3>
                <p className='mb-4 text-kapwa-text-support'>
                  {branch.description}
                </p>
                <Button
                  onClick={() => navigate(branch.link)}
                  variant='link'
                  size='sm'
                  rightIcon={<ArrowRight className='h-4 w-4' aria-hidden='true' />}
                >
                  {t('government.learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 rounded-lg bg-kapwa-bg-surface-raised p-6'>
          <div className='items-center md:flex'>
            <div className='mb-6 md:mb-0 md:w-2/3 md:pr-8'>
              <h3 className='mb-2 text-xl font-semibold text-kapwa-text-strong'>
                {t('government.directoryTitle')}
              </h3>
              <p className='text-kapwa-text-support'>
                {t('government.directoryDescription')}
              </p>
            </div>
            <div className='flex justify-center md:w-1/3 md:justify-end'>
              <a
                href='/government/elected-officials'
                className='bg-kapwa-bg-brand-default hover:bg-kapwa-bg-brand-hover focus-visible:ring-kapwa-border-focus inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-kapwa-text-inverse shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                {t('government.viewDirectory')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
