
    // React Component Example: "Greeting"
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
      }
  
      // React Component with State: "Counter"
      function Counter() {
        const [count, setCount] = React.useState(0);
        
        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);
  
        return (
          <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
          </div>
        );
      }
  
      // Main App Component
      function App() {
        return (
          <div>
            <Greeting name="John" />
            <Counter />
          </div>
        );
      }
  
      // Render the main App to the root div
      ReactDOM.render(<App />, document.getElementById('root'));