import { useTheme, Box, Grid, Link, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
  const { palette } = useTheme()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const student = {
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('firstName'),
    }

    const res = await register(student).unwrap()
    dispatch(setCredentials({ ...res }))
  }
  return (
    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: palette.primary.light,
                },
                '&.Mui-focused fieldset': {
                  borderColor: palette.primary.light,
                },
              },
            }}
            autoComplete='given-name'
            name='firstName'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: palette.primary.light,
                },
                '&.Mui-focused fieldset': {
                  borderColor: palette.primary.light,
                },
              },
            }}
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='family-name'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: palette.primary.light,
                },
                '&.Mui-focused fieldset': {
                  borderColor: palette.primary.light,
                },
              },
            }}
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: palette.primary.light,
                },
                '&.Mui-focused fieldset': {
                  borderColor: palette.primary.light,
                },
              },
            }}
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
          />
        </Grid>
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{
          background: palette.primary.light,
          '&:hover': { background: palette.primary[300] },
          mt: 3,
          mb: 2,
        }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default StudentForm
