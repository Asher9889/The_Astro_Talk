// routes.tsx
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Blog, Dashboard, Home, KundliGenerate, TalkToAstrologer } from "./pages";
import { CertifiedAstrologer } from "./pages/CertifiedAstrologer/CertifiedAstrologer";
import { BlogDetail, ConsultationForm, SignUpForm } from "./components";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

// 🔒 Route Guards
const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/register" replace />;
};

const GuestRoute = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

//  Route Config
const routesData = [
  { path: "/", element: <Home />, guest: true},
  { path: "/register", element: <Login />, guest: true },
  { path: "/sign-up", element: <SignUpForm />, guest: true },
  { path: "/generate-kundli", element: <KundliGenerate /> },
  { path: "/certified_astro", element: <CertifiedAstrologer /> },
  { path: "/chat_with_astrologer", element: <ConsultationForm /> },
  { path: "/talk_to_astrologer", element: <TalkToAstrologer />, protected: true},
  { path: "/astrology-insight", element: <Blog />},
  { path: "/astrology-insight/:id", element: <BlogDetail />},
  { path: "/dashboard", element: <Dashboard />, protected: true },
];

function Routing() {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        {routesData
          .filter((r) => r.protected)
          .map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
      </Route>

      {/* Guest Routes */}
      <Route element={<GuestRoute />}>
        {routesData
          .filter((r) => r.guest)
          .map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
      </Route>

      {/* Public Routes */}
      {routesData
        .filter((r) => !r.protected && !r.guest)
        .map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
    </Routes>
  );
}

export default Routing;
