import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import axiosClient from "../../lib/axios";

interface IValues {
	username: string;
	password: string;
}
function login() {
	const onFinish = (values: IValues) => {
		axiosClient
			.post("/auth/adminAuth", values)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const onFinishFailed = (errorInfo: string) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="min-h-full p-5 flex items-center justify-center h-screen">
			<div className="w-full max-w-md">
				<div className="text-center">
					<h1 className="font-bold text-lg">Login, erp.</h1>
				</div>
				<Form
					name="basic"
					labelAlign="left"
					labelCol={{
						span: 5,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default login;
