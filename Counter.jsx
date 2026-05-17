import { useState } from "react";

function Counter() {
    const [likes, setLikes] = useState(0);

    const increaseLikes = () => {
        setLikes(likes + 1);
    };

    const resetLikes = () => {
        setLikes(0);
    };

    return (
        <div
            style={{
                marginTop: "30px",
            }}
        >
            <h2>Student Likes</h2>

            <h3>{likes}</h3>

            <button
                onClick={increaseLikes}
                style={{
                    padding: "10px",
                    marginRight: "10px",
                }}
            >

            </button>

            <button
                onClick={resetLikes}
                style={{
                    padding: "10px",
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
