import './App.css';

function App() {
  const showAlert = () => {
    alert("CI/CD Pipeline is working!");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to the Simple CI/CD Demo!</h1>
        <p>This is a simple webpage for testing your CI/CD pipeline.</p>
        <button onClick={showAlert}>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
