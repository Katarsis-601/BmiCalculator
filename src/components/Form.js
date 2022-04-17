import React from "react";
export default function Form() {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const bmiCalculate = (height * 2) / weight;
  const desc = React.useRef(null);
  React.useEffect(() => {
    switch (true) {
      default:
        desc.current.innerHTML = "Empty";
        break;
      case bmiCalculate <= 18.5:
        desc.current.innerHTML = "UnderWeight";
        break;
      case bmiCalculate <= 24.9:
        desc.current.innerHTML = "Healthy Weight";
        break;
      case bmiCalculate <= 29.9:
        desc.current.innerHTML = "OverWeight";
        break;
      case bmiCalculate > 30.0:
        desc.current.innerHTML = "Obesity";
        break;
    }
  });
  return (
    <>
      <section className="content">
        <h1>BMI CALCULATOR</h1>

        <input
          type="number"
          className="weight"
          onChange={(event) => setWeight(event.target.value)}
        />
        <input
          type="number"
          className="height"
          onChange={(event) => setHeight(event.target.value)}
        />

        <h4 ref={desc} className="desc">
          Empty
        </h4>
      </section>
    </>
  );
}
