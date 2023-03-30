import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreList from "./component/StoreList";
import StoreDetails from "./component/StoreDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/store" element={<StoreList />} />
          <Route exact path="/store/:id" element={<StoreDetails />} />
          <Route>404 Not found !!s</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
