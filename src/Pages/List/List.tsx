// components
import { useLocation, useNavigate } from "react-router-dom"
import DataTable from "../../Components/DataTable/DataTable";

const List = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const pathName = pathname.split('/')[1]
  
  return (
    <div>
      <div className="addNew">
        <h5>Add New {pathName}</h5>
        <button
          onClick={() => navigate(`/${pathName}/new`)}
        >
          Add New
        </button>
      </div>
      <DataTable pathName={pathName}/>
    </div>
  )
}

export default List