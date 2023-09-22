import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Opps!! Something went wrong.</h1>
            <Link to='/'>Go back to home.</Link>
        </div>
    );
};

export default Error;