import React from 'react';
import console from 'console';



class Login extends React.Component{
   constructor(){
       super();
        this.HandleOnSubmit= this.HandleOnSubmit.bind(this);
   }
render(){
return (
    <>
<form method="post" onSubmit={this.HandleOnSubmit}>
<input className="mr-2 input-sm" type="text"name="userName" placeholder="Username">
</input>
<input type="password" name="password" placeholder="password">
</input>
<button  type="submit" className="btn btn-secondary ml-2">Login!</button>
</form>
  </>
)}

HandleOnSubmit=event => {
    event.preventDefault() 
   
    if(event.target.userName.value =="Varsium" && event.target.password.value=="varsium1949"){
      console.log("auth success");
       this.props.history.push('/Store');

    }   
}

}

export default Login