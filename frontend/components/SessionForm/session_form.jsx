import React from 'react';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }  

  render(){
    //username
    //password
    
    return(
      
      <div>
        <header>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up!</Link>
        </header>
        <form action="">
          <input type="text" className="navButton"/>
          <input type="text" className="navButton"/>
          <button type="submit">`${this.props.formType}`</button>
        </form>
      </div>
    );
  }
}
