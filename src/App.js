import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Header from './components/header.tsx';
import Root from './Root/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/status/",
    element: <div>Status</div>
  },
  {
    path: "/manual/",
    element: <div>User Manual</div>
  },
  {
    path: "/panel/",
    element: <div>Web Panel</div>
  }
]);

function App() {
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
