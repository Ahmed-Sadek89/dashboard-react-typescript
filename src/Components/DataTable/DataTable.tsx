// required
import { useState } from 'react'
import { 
    DataGrid,
    GridRenderCellParams,
    GridColDef
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
// includes
import { columns, userRows } from './DataRowAndCol';
import {rowUsers} from '../../Types/rowUsers';

type dataTableTypes = {
  pathName: string
}
const DataTable = ( { pathName }: dataTableTypes) => {
    const navigate = useNavigate();
    const [ filterdData, setFilterdData ] = useState<rowUsers[]>(userRows)
    const actionColumn: GridColDef[] = [
        { field: 'action', headerName: 'Action', width: 200,
          renderCell: (params: GridRenderCellParams<any, any, any>) => {
            // for binding two or more tsx/jsx elements
            return(
              <div className="users-data-action">
                <button
                  className="users-data-action-view" 
                  onClick={() => navigate(`/${pathName}/${params.row.id}`)}
                >
                  view
                </button>
                <button
                  className="users-data-action-delete"
                  onClick={() => {
                    setFilterdData((prev: rowUsers[]) => {
                        return prev.filter(index => index.id !== params.row.id)
                    })
                  }}
                >
                  delete
                </button>
              </div>
            )
        }
          // valueGetter: (params: GridValueGetterParams) => 
          //  for binding two or more string
          // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
    return (
        <div className="users-data">
            <DataGrid
                rows={filterdData}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable 
