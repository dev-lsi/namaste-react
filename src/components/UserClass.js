import React from "react";

class UserClass extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
        
        return (
            <div className="user-card">
                    <h4>Name:{this.props.name}</h4>
                    <h4>Email: myEmail@my.com</h4>
                    <h4>Location: Sofeto</h4>
            </div>
        )
    
    }
}

export default UserClass;