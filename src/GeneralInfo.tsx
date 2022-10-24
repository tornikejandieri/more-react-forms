import { Link } from "react-router-dom";

const GeneralInfo: React.FC = () => {
  return ( 
    <div className="general-info">
      <div>
        <p>First things first, give us some general information about yourself.</p>
      </div>
      
      <div className="container">
        <article>
          <form className="form-control">
            <div>
              <label htmlFor="firstName">Name </label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastname" />
            </div>
            <div>
              <label htmlFor="location">Place of residence </label>
              <input type="text" id="location" />
            </div>
            <div>
              <label htmlFor="sumarry">Sumarry about yourself </label>
              <textarea  id="summary" placeholder="Write small summary about your skills and profession for overview purposes" />
            </div>
            <button type="submit">Save</button>
          </form>
          

          {/* put programming navigation link inside submit function for later */}
          <Link to={'/workexperience'}>Next Step</Link>
        </article>
      </div>
    </div>
    
   );
}
 
export default GeneralInfo;