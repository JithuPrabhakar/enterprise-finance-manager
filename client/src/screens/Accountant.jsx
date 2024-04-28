import { Box, Button, Typography, useTheme } from '@mui/material'
import TransactionForm from './Accountant/TransactionForm'
import { useState } from 'react'
import ViewTransactions from './Accountant/ViewTransactions'
import ViewFeeDetails from './Accountant/ViewFeeDetails'

const Accountant = () => {
  const [expenseForm, setExpenseForm] = useState(false)
  const [viewTransactions, setViewTransactions] = useState(false)
  const [viewStudentFee, setViewStudentFee] = useState(false)
  const { palette } = useTheme()

  const expenseFormHandler = () => {
    setExpenseForm(true)
    setViewTransactions(false)
    setViewStudentFee(false)
  }

  const showTransactionHandler = () => {
    setExpenseForm(false)
    setViewTransactions(true)
    setViewStudentFee(false)
  }

  const showFeesHandler = () => {
    setExpenseForm(false)
    setViewTransactions(false)
    setViewStudentFee(true)
  }

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to Accounts
      </Typography>
      <Box
        display='flex'
        justifyContent='space-around'
        width={'60%'}
        my={2}
        mx='auto'
      >
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={expenseFormHandler}
        >
          Add Transactions
        </Button>
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={showTransactionHandler}
        >
          View Transactions
        </Button>
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={showFeesHandler}
        >
          View Students Fee
        </Button>
      </Box>
      {expenseForm && <TransactionForm />}
      {viewTransactions && <ViewTransactions />}
      {viewStudentFee && <ViewFeeDetails />}
    </Box>
  )
}

export default Accountant
