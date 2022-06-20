import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import React from "react";

interface DataType {
	key: React.Key;
	index: number;
	title: string;
	description: string;
	date_created: string;
	date_updated: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: "Index",
		width: 50,
		dataIndex: "index",
		key: "index",
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
		title: "Description",
		dataIndex: "description",
		key: "description",
		width: 150,
	},
	{
		title: "Date Created",
		dataIndex: "date_created",
		key: "date_created",
		width: 80,
	},
	{
		title: "Date Updated",
		dataIndex: "date_updated",
		key: "date_updated",
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

const data: DataType[] = [];

for (let i = 0; i < 5; i++) {
	data.push({
		key: i,
		index: i,
		title: `Fake title ${i}`,
		description: `Fake description ${i}`,
		date_created: `Fake date created ${i}`,
		date_updated: `Fake date updated ${i}`,
	});
}

const BlogTable: React.FC = () => (
	<Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
);

export default BlogTable;
