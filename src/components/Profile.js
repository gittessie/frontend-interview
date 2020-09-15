import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

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
        <input
          name="email"
          value={updatedUser.email}
          onChange={e => {
            setUpdatedUser({...updatedUser, email: e.target.value})
          }}
          type='email'
        />
        <input
          name="name"
          value={updatedUser.name}
          onChange={e => {
            setUpdatedUser({...updatedUser, name: e.target.value})
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
