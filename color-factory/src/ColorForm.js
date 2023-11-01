import { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {
    const INITIAL_DATA = {
        name: "",
        color: "",
    };

    const [form, setForm] = useState(INITIAL_DATA);
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setForm((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(form);
        history.push("/color");
    };
    return (
        <>
            <div
                style={{
                    height: "100%",
                    background:
                        "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            background: "white",
                            borderRadius: "10px",
                            width: "50%",
                            height: "10%",
                            alignItems: "start",
                            justifyContent: "space-around",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div
                            style={{
                                marginLeft: "1rem",
                            }}
                        >
                            <label htmlFor="name"> Name </label>
                            <input
                                onChange={handleChange}
                                name="name"
                                id="name"
                                type="text"
                            ></input>
                        </div>
                        <div
                            style={{
                                marginLeft: "1rem",
                            }}
                        >
                            <label htmlFor="color"> Color </label>
                            <input
                                onChange={handleChange}
                                name="color"
                                id="color"
                                type="color"
                            ></input>
                        </div>
                        <div
                            style={{
                                marginLeft: "1rem",
                            }}
                        >
                            <button> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ColorForm;
