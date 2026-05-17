function StudentCard({ name, course, age }) {
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "10px",
            }}
        >
            <h2>Student Information</h2>

            <p>
                <strong>Name:</strong> {name}
            </p>

            <p>
                <strong>Course:</strong> {course}
            </p>

            <p>
                <strong>Age:</strong> {age}
            </p>
        </div>
    );
}

export default StudentCard;
