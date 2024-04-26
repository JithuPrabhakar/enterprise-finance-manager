import { useSelector, useDispatch } from 'react-redux'
import { Box, useTheme, Typography, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import SavingsIcon from '@mui/icons-material/Savings'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { useState } from 'react'
import { logout } from '../slices/authSlice'

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState('home')
  const isLoggedIn = useSelector((state) => state.auth.userInfo !== null)
  const userInfo = useSelector((state) => state.auth.userInfo)
  console.log(userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    dispatch(logout())

    // Navigate to login page
    navigate('/')
  }

  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0' color={palette.grey[300]}>
      <FlexBetween gap='0.75rem'>
        <SavingsIcon
          sx={{ fontSize: '1.8rem', color: palette.primary.light }}
        />
        <Typography variant='h4' fontSize='1.2rem'>
          Edu-Fin
        </Typography>
      </FlexBetween>
      <FlexBetween gap='1rem'>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to='/'
            onClick={() => setSelected('home')}
            style={{
              color: selected === 'home' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            home
          </Link>
        </Box>
        {isLoggedIn && (
          <>
            <Box sx={{ '&:hover': { color: palette.primary.main } }}>
              <Link
                to='/dashboard'
                onClick={() => setSelected('dashboard')}
                style={{
                  color:
                    selected === 'dashboard' ? 'inherit' : palette.grey[700],
                  textDecoration: 'inherit',
                }}
              >
                dashboard
              </Link>
            </Box>
            <Box sx={{ '&:hover': { color: palette.primary.main } }}>
              <Link
                to='/department'
                onClick={() => setSelected('department')}
                style={{
                  color:
                    selected === 'department' ? 'inherit' : palette.grey[700],
                  textDecoration: 'inherit',
                }}
              >
                department
              </Link>
            </Box>
            <Box sx={{ '&:hover': { color: palette.primary.main } }}>
              <Link
                to='/accountant'
                onClick={() => setSelected('accountant')}
                style={{
                  color:
                    selected === 'accountant' ? 'inherit' : palette.grey[700],
                  textDecoration: 'inherit',
                }}
              >
                accountant
              </Link>
            </Box>
          </>
        )}
      </FlexBetween>
      <FlexBetween gap='1rem'>
        <Link
          to={isLoggedIn ? '#' : '/login'}
          onClick={isLoggedIn ? handleLogout : null}
        >
          {isLoggedIn ? (
            <>
              Log Out
              <LogoutIcon style={{ marginLeft: '5px' }} />
            </>
          ) : (
            <>
              Log In
              <LoginIcon style={{ marginLeft: '5px' }} />
            </>
          )}
        </Link>
        <Button
          variant='contained'
          disabled={isLoggedIn}
          sx={{
            background: palette.primary.light,
            borderColor: palette.primary.light,
            '&.MuiButton-contained': {
              color: isLoggedIn ? 'white' : 'black',
            },
            '&:hover': { background: palette.primary[300] },
          }}
          component={Link}
          to='/signup'
        >
          Sign Up
        </Button>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
