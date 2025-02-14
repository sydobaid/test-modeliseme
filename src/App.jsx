import "./App.css";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;
