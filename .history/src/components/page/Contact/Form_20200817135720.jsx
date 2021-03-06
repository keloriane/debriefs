import React,{useState} from "react";

export const Form = () => {

      
    const [state , setState] = useState({
        name:"",
        lastName:"",
        mail:"",
        message:''
    })


    const handleForm = (e) => {
        e.preventDefault();
        let target = e.target
        let value = e.target.value
        let name = target.name
        
        setState({
            [name]: value
        })
    }


  return (
    <form action="post">
      <div className="name-lastname-form">
        <div className="name form-input">
          <label>Nom</label>
          <input
            type="text"
            className="name-input"
            onChange={handleForm}
            name="name"
            value={state.name}
          />
        </div>
        <div className="last-name form-input">
          <label>Prénom</label>
          <input type="text" className="last-name-input" />
        </div>
      </div>
      <div className="mail-form ">
        <div className="mail-input form-input">
          <label htmlFor="">e-mail</label>
          <input type="mail" />
        </div>
      </div>
      <div className="text-form  ">
        <div className="text-input form-input">
          <label> Votre projet / vos Questions </label>
          <textarea className="long-text" type="text" />
        </div>
      </div>
      <div className="button-call">
        <div className="line"></div>
        <button type="submit">
          <div className="button-overlay"></div>
          <Link href="/debriefs/home">CONFIRMER</Link>
        </button>
      </div>
    </form>
  );
};
export default Form;