import logo from "./logo.svg";

// main body reducer: {
//  components: [
//  {header state}
//  {body state}
//  {footer state}
//  {buttons state}
// ]
// }

// SideBar ->  {
// Header component
// Body message component -> Tips component
// Footer text component
// Buttons components
// }
// Message Review -> {
// Message example -> {
// }
// }
// Side menu
// Sliders

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
