import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreList from "./component/StoreList";
import StoreDetails from "./component/StoreDetails";
import Header from "./component/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/store" element={<StoreList />} />
          <Route exact path="/storedetail/:id" element={<StoreDetails />} />
          <Route>404 Not found !!s</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
