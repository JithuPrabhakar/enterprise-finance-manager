import { Box, Button, Typography, useTheme } from '@mui/material'
import TransactionForm from './Accountant/TransactionForm'
import { useState } from 'react'

const Accountant = () => {
  const [expenseForm, setExpenseForm] = useState(false)
  const { palette } = useTheme()

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to Accounts
      </Typography>
      <Button
        variant='contained'
        sx={{
          mt: 2,
          backgroundColor: palette.primary.main,
          color: 'black',
        }}
        onClick={() => setExpenseForm(!expenseForm)}
      >
        Add Expenses
      </Button>
      {expenseForm && <TransactionForm />}
    </Box>
  )
}

export default Accountant
