import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
