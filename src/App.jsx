import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Layout from "./pages/layout";

// src/App.jsx
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          path: "/home",
          Component: Home,
        },
        {
          path: "/projects",
          Component: Projects,
        },
        {
          path: "/articles",
          Component: Articles,
        },
        {
          path: "/contact",
          Component: Contact,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
