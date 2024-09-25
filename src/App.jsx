import "./App.css";
import Download from "./pages/Download/Download";
import Header from "./pages/Header/Header";
import HowWorks from "./pages/HowWorks/HowWorks";
import LearnMore from "./pages/LearnMore/LearnMore";
import ManageMoney from "./pages/ManageMoney/ManageMoney";

function App() {
  return (
    <div>
      <Header />
      <HowWorks />
      <ManageMoney />
      <LearnMore />
      <Download />
    </div>
  );
}
export default App;
