import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../lib/custom-hooks";
import { incremented, amountAdded } from "../lib/features/counter-slice";
import Link from "next/link";
const Home: NextPage = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dipatch = useAppDispatch();

	const handleIncrement = () => {
		dipatch(amountAdded(3));
	};
	return (
		<div>
			<Link href="Client/Frontend/Core/Login">Admin</Link>
			<Link href="Client/Frontend/Core/Login">Admin</Link>
		</div>
	);
};

export default Home;
