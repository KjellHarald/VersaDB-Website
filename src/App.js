import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Header from './components/header.tsx';
import Root from './Root/index.tsx'

// Sites
import Status from './routes/Status/index.tsx';
import StatusAdmin from './routes/Status/admin.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/status/",
    element: <Status/>
  },
  {
    path: "/status/admin/",
    element: <StatusAdmin/>
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
