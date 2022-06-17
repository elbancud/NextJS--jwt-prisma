import { Button, Divider, Form, FormProps, Input } from "antd";

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
	const onFinish = (values) => {
		console.log(values);
	};
	const formRule = [{ required: true }];
	return (
		<div className="bg-gray-50 p-6 rounded ">
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
						name={["article", "title"]}
						label="Title"
						rules={formRule}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="font-bold"
						name={["article", "description"]}
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
	);
};

export default App;
