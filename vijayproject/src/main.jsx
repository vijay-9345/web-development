import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ArrayProvider } from './hooks/ArrayContext.jsx'
import { UserProvider } from './hooks/userContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ArrayProvider>
          <App />
        </ArrayProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)