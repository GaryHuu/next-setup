'use client';

import { Locale } from '@/configs/i18n.config';
import useLocale from '../hooks/useLocale';
type Props = {
	lang: Locale;
};

function Test({ lang }: Props) {
	const lang1 = useLocale();

	return (
		<div>
			lang {lang} -- lang1 {lang1}
		</div>
	);
}

export default Test;
