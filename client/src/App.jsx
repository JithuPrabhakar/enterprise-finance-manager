import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import Signup from './screens/SignUpScreen.jsx'
import Login from './screens/LoginSreen.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMemo } from 'react'
import { themeSettings } from './theme.js'
import { Navbar } from './components/Navbar.jsx'
import { Box } from '@mui/material'
import { Dashboard } from './screens/Dashboard/Dashboard.jsx'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width='100%' height='100%' p='1rem 2rem 4rem 2rem'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
