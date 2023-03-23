import "./App.css";
import Currentweather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <Currentweather />
    </div>
  );
}

export default App;
