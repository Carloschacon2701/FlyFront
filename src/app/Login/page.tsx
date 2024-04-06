"use client";

import { Input } from "@/components/Inputs/Input";
import { Formik, Form, Field } from "formik";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2 p-10 w-full h-full">
          <Input type="email" name="email" />
          <Input type="password" name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
