import { useState } from 'react'
import { useTheme, Typography, Box } from '@mui/material'
import StudentForm from './Department/StudentForm'

const DeptHeadPage = () => {
  const [departmentName, setDepartmentName] = useState('')
  const { palette } = useTheme()

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to the {departmentName} department
      </Typography>
      <Typography variant='h3' sx={{ color: palette.primary.light, mt: 2 }}>
        Student Fees Details
      </Typography>
      <StudentForm />
    </Box>
  )
}

export default DeptHeadPage
