import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SocketInfoProvider } from './contexts/SocketInfoContext.tsx'
import { BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketInfoProvider>
        <App />
      </SocketInfoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
