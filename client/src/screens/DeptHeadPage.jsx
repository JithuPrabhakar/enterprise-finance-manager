import { useState } from 'react'
import { useTheme, Typography, Box, Button } from '@mui/material'
import StudentForm from './Department/StudentForm'
import MsgAdmin from './Department/MsgAdmin'

const DeptHeadPage = () => {
  const [departmentName, setDepartmentName] = useState('')
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showMsgAdminForm, setShowMsgAdminForm] = useState(false)
  const { palette } = useTheme()

  const handleShowStudentForm = () => {
    setShowStudentForm(true)
    setShowMsgAdminForm(false)
  }

  const handleShowMsgAdminForm = () => {
    setShowStudentForm(false)
    setShowMsgAdminForm(true)
  }

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to the {departmentName} department
      </Typography>
      <Typography variant='h3' sx={{ color: palette.primary.light, mt: 2 }}>
        Student Fees Details
      </Typography>
      <Button
        onClick={handleShowStudentForm}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showStudentForm}
      >
        Add student fee
      </Button>
      <Button
        onClick={handleShowMsgAdminForm}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showMsgAdminForm}
      >
        Ask for repairs to admin
      </Button>
      {showStudentForm && <StudentForm />}
      {showMsgAdminForm && <MsgAdmin />}
    </Box>
  )
}

export default DeptHeadPage
