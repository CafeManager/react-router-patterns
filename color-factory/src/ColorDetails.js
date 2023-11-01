import { Redirect, useParams, Link } from "react-router-dom";

function ColorForm({ checkIfColorInList }) {
    const param = useParams();
    const color = checkIfColorInList(param.id);

    return (
        <>
            {color ? (
                <>
                    <div
                        style={{
                            backgroundColor: color.color,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <h1> THIS IS {color.name.toUpperCase()} </h1>
                            <h1> ISN'T IT BEAUTIFUL? </h1>

                            <Link
                                style={{
                                    fontSize: "2rem",
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to="/color"
                            >
                                {" "}
                                Go back{" "}
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <Redirect to="/color"></Redirect>
            )}
        </>
    );
}

export default ColorForm;
