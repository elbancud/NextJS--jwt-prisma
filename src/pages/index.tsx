import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../lib/custom-hooks";
import { incremented, amountAdded } from "../lib/features/counter-slice";
import Link from "next/link";
import paths from "../lib/paths";

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
			{paths.map((path) => {
				return (
					<Link href={path.link} key={path.link} as={path.slug}>
						<a>{path.name}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default Home;
