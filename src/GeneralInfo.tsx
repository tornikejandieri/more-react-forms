import WorkExperience from "./WorkExperience";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

interface Props {
  firstName: string,
  lastName: string,
  placeOfResidence: string,
  sumarry: string,
  generalInfo: any,
  handleSubmit: (params: any) => any,
  onChangeName: (params: any) => any,
  onChangeLastName: (params: any) => any,
  onChangePlace: (params: any) => any,
  onChangeSumarry: (params: any) => any,
  isFilled: boolean,

}

const GeneralInfo: React.FC<Props> = ({firstName, lastName, placeOfResidence, sumarry, generalInfo, handleSubmit, onChangeName, onChangeLastName, onChangePlace, onChangeSumarry, isFilled}) => {

  const [positionName, setPositionName] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [fromTo, setFromTo] = useState<string>('')
  const [jobDescription, setJobDescription] = useState<string>('')

  const [workInfo, setWorkInfo] = useState<any>([])


  const navigate = useNavigate()
 

  const onChangePosition = (e: any) => {
    setPositionName(e.target.value)
  }
  const onChangeCompanyName = (e: any) => {
    setCompanyName(e.target.value)
  }
  const onChangeLocation = (e: any) => {
    setLocation(e.target.value)
  }
  const onChangeFromTo = (e: any) => {
    setFromTo(e.target.value)
  }
  const onChangeJobDescription = (e: any) => {
    setJobDescription(e.target.value)
  }

  const handleSubmitTwo = (e: any) => {
    e.preventDefault()
    if(positionName && companyName && location && fromTo && jobDescription){
      const inputInfo = {id: nanoid(), positionName, companyName, location, fromTo, jobDescription}
      setWorkInfo((workInfo: any) => {
        return [...workInfo, inputInfo]
      })
      setPositionName('')
      setCompanyName('')
      setLocation('')
      setFromTo('')
      setJobDescription('')
    }
    console.log(positionName, companyName, location, fromTo, jobDescription)
    // navigate('/education')
  }


 
  return ( 
    <div className="general-info">
      <div>
        <p>First things first, give us some general information about yourself.</p>
      </div>
      
      <div className="container">
        <article>
          <form className="form-control" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">Name </label>
              <input type="text" id="name" value={firstName} onChange={onChangeName} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastname" value={lastName} onChange={onChangeLastName} />
            </div>
            <div>
              <label htmlFor="location">Place of residence </label>
              <input type="text" id="location" value={placeOfResidence} onChange={onChangePlace} />
            </div>
            <div>
              <label htmlFor="sumarry">Sumarry about yourself </label>
              <textarea  
              id="summary"
              placeholder="Write small summary about your skills and profession for overview purposes"
              value={sumarry}
              onChange={onChangeSumarry} />
            </div>
            <button type="submit">Save</button>
          </form>
        </article>
      </div>
     {isFilled && <WorkExperience 
     positionName={positionName}
     companyName={companyName}
     location={location}
     fromTo={fromTo}
     jobDescription={jobDescription}
     handleSubmitTwo={handleSubmitTwo}
     onChangePosition={onChangePosition}
     onChangeCompanyName={onChangeCompanyName}
     onChangeLocation={onChangeLocation}
     onChangeFromTo={onChangeFromTo}
     onChangeJobDescription={onChangeJobDescription}
     generalInfo={generalInfo}

     />}
    </div>
    
   );
}
 
export default GeneralInfo;