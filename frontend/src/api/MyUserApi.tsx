import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

// TOKEN-BASED AUTH
// 1. User submits login form
// 2. Server creates a JWT(JSON Web Token) ; only interacting with server, not database
// 3. Browser puts JWT in local storage
// 4, Signed JWT header validated on future requests

// SESSION-BASED AUTH
// 1. User submits login form
// 2. Server stores a session in a database and response with the session Id
// 3. Browser puts session Id in cookies.
// 4. Browser sends cookies with future requests



export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,  // Signed JWT header validated on future requests.
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to create user: ${errorBody}`);
    }
  };


  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
