import "./App.css";
import ControlledField from "./components/ControlledField";
import FormAction from "./components/FormAction";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <FormAction></FormAction>
      <ControlledField></ControlledField>
    </div>
  );
}

export default App;
