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
} from '@mui/material'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { palette } = useTheme()

  const { userInfo } = useSelector((state) => state.auth)

  const [login, { isLoading, error }] = useLoginMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [userInfo, navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }

    const { email, password } = user

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/home')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <Grid container component='main' height='100%'>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
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
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              size='small'
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' color={'textPrimary'}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2' color={'textPrimary'}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${finance})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  )
}
export default Login
