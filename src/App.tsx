import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import './App.css';
import About from './pages/About';
import BuildWithUs from './pages/BuildWithUs';
import FusionX from './pages/FusionX';
import MoveAI from './pages/MoveAI';
import MoveAI2 from './pages/MoveAI2';
import MoveDesk from './pages/MoveDesk';
import MoveFlow from './pages/MoveFlow';
import PageNotFound from './pages/PageNotFound';
import ShieldCore from './pages/ShieldCore';
import { DialogProvider } from './providers/DialogProvider';
import { ToastProvider } from './providers/ToastProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {

  return (
    <DialogProvider>
      <ToastProvider>
        <GlobalStyle/>
        <Router basename="/">
          <Suspense>
            <Routes>
              <Route path="/" element={< MoveAI2/>}/>
              <Route path="/move-ai" element={< MoveAI/>}/>
              <Route path="/about" element={< About/>}/>
              <Route path="/move-desk" element={< MoveDesk/>}/>
              <Route path="/build-with-us" element={< BuildWithUs/>}/>
              <Route path="/fusionx" element={< FusionX/>}/>
              <Route path="/shield-core" element={< ShieldCore/>}/>
              <Route path="/move-flow" element={< MoveFlow/>}/>
              {/*<Route path="/" element={< Home/>}/>*/}
              {/*<Route path="/stake" element={< Stake/>}/>*/}
              {/*<Route path="/stake2" element={< Stake2/>}/>*/}
              {/*<Route path="/move-ai" element={< MoveAI/>}/>*/}
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </Suspense>
        </Router>
      </ToastProvider>
    </DialogProvider>
  )
}

export default App

