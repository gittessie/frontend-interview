import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";
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

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();
  const [updatedUser, setUpdatedUser] = React.useState({
    email: user.email,
    name: user.name
  });
  const [showSuccess, setShowSuccess] = React.useState(false);

  return (
    <div>
      <h1>Edit your profile</h1>
      {showSuccess && <p>Profile updated!</p>}
      <form
        onSubmit={e => {
          e.preventDefault();
          setUserContext({
            ...updatedUser
          });
          setShowSuccess(true);
        }}
      >
        <Input
          name="email"
          value={updatedUser.email}
          onChange={e => {
            setUpdatedUser({...updatedUser, email: e.target.value})
          }}
          type='email'
        />
        <Input
          name="name"
          value={updatedUser.name}
          onChange={e => {
            setUpdatedUser({...updatedUser, name: e.target.value})
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Profile;
