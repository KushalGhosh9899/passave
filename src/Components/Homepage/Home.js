import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <title>Home Page</title>
            <h1>this is homepage</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>
    );
}

export default Home;