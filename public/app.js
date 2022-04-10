const root = document.querySelector("main");

function App() {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const bmiCalculate = height * 2 / weight;
  const desc = React.useRef(null);
  React.useEffect(() => {
    switch (true) {
      case bmiCalculate == NaN:
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "refrence"
  }, /*#__PURE__*/React.createElement("h4", null, "Know more about : "), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Underweight"
  }, "UnderWeight"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://wiki.ihe.net/index.php/Healthy_Weight"
  }, "Healthy Weight"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Overweight"
  }, "OverWeight"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Obesity"
  }, "Obesity"))))), /*#__PURE__*/React.createElement("section", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h1", null, "BMI CALCULATOR"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "weight",
    onChange: event => setWeight(event.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "height",
    onChange: event => setHeight(event.target.value)
  }), /*#__PURE__*/React.createElement("h4", {
    ref: desc,
    className: "desc"
  }, "Empty")), /*#__PURE__*/React.createElement("p", null, "Made by \xA0", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Andrian-W?tab=repositories",
    target: "blank"
  }, "Andrian-W")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);