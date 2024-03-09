import { useState } from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import styled from '@emotion/styled'
import SavingsIcon from '@mui/icons-material/Savings'
import { Link } from 'react-router-dom'

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState('home')

  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0' color={palette.grey[300]}>
      <FlexBetween gap='0.75rem'>
        <SavingsIcon sx={{ fontSize: '1.5rem' }} />
        <Typography variant='h4' fontSize='1rem'>
          Budget Manager
        </Typography>
      </FlexBetween>
      <FlexBetween gap='2rem'>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to='/home'
            onClick={() => setSelected('home')}
            style={{
              color: selected === 'home' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            home
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
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
    </FlexBetween>
  )
}
