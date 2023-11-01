
import {  Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
    return (
        <>
            <div className="header">
                <h1> Welcome to color factory </h1>
                <Link to="/color/new"> Add a color </Link>
            </div>
            {colors.map((color) => (
                <h1>
                    <Link
                        className="remove-decoration"
                        to={`/color/${color.name}`}
                    >
                        {color.name}
                    </Link>
                </h1>
            ))}
        </>
    );
}

export default ColorList;
