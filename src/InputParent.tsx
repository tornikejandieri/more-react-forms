import GeneralInfo from "./GeneralInfo";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const InputParent: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [placeOfResidence, setPlaceOfResidence] = useState<string>('')
  const [sumarry, setSumarry] = useState<string>('')
  const [generalInfo, setGeneralInfo] = useState<any>([])
  const navigate = useNavigate()

  const onChangeName = (e: any) => {
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e: any) => {
    setLastName(e.target.value)
  }
  const onChangePlace = (e: any) => {
    setPlaceOfResidence(e.target.value)
  }
  const onChangeSumarry = (e: any) => {
    setSumarry(e.target.value)
  }

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
    console.log(firstName, lastName, placeOfResidence, sumarry)
    navigate('/inputparentworkexperience')
  }

  return ( 
    <div className="input-parent">
      <GeneralInfo 
      firstName={firstName} 
      lastName={lastName} 
      placeOfResidence={placeOfResidence}
      sumarry={sumarry}
      handleSubmit={handleSubmit}
      onChangeName={onChangeName}
      onChangeLastName={onChangeLastName}
      onChangePlace={onChangePlace}
      onChangeSumarry={onChangeSumarry} />
    </div>
   );
}
 
export default InputParent;