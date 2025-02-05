import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import PasswordManagment from "./pages/PasswordManagment";
import UserProfile from "./pages/UserProfile";
import About from "./pages/about";
import Sidebar from "./components/sidebar";
import PasswordDetails from "./pages/passwordDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <ContentWithSidebar />
      </div>
    </Router>
  );
}

function ContentWithSidebar() {
  const location = useLocation();

  // Pages où la barre latérale doit être visible
  const pagesWithSidebar = ["/dashboard", "/password-managment", "/user-profile", "/about", "/password/:id"];

  const isSidebarVisible = pagesWithSidebar.includes(location.pathname);

  return (
    <div className="content">
      {isSidebarVisible && <Sidebar />}
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/password/:id" element={<PasswordDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/password-managment" element={<PasswordManagment />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
