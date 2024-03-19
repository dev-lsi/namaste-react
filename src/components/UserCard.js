

const UserCard=(props)=>{
    return (
       
        <div className="flex-col">
            <h4>Name:{props.name}</h4>
            <h4>Email: myEmail@my.com</h4>
            <h4>Location: Sofeto</h4>
        </div>
    
    )
};

export default UserCard;