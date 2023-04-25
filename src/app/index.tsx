import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrateRoot } from 'react-dom/client'
import { App } from './containers/App'
import './assets/favicon.ico'

const container = document.getElementById('app')

const initialProps = window.__INITIAL_PROPS__


hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps}/>
  </BrowserRouter>
)
