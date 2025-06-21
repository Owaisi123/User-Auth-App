import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">User Auth</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">
              Signup
            </Link>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <Link to="/dashboard" className="text-blue-500 hover:underline">
              Dashboard
            </Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
