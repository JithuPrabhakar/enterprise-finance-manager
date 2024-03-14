import { useState } from 'react'
import { Box, useTheme, Typography, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import SavingsIcon from '@mui/icons-material/Savings'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <Box sx={{ '&:hover': { color: palette.primary.main } }}>
          <Link
            to='/dashboard'
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            dashboard
          </Link>
        </Box>
      </FlexBetween>
      <FlexBetween gap='1rem'>
        <Link to='/login'>
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
          sx={{
            background: palette.primary.light,
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
