import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  Typography,
} from '@mui/material'
import { useGetStudentFeeQuery } from '../../slices/accountSlice'

const ViewFeeDetails = () => {
  const { palette } = useTheme()
  const { data, isLoading, error } = useGetStudentFeeQuery()

  return (
    <div>
      <h2>Student Fee Details</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h4'>Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Department</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Register Number</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Amount</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{message.date.toString().split('T')[0]}</TableCell>
                  <TableCell>{message.department}</TableCell>
                  <TableCell>{message.regNo}</TableCell>
                  <TableCell>{message.fees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default ViewFeeDetails
