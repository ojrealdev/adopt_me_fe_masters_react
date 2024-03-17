import { createElement } from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";
/** 
const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "German Shephard",
    }),
    createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};
*/

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="German Shephard" />
      <Pet name="Doinnkk" animal="Cat" breed="Mix" />
    </div>
  )
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(<App/>));
