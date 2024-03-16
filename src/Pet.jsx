// const Pet = (props) => {
//   return createElement("div", {}, [
//     createElement("h1", {}, props.name),
//     createElement("h2", {}, props.animal),
//     createElement("h2", {}, props.breed),
//   ]);
// };

function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
}

export default Pet;
