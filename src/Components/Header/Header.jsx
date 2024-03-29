import reactImg from "../../assets/react-core-concepts.png";
export const reactArray = ["Fundamental", "Crucial", "Core"];
function description(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactArray[description(2)]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
