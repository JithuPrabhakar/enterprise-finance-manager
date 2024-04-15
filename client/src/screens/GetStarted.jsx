import { Typography, useTheme } from '@mui/material'

const GetStarted = () => {
  const { palette } = useTheme()
  return (
    <>
      <Typography variant='h1' color={palette.grey[300]}>
        Get Started
      </Typography>
    </>
  )
}

export default GetStarted
