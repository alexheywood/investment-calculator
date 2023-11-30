import logo from '/investment-calculator-logo.png'

export default function Header() {

    return (
        <header id="header">
            <img src={logo} alt="investment calculator" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}