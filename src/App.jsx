import "./App.css";
import ControlledField from "./components/ControlledField";
import FormAction from "./components/FormAction";
import UncontrolledField from "./components/UncontrolledField";

function App() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-4">
      <FormAction></FormAction>
      <ControlledField></ControlledField>
      <UncontrolledField></UncontrolledField>
    </div>
  );
}

export default App;
