import { createElement } from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return createElement("div", {}, [
    createElement("h1", {}, props.name),
    createElement("h2", {}, props.animal),
    createElement("h2", {}, props.breed),
  ]);
};

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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
