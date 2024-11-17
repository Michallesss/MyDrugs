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
import { loginSchema, loginType } from "@/schemas/auth.schemas";
// Actions
import { loginAction } from "@/actions/auth.actions";

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, {
    zodErrors: null,
    serverErrors: null,
    data: null,
  });
  const form = useForm<loginType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
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
    <Form title="Sign In" action={formAction} onSubmit={handleSubmit(() => formRef.current?.submit())}>
      <Field
        name="identifier"
        label="Email"
        type="email"
        placeHolder="name@company.com"
        error={errors.identifier}
        register={register("identifier")}
      />

      <Field
        name="password"
        label="Password"
        type="password"
        placeHolder="••••••••"
        error={errors.password}
        register={register("password")}
      />

      <SubmitButton loading={state.loading} text="Sign In" />
      <ServerErrors error={state.serverErrors} />
      {process.env.NODE_ENV === "development" && <DevTool control={control} />}
    </Form>
  );
}