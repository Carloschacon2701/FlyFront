"use client";

import React from "react";
import { Modal } from "@/components/Modals/Modal";
import { Formik, Form } from "formik";
import { Input } from "@/components/Inputs/Input";

const Login = () => {
  return (
    <Modal>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-3 p-5 w-auto h-auto text-typo">
          <Input type="email" name="email" />
          <Input type="password" name="password" />

          <button type="submit" className="btn mt-1">
            Submit
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default Login;
