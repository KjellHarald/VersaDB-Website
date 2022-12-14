import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/header.tsx';
import Root from './Root/index.tsx'

// Sites
import Status from './routes/Status/index.tsx';
import StatusAdmin from './routes/Status/admin.tsx';
import ManualRoot from './routes/Manual/index.tsx';
import DbWrite from './routes/Manual/db-write.tsx';
import DbSEarch from './routes/Manual/DbSearch.tsx';

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
  {path:"/manual/create/", element: <ManualRoot/>},
  {path:"/manual/create-db-user/", element: <ManualRoot/>},
  {path:"/manual/db-write/", element: <DbWrite/>},
  {path:"/manual/db-write-enc/", element: <DbWrite/>},
  {path:"/manual/db-search/", element: <DbSEarch/>},
  {path:"/manual/db-search-enc/", element: <DbSEarch/>},
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
