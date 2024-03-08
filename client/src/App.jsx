import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import Signup from './screens/SignUpScreen.jsx'
import Login from './screens/LoginSreen.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<HomeScreen />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
