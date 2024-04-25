import { useTheme, Typography, Box } from '@mui/material'

const Accountant = () => {
  const { palette } = useTheme()

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to Accounts
      </Typography>
    </Box>
  )
}

export default Accountant
