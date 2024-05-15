import { Locale } from '@/configs/i18n.config';
import { getDictionary } from '@/lib/dictionary';

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const { page } = await getDictionary(lang);

	return (
		<section className="py-24">
			<div className="container">
				<h1 className="text-3xl font-bold">{page.home.title}</h1>
				<p className="text-gray-500">{page.home.description}</p>
			</div>
		</section>
	);
}

export default Home;
