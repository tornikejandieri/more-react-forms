import { Link } from "react-router-dom";

const Education: React.FC = () => {
  return ( 
    <div className="education">
      <div>
        <p>Where did you study?</p>
      </div>
      <div className="container">
        <article>
          <form className="form-control">
            <div>
              <label htmlFor="name">School Name </label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="degree">Degree </label>
              <input type="text" id="degree" />
            </div>
            <div>
              <label htmlFor="fromTo">From-To </label>
              <input type="text" id="fromTo" />
            </div>
            <button>Add Another School</button>
            <button type="submit">Save</button>
          </form>
          
          
          <Link to={'/skills'}>Next</Link>
        </article>
        
        
      </div>
    </div>
   );
}
 
export default Education;