export interface ISignUp {
  email: string;
  password: string;
}

export type ISignIn = ISignUp & { fullname: string };
