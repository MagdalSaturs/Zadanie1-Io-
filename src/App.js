import "./App.css";
import JoiInput from "./JoiInput";
import Joi, { allow } from "joi";
import { useState } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [textValue, setTextValue] = useState("");

  return (
    <div className="App">
      <form>
        <JoiInput
          placeholder="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          schema={Joi.string()
            .email({ tlds: { allow: false } })
            .required()}
        />
        <JoiInput
          placeholder="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          schema={Joi.string().min(6).required()}
        />
        <JoiInput
          placeholder="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          schema={Joi.string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .required()}
        />
      </form>
    </div>
  );
};

export default App;
