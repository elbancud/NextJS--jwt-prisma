import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../lib/";
import { incremented, amountAdded } from "../lib/features/counter-slice";
import Link from "next/link";
import paths from "../lib/paths";
import Navigation from "../layouts/Screens/Navigation";
import MainSection from "../layouts/Screens/MainSection";
import Footer from "../layouts/Screens/Footer";

const Home: NextPage = () => {
	const router = useRouter();
	const handleRouterClick = () => {
		// router.push();
	};
	// const count = useAppSelector((state) => state.counter.value);
	// const dipatch = useAppDispatch();

	// const handleIncrement = () => {
	// 	dipatch(amountAdded(3));
	// };
	return (
		<div>
			<Navigation />
			<MainSection />
			<Footer />
		</div>
	);
};

export default Home;
