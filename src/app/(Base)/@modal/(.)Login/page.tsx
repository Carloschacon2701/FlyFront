"use client";

import { Input } from "@/components/Inputs/Input";
import { Modal } from "@/components/Modals/Modal";
import { Field, Form, Formik } from "formik";
import React from "react";

const Login = () => {
  return (
    <Modal link="/">
      <h1 className="text-center text-darkBlue text-lg font-semibold">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2 p-10 w-auto h-auto">
          <Input type="email" name="email" />
          <Input type="password" name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default Login;
