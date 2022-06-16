import { Button, Form, FormInstance, Input, InputNumber } from "antd";
const layout = {
	labelCol: {
		span: 4,
	},
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
		<div className=" h-fit">
			<div>
				<h1 className="text-xl font-semibold">Blog</h1>
			</div>
			<Form
				{...layout}
				name="nest-messages"
				onFinish={onFinish}
				validateMessages={validateMessages}
			>
				<Form.Item name={["user", "name"]} label="Title" rules={formRule}>
					<Input />
				</Form.Item>
				<Form.Item
					name={["user", "introduction"]}
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
	);
};

export default App;
