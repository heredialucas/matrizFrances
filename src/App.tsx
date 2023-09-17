import "./App.css";
import matrizEng from "../data.js";

function App() {
  return (
    <div className="App">
      <h1>English</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Pronombre</th>
            <th>Pasado</th>
            <th>Presente</th>
            <th>Futuro</th>
            <th>Complemento</th>
            <th>Sustantivo</th>
          </tr>
        </thead>
        <tbody>
          {matrizEng.map((user, index) => {
            return (
              <tr key={index}>
                <th>{user.pronombre}</th>
                <th>{user.pasado}</th>
                <th>{user.complementario}</th>
                <th>{user.sustantivo}</th>
              </tr>
            );
          })}
          {matrizEng.map((user, index) => {
            return (
              <tr key={index}>
                <th>{user.pronombre}</th>
                <th>{user.presente}</th>
                <th>{user.complementario}</th>
                <th>{user.sustantivo}</th>
              </tr>
            );
          })}
          {matrizEng.map((user, index) => {
            return (
              <tr key={index}>
                <th>{user.pronombre}</th>
                <th>{user.futuro}</th>
                <th>{user.complementario}</th>
                <th>{user.sustantivo}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
