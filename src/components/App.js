import React, { useState, useEffect } from "react";

function App() {

    let [dogPic, setDogPic] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setDogPic(data.message);
        });
    }, []);
    // use empty dependencies array so fetch is only requested one time

    if (!dogPic) return <p>Loading...</p>;

    return <img src={dogPic} alt="A Random Dog" />;
}

export default App;