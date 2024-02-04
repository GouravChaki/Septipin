import { Login } from "../../Auth/AuthPages/Login";
import { Signup } from "../../Auth/AuthPages/Signup";
import { NavbarRouteLayout } from "../../Layouts/NavbarRouteLayout";
import { LandingPage } from "../../components/LandingPage";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Statistics } from "../../components/StatisticalTracker";
import Profile from "../../components/Profile/Profile";
import { AuthProvider } from "../../common/hooks/useAuth";
import Media from "../../components/MediaRecommendations/Media";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <NavbarRouteLayout>
            <LandingPage />
          </NavbarRouteLayout>
        ),
      },
      {
        path: "/media",
        element: (
          // <ProtectedRoute>
          //   <NavbarRouteLayout>
              <Media />
          //   </NavbarRouteLayout>
          // </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/statistics",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              <Statistics />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              <Profile />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routerConfig;
