import { Button, Divider, Form, FormProps, Input } from "antd";
import axiosClient from "../../../../lib/axios";
import BlogTable from "../Tables/BlogTable";

const layout: FormProps<any> = {
	labelCol: {
		span: 4,
	},
	labelAlign: "left",
	wrapperCol: {},
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
	const onFinish = async (values) => {
		// console.log(values);
		await axiosClient
			.post("/api/auth/adminAuth", values)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const formRule = [{ required: true }];
	return (
		<div className="space-y-5 ">
			<div className="p-6 rounded bg-gray-50 ">
				<div>
					<h1 className="text-xl font-semibold ">
						AGOI: <span className="text-teal-700">CReate Update Delete</span>
					</h1>
					<Divider />
				</div>
				<div className="max-w-3xl">
					<Form
						className="text-left"
						{...layout}
						name="nest-messages"
						onFinish={onFinish}
						validateMessages={validateMessages}
					>
						<Form.Item
							className="font-bold"
							name={["title"]}
							label="Title"
							rules={formRule}
						>
							<Input />
						</Form.Item>
						<Form.Item
							className="font-bold"
							name={["description"]}
							label="Description"
							rules={formRule}
						>
							<Input.TextArea />
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			<div className="p-6 my-5 rounded bg-gray-50">
				<BlogTable />
			</div>
		</div>
	);
};

export default App;
