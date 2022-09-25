// required
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// includes
import { rows } from './rows';


const HomeTable = () => {
  return (
    <TableContainer component={Paper} className='table'>
      <Table>
        <TableHead>
          <TableRow className="table-color">
            <TableCell>Tracking ID</TableCell>
            <TableCell align="left">product</TableCell>
            <TableCell align="left">customer</TableCell>
            <TableCell align="left">date</TableCell>
            <TableCell align="left">amount</TableCell>
            <TableCell align="left">Payment method</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="table-color"
            >
              <TableCell component="th" scope="row">
                #{row.id}
              </TableCell>
              <TableCell align="left">
                <div className='table-product'>
                    <img src={row.img} alt={row.product} />
                    <span>{row.product}</span>
                </div>
              </TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">$ {row.amount}</TableCell>
              <TableCell align="left">{row.method}</TableCell>
              <TableCell align="left">
                <div className="table-status">
                    {
                        row.status === 'Approved' ? 
                        <div className="table-status-approved">
                            {row.status}
                        </div> : 
                        <div className="table-status-pending">
                            {row.status}
                        </div> 
                    }
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HomeTable 