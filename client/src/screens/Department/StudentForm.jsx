import { useTheme, Box, Grid, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
  const { palette } = useTheme()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const student = {
      name: data.get('name'),
      regNo: data.get('regNo'),
      graduation: data.get('graduation'),
      semester: data.get('semester'),
      fees: data.get('fees'),
      date: new Date(data.get('date')), // Convert date string to Date object
    }
    console.log(student)

    event.currentTarget.reset()

    // Assuming `register` and `setCredentials` are defined elsewhere
    // const res = await register(student).unwrap()
    // dispatch(setCredentials({ ...res }))
  }

  return (
    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
                },
              },
            }}
            InputProps={{ sx: { color: 'white' } }}
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
            autoComplete='name'
            name='name'
            required
            fullWidth
            id='name'
            label='Name'
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
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
            id='regNo'
            label='Register Number (Reg No)'
            name='regNo'
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
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
            id='graduation'
            label='Graduation'
            name='graduation'
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
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
            name='semester'
            label='Semester'
            type='text'
            id='semester'
            autoComplete='off'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            InputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
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
            id='fees'
            label='Fees'
            name='fees'
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: palette.primary.light,
                },
                '&.MuiInputLabel-root': {
                  color: palette.grey[300],
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
            id='date'
            // label='Date'
            name='date'
            type='date'
            autoComplete='off'
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
        }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default StudentForm
