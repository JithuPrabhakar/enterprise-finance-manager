import { Box, useMediaQuery } from '@mui/material'
import {
  gridTemplateLarge,
  gridTemplateSmall,
} from '../../components/Dashboard/DashboardGrid'
import { RowOne } from './RowOne'
import RowTwo from './RowTwo'
import { RowThree } from './RowThree'

export const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px')

  return (
    <Box
      width='100%'
      height='100%'
      display='grid'
      gap='1.5rem'
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repear(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <RowOne />
      <RowTwo />
      <RowThree />
    </Box>
  )
}
