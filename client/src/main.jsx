<<<<<<< HEAD
=======
import './tailwind.css';
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
<<<<<<< HEAD
=======
    
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
  </StrictMode>,
)
