import { useParams } from "react-router-dom";

const DogDetails = ({ getDogFromList }) => {
    const dog = useParams();
    const dogData = getDogFromList(dog.dog);
    console.log(dogData);
    return (
        <>
            <img src={dogData.src} />
            <h1> Name: {dogData.name} </h1>
            <p> Age: {dogData.age}</p>
            <h1> Fun facts </h1>

            {dogData.facts.map((fact) => {
                return <p> {fact} </p>;
            })}
        </>
    );
};

export default DogDetails;
