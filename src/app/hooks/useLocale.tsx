'use client';

import { Locale, i18n } from '@/configs/i18n.config';
import { useParams } from 'next/navigation';

function useLocale(): Locale {
	return (useParams().lang as Locale) || i18n.defaultLocale;
}

export default useLocale;
