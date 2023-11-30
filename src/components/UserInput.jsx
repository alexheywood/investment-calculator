export default function UserInput({onChangeInput, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial investment:</label>
                    <input
                        type="number"
                        id="initialInvestment"
                        name="initialInvestment"
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            onChangeInput("initialInvestment", event.target.valueAsNumber)}
                    >
                    </input>
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual investment:</label>
                    <input 
                    type="number" 
                    id="annualInvestment" 
                    name="annualInvestment"
                    value={userInput.annualInvestment} 
                    onChange={(event) => 
                        onChangeInput("annualInvestment", event.target.valueAsNumber )}
                    >
                    </input>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected return:</label>
                    <input 
                    type="number" 
                    id="expectedReturn" 
                    name="expectedReturn"
                    value={userInput.expectedReturn} 
                    onChange={(event) => 
                        onChangeInput("expectedReturn", event.target.valueAsNumber )}
                    >
                    </input>
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input 
                    type="number" 
                    id="duration" 
                    name="duration"
                    min="1"
                    value={userInput.duration} 
                    onChange={(event) => 
                        onChangeInput("duration", event.target.valueAsNumber )}
                    > 
                    </input>
                </p>
            </div>
        </section>
    )
}
