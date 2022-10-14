
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, EditButton,Box } from './styles';
import { DeletButton } from '../Prdouct/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useFetchGetCategoryAndBrandQuery } from 'services/AdminPanelServices/categoryAndBrandservices';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


// const {data} = useFetchGetCategoryAndBrandQuery()

export const CategoryAndBrand = () => {
  return (
    <Container>
    <Box>
    <TableContainer  sx={{ maxWidth: 350 }} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor:"#6dd8e6e6"}} >
            <TableCell sx={{ maxWidth: 100 }}>Category Name</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell ><EditButton>Edit</EditButton></TableCell>
              <TableCell >
                <DeletButton>
                <Tooltip title="Delete">
                  <IconButton >
                  <DeleteIcon  />
                  </IconButton>
                 </Tooltip>
                </DeletButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>


    <Box>
    <TableContainer  sx={{ maxWidth: 350 }} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor:"#88cbf0 "}} >
            <TableCell sx={{ maxWidth: 100 }}>Category Name</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell ><EditButton>Edit</EditButton></TableCell>
              <TableCell >
                <DeletButton>
                <Tooltip title="Delete">
                  <IconButton >
                  <DeleteIcon  />
                  </IconButton>
                 </Tooltip>
                </DeletButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Container>
   
  );
}
