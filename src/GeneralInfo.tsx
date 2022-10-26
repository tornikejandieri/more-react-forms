

interface Props {
  firstName: string,
  lastName: string,
  placeOfResidence: string,
  sumarry: string,
  generalInfo: any,
  handleSubmit: (params: any) => any,
  onChangeName: (params: any) => any,
  onChangeLastName: (params: any) => any,
  onChangePlace: (params: any) => any,
  onChangeSumarry: (params: any) => any
}

const GeneralInfo: React.FC<Props> = ({firstName, lastName, placeOfResidence, sumarry, generalInfo, handleSubmit, onChangeName, onChangeLastName, onChangePlace, onChangeSumarry}) => {




 
  return ( 
    <div className="general-info">
      <div>
        <p>First things first, give us some general information about yourself.</p>
      </div>
      
      <div className="container">
        <article>
          <form className="form-control" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">Name </label>
              <input type="text" id="name" value={firstName} onChange={onChangeName} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastname" value={lastName} onChange={onChangeLastName} />
            </div>
            <div>
              <label htmlFor="location">Place of residence </label>
              <input type="text" id="location" value={placeOfResidence} onChange={onChangePlace} />
            </div>
            <div>
              <label htmlFor="sumarry">Sumarry about yourself </label>
              <textarea  
              id="summary"
              placeholder="Write small summary about your skills and profession for overview purposes"
              value={sumarry}
              onChange={onChangeSumarry} />
            </div>
            <button type="submit">Save</button>
          </form>
        </article>
      </div>
     
    </div>
    
   );
}
 
export default GeneralInfo;