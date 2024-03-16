import {useRouteError} from "react-router-dom"
const Error=()=>{

    const err = useRouteError();

    function generateErrorText(err){
        const keys = Object.keys(err);
        
        return <div>{keys.join(', ')}</div>
    }


    return (
        <div>
            <h1>Opps!...Something went wrong!!</h1>
            <h2>
                {
                  generateErrorText(err)
                }
            </h2>
        </div>
    )
}

export default Error