import "./App.css";
import { Switch, Route } from "react-router-dom";
import duke from "./static/duke.jpg";
import whiskey from "./static/whiskey.jpg";
import tubby from "./static/tubby.jpg";
import perry from "./static/perry.jpg";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function App(props) {
    function getDogFromList(name) {
        for (let dog of props.dogs) {
            if (dog.name.toLowerCase() == name.toLowerCase()) {
                console.log("Reach");
                return dog;
            }
        }
        return false;
    }
    return (
        <>
            <h1> Dog Finder </h1>
            <Switch>
                <Route exact path="/">
                    <DogList dogList={props.dogs}></DogList>
                </Route>
                <Route exact path="/:dog">
                    <DogDetails getDogFromList={getDogFromList}></DogDetails>
                </Route>
            </Switch>
        </>
    );
}

App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!",
            ],
        },
        {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs.",
            ],
        },
        {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain.",
            ],
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore.",
            ],
        },
    ],
};

export default App;
