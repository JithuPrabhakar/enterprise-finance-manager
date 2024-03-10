import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import { setCredentials } from '../slices/authSlice'
import finance from '../assets/images/finance.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../slices/userApiSlice'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  useTheme,
  Container,
} from '@mui/material'

function Login() {
  const { palette } = useTheme()

  return (
    <Box
      height='100%'
      display={'flex'}
      alignItems={'center'}
      color={palette.grey[200]}
    >
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h2' fontWeight='600'>
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              color='success'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Login
