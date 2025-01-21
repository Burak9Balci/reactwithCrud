import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "routes/AppRoutes";

function App() {
  return (
    <main>
      <Router>
        <AppRoutes />
      </Router>
    </main>
  );
}

export default App;
