import React from "react";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { user, register } = useAuth();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    try {
      await register({ username, password });
    } catch (error) {
      onError(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username"></input>
      </div>
      <div>
        <label htmlFor="password">用户名</label>
        <input type="password" id="password"></input>
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
