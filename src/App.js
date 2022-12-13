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
import ManualRoot from './routes/Manual/index.tsx';

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
    element: <ManualRoot/>
  },
  {
    path: "/manual/create/",
    element: <div>Create Database User</div>
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
