import { nanoid } from "nanoid";
import { useState } from "react";
import Education from "./Education";

interface Props {
  positionName: string,
  companyName: string,
  location: string,
  fromTo: string,
  jobDescription: string,
  handleSubmitTwo: (params: any) => any,
  onChangePosition: (params: any) => any,
  onChangeCompanyName: (params: any) => any,
  onChangeLocation: (params: any) => any,
  onChangeFromTo: (params: any) => any,
  onChangeJobDescription: (params: any) => any,
  generalInfo: any,
}

const WorkExperience: React.FC<Props> = ({positionName, companyName, location, fromTo, jobDescription, generalInfo,  handleSubmitTwo, onChangePosition, onChangeCompanyName, onChangeFromTo, onChangeJobDescription, onChangeLocation}) => {
 const [schoolName, setSchoolName] = useState<string>('')
 const [degree, setDegree] = useState<string>('')
 const [graduationDate, setGraduationDate] = useState<string>('')
 const [schoolInfo, setSchoolInfo] = useState<any>([])


 const onChangeSchoolName = (e: any) => {
  setSchoolName(e.target.value)
 }
 const onChangeDegree = (e: any) => {
  setDegree(e.target.value)
 }
 const onChangeGraduation = (e: any) => {
  setGraduationDate(e.target.value)
 }

 const handleSubmitThree = (e: any) => {
  e.preventDefault()
  const schoolInput = {id: nanoid(), schoolName, degree, graduationDate }
  if(schoolName && degree && graduationDate){
    setSchoolInfo((schoolInfo: any) => {
      return [...schoolInfo, schoolInput]
    })
      setSchoolName('')
      setDegree('')
      setGraduationDate('')
  
  }
  console.log(schoolName, degree, graduationDate)
 }


  return ( 
    <div className="work-experience">
      <div>
        <p>Now lets fill in information about your past and present positions</p>
      </div>
      <div className="container">
        <article>
          <form className="form-control" onSubmit={handleSubmitTwo}>
            <div>
              <label htmlFor="positionName">Position Name </label>
              <input type="text" id="positionName" value={positionName} onChange={onChangePosition} />
            </div>
            <div>
              <label htmlFor="companyName">Company Name </label>
              <input type="text" id="companyName" value={companyName} onChange={onChangeCompanyName} />
            </div>
            <div>
              <label htmlFor="location">Location </label>
              <input type="text" id="location" value={location} onChange={onChangeLocation} />
            </div>
            <div>
              <label htmlFor="fromTo">From-To </label>
              <input type="text" id="fromTo" value={fromTo} onChange={onChangeFromTo} />
            </div>
           
            <div>
              <label htmlFor="description">Job Description </label>
              <textarea 
              id="description"
              placeholder="shortly describe what were your responsibilities and tasks"
              value={jobDescription}
              onChange={onChangeJobDescription}
              />
            </div>
            <button type="submit">Save</button>
          
          </form>
        </article>
      </div>
      <Education 
      schoolName={schoolName}
      degree={degree}
      graduationDate={graduationDate}
      handleSubmitThree={handleSubmitThree}
      onChangeSchoolName={onChangeSchoolName}
      onChangeDegree={onChangeDegree}
      onChangeGraduation={onChangeGraduation}
      generalInfo={generalInfo}
      schoolInfo={schoolInfo} />
    </div>
   );
}
 
export default WorkExperience;