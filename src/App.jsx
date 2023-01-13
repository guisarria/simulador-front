import React, { lazy, Suspense } from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import Progress from '@/components/Progress'
import MainAppBar from './components/MainAppBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ErrorPage = lazy(() => import('@/pages/Error'))

const App = () => {
  return (
    <BrowserRouter>
      <MainAppBar />
      <Sidebar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App