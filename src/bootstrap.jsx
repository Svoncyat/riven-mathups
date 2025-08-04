import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppLayout } from './AppLayout.jsx'
import './global.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

// PascalCase (Componentes)
// camelCase
// kebab-case
// snake_case
// SCREAMING_SNAKE_CASE
// Title Case
// Sentence case
// lowercase

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
)