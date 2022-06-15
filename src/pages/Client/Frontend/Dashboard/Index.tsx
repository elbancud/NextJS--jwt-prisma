import "antd/dist/antd.css";
import {
	DatabaseOutlined,
	ShoppingCartOutlined,
	NotificationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import BlogResource from "../../../../components/Client/Frontend/Dashboard/BlogsResource";
import { AppProps } from "next/app";
const { Header, Content, Sider } = Layout;
// const topNavItems = ["1", "2", "3"].map((key) => ({
// 	key,
// 	label: `nav `,
// }));

const sideItems = [
	{
		icon: DatabaseOutlined,
		title: "Blogs",
		component: BlogResource,
	},
	{
		icon: UserOutlined,
		title: "Accounts",
		component: "AccountsController",
	},
];

const setComponent = (Component: string | (() => JSX.Element)) => {};

const sideNavItems = sideItems.map((item, index) => {
	const key = String(index + 1);
	return {
		key: `sub${key}`,
		icon: React.createElement(item.icon),
		label: item.title,
		onClick: () => setComponent(item.component),
		// children: new Array(4).fill(null).map((_, j) => {
		// 	const subKey = index * 4 + j + 1;
		// 	return {
		// 		key: subKey,
		// 		label: `option${subKey}`,
		// 	};
		// }),
	};
});

const Index = () => (
	<Layout>
		<Header className="header">
			<div className="logo" />
			{/* <Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["1"]}
				items={topNavItems}
			/> */}
		</Header>
		<Layout>
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					// defaultOpenKeys={["sub1"]}
					style={{
						height: "100%",
						borderRight: 0,
					}}
					items={sideNavItems}
				/>
			</Sider>
			<Layout
				style={{
					padding: "0 24px 24px",
				}}
			>
				<Breadcrumb
					style={{
						margin: "16px 0",
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: "100vh",
					}}
				></Content>
			</Layout>
		</Layout>
	</Layout>
);

export default Index;
