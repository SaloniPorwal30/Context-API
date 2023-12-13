import "./App.css";
import UserInput from "./Components/UserInput";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <UserInput />
    </UserContextProvider>
  );
}

export default App;
