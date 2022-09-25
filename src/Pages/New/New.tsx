// required
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { ChangeEvent, useState } from 'react';
// includes
import { dataFormType } from "../../Types/dataFormType"


type NewType = {
  routeName: string
  formElements: dataFormType[]
}
const New = ( { routeName, formElements }: NewType ) => {
  const [file, setFile] = useState<any>(null)
  console.log(file && file)
  const getUpload = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<null>) => {
    setFile(e.target.files && e.target.files[0])
  }
  return (
    <div className="new">
      <div className="new-title">Add new {routeName}</div>
      <div className="new-content">
        <div className="new-content-img">
          <img
            referrerPolicy='no-referrer'
            src={
              file !== null ?
              URL.createObjectURL(file) :
              "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            } 
            alt="uploaded" 
          />
        </div>
        <div className="new-content-form">
          <form>
            <div className="form-control">
              <label htmlFor="upload">
                <span>image: </span><DriveFolderUploadIcon className="icon"/>
              </label>
              <input
                type='file' id="upload" style={{"display": "none"}} 
                onChange={(e) => getUpload(e)} 
              />
            </div>
            {
              formElements.map((index) => (
              <div className="form-control" key={index.id}>
                <label>{index.label}</label>
                <input type={index.type} placeholder={index?.placeholder}/>
              </div>
              ))
            }
          </form>
          <div className="new-content-form-submit">
            <button>
              send
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default New