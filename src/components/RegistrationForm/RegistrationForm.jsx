import { Form } from "antd";
import React from "react";
import { Divider } from "antd";
import "./RegistrationForm.css";

function RegistrationForm() {
  return (
    <div className="p-5 lg:p-7 bg-white rounded space-y-4">
      <h2 className="text-primary text-center font-bold text-xl lg:text-2xl">
        Registration
      </h2>
      <Divider className="border border-primary" />
      <Form layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="text" name="" id="" className="input-style" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="email" name="" id="" className="input-style" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="password" name="" id="" className="input-style" />
        </Form.Item>
        <button type="submit" className="submit-btn bg-primary">
          Register
        </button>
      </Form>
      <div>
        <h4 className="text-primary text-center">
          Already have an account? <span className="text-secondary">Login</span>
        </h4>
      </div>
    </div>
  );
}

export default RegistrationForm;
