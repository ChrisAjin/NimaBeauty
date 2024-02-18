import { CustomerReviews,Footer,Hero,Services,Subscribe } from "./sections";
import Nav from './components/Nav';
import BackgroundVideo from './components/BackgroundVideo'; // Assurez-vous que le chemin d'importation est correct

const App = () => (
	<main className="relative">
		<BackgroundVideo/>
		<Nav/>
		<section className="x1:padding-1 wide:padding-r padding-b">
			<Hero/>
		</section>
		<section className="padding-x py-10">
			<Services/>
		</section>
		<section className="padding-x py-10">
			<CustomerReviews/>
		</section>
		<section className="padding-x sm:py-32 py-16 w-full">
			<Subscribe/>
		</section>
	</main>
);

export default App;
