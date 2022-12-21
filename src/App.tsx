import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/header.tsx';
import Root from './Root/index.tsx'
import Panel from './routes/Panel/panel.tsx';
import Store from './routes/Store/index.tsx';

// Sites
import Status from './routes/Status/index.tsx';
import StatusAdmin from './routes/Status/admin.tsx';
import ManualRoot from './routes/Manual/index.tsx';
import DbWrite from './routes/Manual/db-write.tsx';
import DbSEarch from './routes/Manual/DbSearch.tsx';
import Frag from './routes/Manual/frag.tsx'
import FragInfo from './routes/Manual/fragInfo.tsx'
import Dbfrag from './routes/Manual/dbFrag.tsx';
import FragWrite from './routes/Manual/fragWrite.tsx';
import FragCreate from './routes/Manual/createFrag.tsx';
import FragDump from './routes/Manual/fragDump.tsx'
import XloadMem from './routes/Manual/xloadMem.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/store/",
    element: <Store/>
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
  {path:"/manual/db-write/", element: <DbWrite/>},
  {path:"/manual/db-search/", element: <DbSEarch/>},
  {path:"/manual/frag/", element: <Frag/>},
  {path:"/manual/frag-info/", element: <FragInfo/>},
  {path:"/manual/db-frag/", element: <Dbfrag/>},
  {path:"/manual/db-frag-write/", element: <FragWrite/>},
  {path:"/manual/create-frag/", element: <FragCreate/>},
  {path:"/manual/frag-dump/", element: <FragDump/>},
  {path:"/manual/load-xmem/",  element: <XloadMem/>},
  {
    path: "/panel/",
    element: <Panel/>
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
