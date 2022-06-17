import React, { useState } from "react";
import "antd/dist/antd.css";

import BlogResource from "../components/Client/Frontend/Dashboard/BlogsResource";
import AccountsResources from "../components/Client/Frontend/Dashboard/AccountsResource";
import { NextComponentType, NextPageContext } from "next";

import { UserOutlined, DatabaseOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const menuItemsArray = [
	{
		icon: DatabaseOutlined,
		title: "Articles",
		path: "/blogs-reources",
		component: BlogResource,
	},
	{
		icon: UserOutlined,
		title: "Accounts",
		path: "/accounts-reources",
		component: AccountsResources,
	},
];
const dashboardComponents = [
	{ path: "/blogs-resource", component: BlogResource },
	{ path: "/accounts-resource", component: BlogResource },
];

function DashboardContainer() {
	const [component, setComponent] = useState<NextComponentType | any>(
		BlogResource
	);

	const menuItems = menuItemsArray.map((menuItem, index) => {
		return {
			key: String(index + 1),
			label: menuItem.title,
			onClick: () => setComponent(menuItem.component),
		};
	});

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header
				style={{
					position: "fixed",
					zIndex: 1,
					width: "100%",
				}}
			>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["1"]}
					items={menuItems}
				/>
			</Header>
			<Content
				className="bg-slate-100"
				style={{
					padding: "20px",
					marginTop: 64,
				}}
			>
				{/* <Breadcrumb
					style={{
						margin: "16px 0",
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>DashboardContainer</Breadcrumb.Item>
				</Breadcrumb> */}

				{component}
			</Content>
			<Footer
				style={{
					textAlign: "center",
				}}
			>
				hehehe
			</Footer>
		</Layout>
	);
}

export default DashboardContainer;
