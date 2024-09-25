import "./App.css";
import Download from "./pages/Download/Download";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import HowWorks from "./pages/HowWorks/HowWorks";
import LearnMore from "./pages/LearnMore/LearnMore";
import ManageMoney from "./pages/ManageMoney/ManageMoney";
import Trusted from "./pages/Trusted/Trusted";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <Trusted />
        <HowWorks />
        <ManageMoney />
        <LearnMore />
        <Download />
      </div>
      <Footer />
    </div>
  );
}

export default App;