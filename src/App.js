import "./App.css";

function App() {
  let title = "Hello";
  title = "Hi";

  function get() {
    alert("Hello Okurmen");
  }

  return (
    <div onClick={get} className="App">
      {title} Aibek
    </div>
  );
}

export default App;
