import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid'

const WorkExperience: React.FC = () => {
  const [positionName, setPositionName] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [fromTo, setFromTo] = useState<string>('')
  const [jobDescription, setJobDescription] = useState<string>('')
  const [workInfo, setWorkInfo] = useState<any>([])

  const navigate = useNavigate()

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
  
    navigate('/education')
  }
  return ( 
    <div className="work-experience">
      <div>
        <p>Now lets fill in information about your past and present positions</p>
      </div>
      <div className="container">
        <article>
          <form className="form-control" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="positionName">Position Name </label>
              <input type="text" id="positionName" value={positionName} onChange={(e: any) => setPositionName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="companyName">Company Name </label>
              <input type="text" id="companyName" value={companyName} onChange={(e: any) => setCompanyName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="location">Location </label>
              <input type="text" id="location" value={location} onChange={(e: any) => setLocation(e.target.value)} />
            </div>
            <div>
              <label htmlFor="fromTo">From-To </label>
              <input type="text" id="fromTo" value={fromTo} onChange={(e: any) => setFromTo(e.target.value)} />
            </div>
           
            <div>
              <label htmlFor="description">Job Description </label>
              <textarea 
              id="description"
              placeholder="shortly describe what were your responsibilities and tasks"
              value={jobDescription}
              onChange={(e: any) => setJobDescription(e.target.value)}
              />
            </div>
            <button type="submit">Save</button>
          
          </form>
        </article>
      </div>
      
    </div>
   );
}
 
export default WorkExperience;