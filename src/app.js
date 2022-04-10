const root = document.querySelector("main");

function App() {
    const [weight, setWeight] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const bmiCalculate = (height * 2) / weight;
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

    return (
        <>
            <section className="refrence">
                <h4>Know more about : </h4>
                <ul>
                    <li>
                        <p>
                            <a href="https://en.wikipedia.org/wiki/Underweight">
                                UnderWeight
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="https://wiki.ihe.net/index.php/Healthy_Weight">
                                Healthy Weight
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="https://en.wikipedia.org/wiki/Overweight">
                                OverWeight
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="https://en.wikipedia.org/wiki/Obesity">
                                Obesity
                            </a>
                        </p>
                    </li>
                </ul>
            </section>
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

            <p>
                Made by &nbsp;
                <a href="https://github.com/Andrian-W?tab=repositories" target="blank">
                    Andrian-W
                </a>
            </p>
        </>
    );
}

ReactDOM.render(<App />, root);
