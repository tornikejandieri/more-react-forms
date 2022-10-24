const SkillsTwo = () => {
  return ( 
    <div className="skills-two">
      <div>
              <label htmlFor="language">Language Three </label>
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
    </div>
   );
}
 
export default SkillsTwo;