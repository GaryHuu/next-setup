import { Locale, i18n } from '@/configs/i18n.config';
import React from 'react';
import Header from './components/header';

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	return (
		<>
			<Header lang={params.lang} />
			<main>{children}</main>
		</>
	);
}
