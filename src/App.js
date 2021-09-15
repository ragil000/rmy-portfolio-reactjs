import "./index.css";

// components
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <Content />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
