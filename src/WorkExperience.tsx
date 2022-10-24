import { Link } from "react-router-dom";

const WorkExperience: React.FC = () => {
  return ( 
    <div className="work-experience">
      <div>
        <p>Now lets fill in information about your past and present positions</p>
      </div>
      <div className="container">
        <article>
          <form className="form-control">
            <div>
              <label htmlFor="positionName">Position Name </label>
              <input type="text" id="positionName" />
            </div>
            <div>
              <label htmlFor="companyName">Company Name </label>
              <input type="text" id="companyName" />
            </div>
            <div>
              <label htmlFor="location">Location </label>
              <input type="text" id="location" />
            </div>
            <div>
              <label htmlFor="fromTo">From-To </label>
              <input type="text" id="fromTo" />
            </div>
           
            <div>
              <label htmlFor="description">Job Description </label>
              <textarea id="description" placeholder="shortly describe what were your responsibilities and tasks"/>
            </div>
            <button type="submit">Save</button>
            <Link to={'/education'}>Next</Link>
          </form>
        </article>
      </div>
    </div>
   );
}
 
export default WorkExperience;