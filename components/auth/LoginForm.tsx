"use client";

import styles from "./AuthForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormDTO } from "@/api/dto/auth.dto";
import * as Api from "./../../api";
import { setCookie } from "nookies";
import Link from "next/link";
import { ISignUp } from "@/types/app.interface";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>();

  const onSubmit: SubmitHandler<ISignUp> = async (data: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(data);

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard";
    } catch (error) {
      alert("Ошибка");
    }
  };


  return (
    <div className={styles.auth}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div>
            <span className={styles.title}>Sign Up</span>

            <label className={styles.label}>
              <span className='text-lg'>Email</span>

              {errors?.email && (
                <div className='text-red'>{errors.email.message}</div>
              )}
            </label>

            <input
              {...register("email", {
                required: "Invalid email adress.",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter valid email",
                },
              })}
              type='email'
              className={styles.input}
            />

            <label className={styles.label}>
              <span className='text-lg'>Password</span>
              {errors?.password && (
                <div className='text-red'>{errors.password.message}</div>
              )}
            </label>

            <input
              {...register("password", {
                required: "Enter vaild password",
              })}
              type='password'
              className={styles.input}
            />
          </div>
          <div className={styles.footer}>
            <button className={styles.button}>Sign Up</button>
            <span>
              <Link href='/dashboard/register'>Create Account?</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
