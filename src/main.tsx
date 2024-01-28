import React from 'react'

import ReactDOM from 'react-dom/client'

import { Application } from './app/application'

const reactDOMRoot = ReactDOM.createRoot(document.getElementById('root')!)

reactDOMRoot.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)
