import { useState } from "react";
import "./App.css";
import SingUpForm from "./components/SignUpForm";
import Authenitcate from "./components/Authenitcate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SingUpForm token={token} setToken={setToken} />
      <Authenitcate token={token} setToken={setToken} />
    </>
  );
}

export default App;