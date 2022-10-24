import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return ( 
    <div className="welcome">
      <div>
        <h1>Welcome to online CV maker</h1>
      </div>
      <div>
        <Link to={'/generalinfo'}>Start Creating Resume</Link>
      </div>
    </div>
   );
}
 
export default Welcome;