'use client';
// React
import { useFormState } from "react-dom";
import { useRef } from "react";
// Forms
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
// Components
import Form from "../_components/Form";
import Field from "../_components/Field";
import SubmitButton from "../_components/SubmitButton";
import ServerErrors from "../_components/ServerErrors";
// Schemas
import { registerSchema, registerType } from "@/schemas/auth.schemas";
// Actions
import { registerAction } from "@/actions/auth.actions";

export default function RegisterPage() {
  const [state, formAction] = useFormState(registerAction, {
    zodErrors: null,
    serverErrors: null,
    data: null,
  });
  const form = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      ...(state?.data ?? {})
    },
  });
  const {
    formState: { errors },
    handleSubmit,
    control,
    register,
  } = form;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form title="Register" action={formAction} onSubmit={handleSubmit(() => formRef.current?.submit())}>
      <Field
        name="username"
        label="Username"
        type="text"
        placeHolder="JohnDoe"
        error={errors.username}
        register={register("username")}
      />

      <Field
        name="email"
        label="Email"
        type="email"
        placeHolder="name@company.com"
        error={errors.email}
        register={register("email")}
      />

      <Field
        name="password"
        label="Password"
        type="password"
        placeHolder="••••••••"
        error={errors.password}
        register={register("password")}
      />

      <SubmitButton loading={state.loading} text="Register" />
      <ServerErrors error={state.serverErrors} />
      {process.env.NODE_ENV === "development" && <DevTool control={control} />}
    </Form>
  );
}