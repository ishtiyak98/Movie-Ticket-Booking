import React from "react";
import { Form, Divider } from "antd";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../fetures/userAuth/userAuthApi";

function RegistrationForm() {
  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();
  const handleRegistration = (values) => {
    console.log(values);
    register(values);
  };

  return (
    <div className="p-5 lg:p-7 bg-white rounded space-y-4">
      <h2 className="text-primary text-center font-bold text-xl lg:text-2xl">
        Registration
      </h2>
      <Divider className="border border-gray-300" />
      <Form
        layout="vertical"
        initialValues={{
          remember: true,
          name: "",
          email: "",
          password: "",
        }}
        onFinish={handleRegistration}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="text" className="input-style" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="email" className="input-style" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="password" className="input-style" />
        </Form.Item>
        <button type="submit" className="submit-btn bg-primary">
          Register
        </button>
      </Form>
      <div>
        <h4 className="text-primary text-center">
          Already have an account?{" "}
          <span className="text-primary hover:text-secondary font-semibold">
            <Link to={"/"}>Login</Link>
          </span>
        </h4>
      </div>
    </div>
  );
}

export default RegistrationForm;
