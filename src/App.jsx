import "./App.css";
import Download from "./pages/Download/Download";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import HowWorks from "./pages/HowWorks/HowWorks";
import LearnMore from "./pages/LearnMore/LearnMore";
import ManageMoney from "./pages/ManageMoney/ManageMoney";

function App() {
  return (
    <div>
      <div>
        <Header />
        <HowWorks />
        <ManageMoney />
        <LearnMore />
        <Download />
        <Footer />
      </div>
      
    </div>
  );
}
export default App;
