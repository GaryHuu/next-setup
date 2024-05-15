import Test from '@/app/components/Test';
import { Locale } from '@/configs/i18n.config';
import { getDictionary } from '@/lib/dictionary';

async function About({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<section className="py-24">
			<div className="container">
				<h1 className="text-3xl font-bold">{page.about.title}</h1>
				<p className="text-gray-500">{page.about.description}</p>
			</div>
			<div>
				<Test lang={lang} />
			</div>
		</section>
	);
}

export default About;
