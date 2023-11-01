import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ColorDetails from "./ColorDetails";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

function App() {
    const [colorList, setColorList] = useState([
        { color: "#FF0000", name: "red" },
        { color: "#00FF00", name: "green" },
        { color: "#0000FF", name: "blue" },
    ]);
    function checkIfColorInList(color) {
        const colorCurr = colorList.find((currColor) => {
            return color === currColor.name;
        });
        return colorCurr;
    }

    function addColor(colorData) {
        setColorList([
            ...colorList,
            { name: colorData.name, color: colorData.color },
        ]);
    }
    return (
        <div className="App">
            <Switch>
                <Route exact path="/color">
                    <ColorList colors={colorList}></ColorList>
                </Route>
                <Route exact path="/color/new">
                    <ColorForm addColor={addColor}></ColorForm>
                </Route>
                <Route exact path="/color/:id">
                    <ColorDetails
                        checkIfColorInList={checkIfColorInList}
                    ></ColorDetails>
                </Route>
                <Route path="*">
                    <Redirect to="/color"></Redirect>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
