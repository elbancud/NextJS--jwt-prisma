import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { useAppDispatch, useAppSelector } from "../lib/custom-hooks";
import { incremented, amountAdded } from "../lib/features/counter-slice";
const Home: NextPage = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dipatch = useAppDispatch();

	const handleIncrement = () => {
		dipatch(amountAdded(3));
	};
	return (
		<div className={styles.container}>
			{count}
			<button onClick={handleIncrement}></button>
		</div>
	);
};

export default Home;
