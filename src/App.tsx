import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Test Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Test Button</Button>
    </div>
  );
}

export default App;
