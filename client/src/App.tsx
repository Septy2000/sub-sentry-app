// App.tsx
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import DashboardPage from "./pages/DashboardPage/DashboardPage";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                {/* <Route path="login" element={<LoginPage />} />
                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                /> */}
            </Route>
        </Routes>
    );
};

export default App;
