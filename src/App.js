import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Hans" />
      <Greeting name="Cj" />
    </>
  );
}

function Greeting({ name }) {
  return name === "Cj" ? <h1>Hello coach</h1> : <h1>Hello {name}</h1>;
}
