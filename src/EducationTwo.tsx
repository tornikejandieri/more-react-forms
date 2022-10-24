const EducationTwo: React.FC = () => {
  return ( 
    <div className="education-two">
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
          </form>
        </article>
      </div>
    </div>
   );
}
 
export default EducationTwo;