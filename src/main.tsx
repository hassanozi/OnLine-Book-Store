import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './Context/AuthContext.tsx';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    
  </StrictMode>,
)
