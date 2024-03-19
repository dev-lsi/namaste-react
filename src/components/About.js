import UserCard from "./UserCard";
import UserClass from "./UserClass";

const About=()=>{ return (
    <div>
        <h1>About Page</h1>
        <h2>Namste React Web Series</h2>
        <UserCard name="Lacho (Function component)"/>
        <UserClass name="Lacho (Class component)"/>
    </div>
)}

export default About;