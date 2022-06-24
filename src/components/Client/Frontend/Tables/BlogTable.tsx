import { PrismaClient } from "@prisma/client";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import axiosClient from "../../../../lib/axios";

interface TableDataType {
	key: string;
	id: number;
	title: string;
	content: string;
	created_at: Date;
	updated_at: Date;
}

const columns: ColumnsType<TableDataType> = [
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

export default function BlogTable() {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		axiosClient
			.get("/queries/blogs")
			.then((response) => {
				setBlogs(
					response.data.map((blog: TableDataType) => {
						return { ...blog, key: blog.id };
					})
				);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div>
			<Table
				columns={columns}
				expandable={{
					expandedRowRender: (record: any) => (
						<p style={{ margin: 0 }}>{record?.content}</p>
					),
					rowExpandable: (record: any) => record?.title !== "Not Expandable",
				}}
				dataSource={blogs}
			/>
		</div>
	);
}
