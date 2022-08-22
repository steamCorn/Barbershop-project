import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div>
            <main>
                <h1>Our Barbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </main>
            <nav>
                <Link to="/">Home page</Link>
            </nav>

        </div>
    )
}

export default Team;