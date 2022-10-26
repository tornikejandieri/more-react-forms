interface Props {
  positionName: string,
  companyName: string,
  location: string,
  fromTo: string,
  jobDescription: string,
  handleSubmit: (params: any) => any,
  onChangePosition: (params: any) => any,
  onChangeCompanyName: (params: any) => any,
  onChangeLocation: (params: any) => any,
  onChangeFromTo: (params: any) => any,
  onChangeJobDescription: (params: any) => any
}

const WorkExperience: React.FC<Props> = ({positionName, companyName, location, fromTo, jobDescription, handleSubmit, onChangePosition, onChangeCompanyName, onChangeFromTo, onChangeJobDescription, onChangeLocation}) => {
 
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
      
    </div>
   );
}
 
export default WorkExperience;