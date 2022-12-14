import React from 'react';
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
  {path:"/manual/create/", element: <div></div>},
  {path:"/manual/create-db-user/", element: <div></div>},
  {path:"/manual/db-write/", element: <div></div>},
  {path:"/manual/db-write-enc/", element: <div></div>},
  {path:"/manual/db-search/", element: <div></div>},
  {path:"/manual/db-search-enc/", element: <div></div>},
  {path:"/manual/frag/", element: <div></div>},
  {path:"/manual/frag-info/", element: <div></div>},
  {path:"/manual/db-frag/", element: <div></div>},
  {path:"/manual/db-frag-write/", element: <div></div>},
  {path:"/manual/create-frag/", element: <div></div>},
  {path:"/manual/frag-dump/", element: <div></div>},
  {path:"/manual/load-xmem/",  element: <div></div>},
  {
    path: "/panel/",
    element: <div>Web Panel</div>
  }
]);

function App():JSX.Element {
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
