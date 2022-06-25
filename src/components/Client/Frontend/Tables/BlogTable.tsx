import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { AxiosRequestConfig } from "axios";
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
		responsive: ["md"],
	},
	{
		title: "Date Created",
		dataIndex: "created_at",
		key: "created_at",
		width: 80,
		responsive: ["md"],
	},
	{
		title: "Date Updated",
		dataIndex: "updated_at",
		key: "updated_at",
		width: 80,
		responsive: ["md"],
	},
	{
		title: "Action",
		key: "operation",
		fixed: "right",
		width: 100,
		responsive: ["md"],
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
	function deleteBlog(id: AxiosRequestConfig<any>, model: string) {
		const payload = {
			id,
			model,
		};
		axiosClient
			.delete("/queries/delete", payload)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	}
	return (
		<div>
			<Table
				columns={columns}
				expandable={{
					expandedRowRender: (record: any) => (
						<div className="flex justify-between">
							<div className="flex">
								<p className="mx-3">{record?.title}</p>
								<p className="mx-3">{record?.content}</p>
							</div>
							<div>
								<button className="mx-3">edit</button>
								<button
									onClick={() => {
										deleteBlog(record.id, "blog");
									}}
									className="mx-3"
								>
									remove
								</button>
							</div>
						</div>
					),
					rowExpandable: (record: any) => record?.title !== "Not Expandable",
				}}
				dataSource={blogs}
			/>
		</div>
	);
}
