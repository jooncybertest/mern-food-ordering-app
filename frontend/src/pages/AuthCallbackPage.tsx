import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false); // useRef prevents rendering(this is only diff btw useState and useRef)
                                        // useRef has object name 'current'
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <>Loading...</>;
}

// Diff btw useState and useRef

// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" does not cause re-renders when its value changes.
//             when you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements.
//            2. Handling focus, animations, and transitions.
//            3. Managing timers and intervals.

