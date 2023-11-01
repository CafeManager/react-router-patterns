import { useState } from "react";
import "./DogList.css";

function DogDetails({ dogList }) {
    console.log(dogList);
    return (
        <>
            <div>
                {dogList.map((dog) => {
                    return (
                        <>
                            <img src={dog.src} />
                            <h1> Name: {dog.name} </h1>
                            <p> Age: {dog.age}</p>
                            <h1> Fun facts </h1>

                            {dog.facts.map((fact) => {
                                return <p> {fact} </p>;
                            })}
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default DogDetails;
