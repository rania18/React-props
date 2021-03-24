import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/profile";

import raniaImg from "./Profile/images/rania.jpg";
function App() {
  const handleName = (fullName) => {
    alert(`Hello I am ${fullName}`);
  };
  return (
    <div className="App">
      <div className="profilWrapper">
        <div className="profilPhoto">
          <img className="img" src={raniaImg} />
        </div>
        <Profile
          fullName="Rania Hamdi"
          profession="Computer science and software engineer"
          bio="I am Rania, a software engineer from Tunisia, living in Sousse."
          handleName={handleName}
        ></Profile>
      </div>
    </div>
  );
}

export default App;
