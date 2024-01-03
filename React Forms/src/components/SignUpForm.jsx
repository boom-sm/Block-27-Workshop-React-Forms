import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";

const SingUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data.token);
      setToken(data.token);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h2>Sing Up</h2>
      {error && <p>{error}</p>}

      <form className="singUpForm" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingUpForm;