import { PrismaClient } from "@prisma/client";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import axiosClient from "../../../../lib/axios";

interface DataType {
	key: React.Key;
	id: number;
	title: string;
	content: string;
	created_at: Date;
	updated_at: Date;
}

const columns: ColumnsType<DataType> = [
	{
		title: "id",
		width: 50,
		dataIndex: "id",
		key: "id",
		fixed: "left",
	},
	{
		title: "Title",
		width: 100,
		dataIndex: "title",
		key: "title",
		fixed: "left",
	},
	{
		title: "Content",
		dataIndex: "content",
		key: "content",
		width: 150,
	},
	{
		title: "Date Created",
		dataIndex: "created_at",
		key: "created_at",
		width: 80,
	},
	{
		title: "Date Updated",
		dataIndex: "updated_at",
		key: "updated_at",
		width: 80,
	},
	{
		title: "Action",
		key: "operation",
		fixed: "right",
		width: 100,
		render: () => <a>action</a>,
	},
];

// for (let i = 0; i <= 10; i++) {
// 	data.push({
// 		key: i,
// 		index: i,
// 		title: "title",
// 		content: "content",
// 		date_created: "new Date()",
// 		date_updated: "new Date()",
// 	});
// }
export default function BlogTable() {
	// const data: DataType[] = [];
	const [blogs, setBlogs] = useState([{}]);
	useEffect(() => {
		axiosClient
			.get("/queries/blogs")
			.then((response) => {
				let blogsArray = [];

				for (let i = 0; i <= response.data.length; i++) {
					if (typeof response.data[i] === "object") {
						blogsArray.push({
							key: response.data[i].title,
							...response.data[i],
						});
					}
					console.log(blogsArray);
				}
				setBlogs(blogsArray);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<Table
				columns={columns}
				expandable={{
					expandedRowRender: (record) => (
						<p style={{ margin: 0 }}>{record?.content}</p>
					),
					rowExpandable: (record) => record.title !== "Not Expandable",
				}}
				dataSource={blogs}
			/>
		</div>
	);
}
