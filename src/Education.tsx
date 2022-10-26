import Skills from "./Skills";

interface Props {
  schoolName: string,
  degree: string,
  graduationDate: string,
  schoolInfo: any,
  handleSubmitThree: (params: any) => any,
  onChangeSchoolName: (params: any) => any,
  onChangeDegree: (params: any) => any,
  onChangeGraduation: (params: any) => any,
  generalInfo: any,
}

const Education: React.FC<Props> = ({ schoolName, degree, graduationDate, schoolInfo, handleSubmitThree, onChangeDegree, onChangeGraduation, onChangeSchoolName, generalInfo}) => {
  return ( 
   <div className="education">
      <div>
        <p>Where did you study?</p>
      </div>
      <div className="container">
        && <article>
          <form className="form-control" onSubmit={handleSubmitThree}>
            <div>
              <label htmlFor="name">School Name </label>
              <input type="text" id="name" value={schoolName} onChange={onChangeSchoolName}/>
            </div>
            <div>
              <label htmlFor="degree">Degree </label>
              <input type="text" id="degree" value={degree} onChange={onChangeDegree} />
            </div>
            <div>
              <label htmlFor="fromTo">From-To </label>
              <input type="text" id="fromTo" value={graduationDate} onChange={onChangeGraduation} />
            </div>
            <button>Add Another School</button>
            <button type="submit">Save</button>
          </form>
          
          
     
        </article>
        
        
      </div>
      <Skills />
    </div>
   );
}
 
export default Education;