import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import { HomePage } from "./pages/HomePage";

// specifies group of routes. It makes main.tsx code cleaner to have a separate file that has routes. You just need to add more routes here if needed.
export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} /> /** If undefined path
      calls occured, navigate to home page */
    </Routes>
  );
};
