import * as React from "react";
import { useSetUserContext } from "../contexts/user";
import styled from "styled-components";

const Input = styled.input`
  height: 2rem;
  width: 50%;
  min-width: 200px;
  border: 1px solid black;
  box-sixing: border-box;
  border-radius: 5px;
  margin: 5px auto;
`;
const Button = styled.button`
  height: 3rem;
  width: 50%;
  min-width: 200px;
  border: 1px solid black;
  box-sixing: border-box;
  border-radius: 5px;
  margin: 5px auto;
  padding: 10px;
  background-color: lightblue;
  color: black;
  font-size: 20px;

  &:hover{
    background-color: #367588;
    color: white;
  }
`;

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();
  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={(e) => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user,
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <Input
          name="email"
          value={user.email}
          onChange={(event) => {
            setUser({ ...user, email: event.target.value });
          }}
          type="email"
        />
        <Input
          name="password"
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
          type="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
