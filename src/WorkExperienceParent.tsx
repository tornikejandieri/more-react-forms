import WorkExperience from "./WorkExperience";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const WorkExperienceParent: React.FC = () => {
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

  const handleSubmit = (e: any) => {
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
    navigate('/education')
  }

  return ( 
    <div className="work-experience-parent">
      <WorkExperience 
      positionName={positionName}
      companyName={companyName}
      location={location}
      fromTo={fromTo}
      jobDescription={jobDescription}
      handleSubmit={handleSubmit}
      onChangePosition={onChangePosition}
      onChangeCompanyName={onChangeCompanyName}
      onChangeLocation={onChangeLocation}
      onChangeFromTo={onChangeFromTo}
      onChangeJobDescription={onChangeJobDescription}
       />
    </div>
   );
}
 
export default WorkExperienceParent;