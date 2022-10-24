import { Link } from "react-router-dom";

const Skills: React.FC = () => {
  return ( 
    <div className="skills">
      <div>
        <p>List your skills or language proficiency levels</p>
      </div>
      <div className="container">
        <article>
          <form className="form-control">
            <div>
              <label htmlFor="skills">Skills And Abilities</label>
              <input type="text" id="skills" />
            </div>
            <div>
              <p>Languages</p>
              <label htmlFor="language">Language One </label>
              <input type="text" id="language" />
              <label htmlFor="level">Level </label>
              <select id="level">
                <option value="">A1</option>
                <option value="">A2</option>
                <option value="">B1</option>
                <option value="">B2</option>
                <option value="">C1</option>
                <option value="">C2</option>
              </select>
            </div>
            <div>
              <label htmlFor="language">Language Two </label>
              <input type="text" id="language" />
              <label htmlFor="level">Level </label>
              <select id="level">
                <option value="">A1</option>
                <option value="">A2</option>
                <option value="">B1</option>
                <option value="">B2</option>
                <option value="">C1</option>
                <option value="">C2</option>
              </select>
              <button>Add Another Language</button>
            </div>
            <button type="submit">Save Changes</button>
          </form> 
          
          
        </article>
        
      </div>
      
      <span> & </span>
      <Link to={'/cv'}>Generate CV</Link>
    </div>
   );
}
 
export default Skills;