import { AuthProvider } from "./module/common/hooks/useAuth";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./module/Routes/RouteData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
      <div className="app-container">
        <ToastContainer />
        <RouterProvider
          router={routerConfig}
          // fallbackElement={}
        />
      </div>
  );
}

export default App;
