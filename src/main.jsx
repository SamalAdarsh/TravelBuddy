
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleAuthKey } from './lib/constants.js';


createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId={googleAuthKey}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</GoogleOAuthProvider>
)
