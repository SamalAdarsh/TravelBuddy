
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleAuthKey } from './lib/constants.js';
import { ThemeProvider } from './components/ui/ThemeProvider';


createRoot(document.getElementById('root')).render(

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

  <GoogleOAuthProvider clientId={googleAuthKey}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</GoogleOAuthProvider>
</ThemeProvider>
)
