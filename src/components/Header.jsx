import logo from '../assets/iCalculator3.png';

export default function Header({ onHelp }) {
  return (
    <header id="header">
      <button className="help-btn-trigger" onClick={onHelp}>
        <span>Help</span>
      </button>
      <img src={logo} alt="Logo showing iCalculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
