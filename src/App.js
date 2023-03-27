import "./App.css";
// import Icons from "./Components/Icons";
import MainRoute from "./MainRoutes/MainRoute";
import NavBar from "./Pages/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar id="nav-menu" />
      <hr />

      {/* <Icons /> */}
      <MainRoute />
    </div>
  );
}

export default App;
