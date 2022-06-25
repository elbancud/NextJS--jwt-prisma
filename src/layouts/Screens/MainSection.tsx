import react, { useEffect, useState } from "react";
import axiosClient from "../../lib/axios";

function MainSection({ blogs }) {
	return (
		<div>
			<ul>
				{
					blogs?.map(blog => {
						return (
							<li key={blog.id}>
								{blogs.title} {blogs.content}
							</li>	
						)
					})
				}
			</ul>
		</div>
	)

}
export async function getServerSideProps() {
	const res = await fetch('api/queries/blogs');
	const data = await res.json();
	return {
		props: {
			blogs: data
		}
	}
		// await axiosClient.get('/queries/blogs')
		// 	.then(response => {
		// 		return {
		// 			props: {
		// 				blogs: response.data
		// 			}
		// 		}
		// 	}).catch(() => {
				
		// 	})
		
}
export default MainSection;