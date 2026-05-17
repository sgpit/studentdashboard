import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";

function App() {
  const student = {
    name: "Maria",
    course: "React JS",
    age: 22,
  };

  return (
      <div
          style={{
            padding: "40px",
            fontFamily: "Arial",
          }}
      >
        <h1>Student Dashboard</h1>

        {/* Props Example */}
        <StudentCard
            name={student.name}
            course={student.course}
            age={student.age}
        />

        <hr />

        {/* State Example */}
        <Counter />
      </div>
  );
}
export default App;