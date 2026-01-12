import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/global.css'
import "./styles/usecases.css"
import "./styles/benefits.css"
import "./styles/blogs.css"
import "./styles/contact.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
