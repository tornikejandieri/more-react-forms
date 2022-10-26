import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return ( 
    <div className="welcome">
      <div>
        <h1>Welcome to online CV maker</h1>
      </div>
      <div>
        <Link to={'/inputparent'}>Start Creating Your Resume</Link>
      </div>
    </div>
   );
}
 
export default Welcome;