import classes from "./App.module.css"
import Timer from "./Timer";

function App() {
  return <div className={classes.container}>
    <h2 className={classes.header}>We're launching soon</h2>
    <Timer></Timer>
  </div>;
}

export default App;
