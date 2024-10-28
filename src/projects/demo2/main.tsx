import { createRoot } from 'react-dom/client'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


const root = document.getElementById('root') as HTMLElement
createRoot(root).render(<BrowserRouter ><App /></BrowserRouter>)