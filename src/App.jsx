import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Articles, Contact, Home, Layout, Projects } from "./pages";

// src/App.jsx
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
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
