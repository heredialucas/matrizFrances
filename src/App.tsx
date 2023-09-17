import "./App.css";
import matrizFrances from "../data.js";
function App() {
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Pronombre</th>
            <th>Verbo</th>
            <th>Accion</th>
            <th className="th1">Pronunciacion</th>
            <th className="th1">Traducción</th>
          </tr>
        </thead>
        <tbody>
          {matrizFrances.map((user, index) => {
            return (
              <tr key={index}>
                <th>{user.pronombre}</th>
                <th>{user.verbo}</th>
                <th>{user.accion}</th>
                <th>{user.pronunciacion}</th>
                <th>{user.traduccion}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
