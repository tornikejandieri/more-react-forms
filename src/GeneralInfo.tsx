import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";


const GeneralInfo: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [placeOfResidence, setPlaceOfResidence] = useState<string>('')
  const [sumarry, setSumarry] = useState<string>('')
  const [generalInfo, setGeneralInfo] = useState<any>([])

  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(firstName && lastName && placeOfResidence && sumarry){
      const inputInfo = {id: nanoid(), firstName, lastName, placeOfResidence, sumarry }
      setGeneralInfo((generalInfo: any) => {
       return [...generalInfo, inputInfo]
      })
      setFirstName('')
      setLastName('')
      setPlaceOfResidence('')
      setSumarry('')
    }
 
    navigate('/workexperience')
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
              <input type="text" id="name" value={firstName} onChange={(e: any) => setFirstName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastname" value={lastName} onChange={(e: any) => setLastName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="location">Place of residence </label>
              <input type="text" id="location" value={placeOfResidence} onChange={(e: any) => setPlaceOfResidence(e.target.value)} />
            </div>
            <div>
              <label htmlFor="sumarry">Sumarry about yourself </label>
              <textarea  
              id="summary"
              placeholder="Write small summary about your skills and profession for overview purposes"
              value={sumarry}
              onChange={(e: any) => setSumarry(e.target.value)} />
            </div>
            <button type="submit">Save</button>
          </form>
        </article>
      </div>
     
    </div>
    
   );
}
 
export default GeneralInfo;