import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import ProductDelivery from "./components/ProductDelivery";
import Certifications from "./components/Certifications";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import SidebarNav from "./components/SidebarNav";
import "./App.css";
import "./styles/Global.css";

function App() {
  return <div className="App"><NavBar /><SidebarNav /><main id="content"><Intro /><About /><Experience /><ProductDelivery /><Projects /><Certifications /></main><Credits /></div>;
}

export default App;
