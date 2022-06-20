import react from "react";
import Footer from "../../layouts/Screens/Footer";
import MainSection from "../../layouts/Screens/MainSection";
import Navigation from "../../layouts/Screens/Navigation";

export default function index() {
	return (
		<div>
			<Navigation />
			<MainSection />
			<Footer />
		</div>
	);
}
