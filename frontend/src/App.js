import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './components/Auth/AuthPage';
import HomePage from './components/Home/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import HomeworkPage from './components/Homework/HomeworkPage';
import ProblemPage from './components/Problem/ProblemPage';
import ResultPage from './components/Result/ResultPage';
import SettingPage from './components/Setting/SettingPage';
import CoursePage from './components/Course/CoursePage';
import ContestPage from './components/Contest/ContestPage';
import ContestListPage from './components/Contest/ContestListPage';
import ContestResultPage from './components/Contest/ContestResultPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/homework" element={<ProtectedRoute />}>
              <Route index element={<HomeworkPage />} />
            </Route>
            <Route path="/problem" element={<ProtectedRoute />}>
              <Route index element={<ProblemPage />} />
            </Route>
            <Route path="/result" element={<ProtectedRoute />}>
              <Route index element={<ResultPage />} />
            </Route>
            <Route path="/setting" element={<ProtectedRoute />}>
              <Route index element={<SettingPage />} />
            </Route>
            <Route path="/course" element={<ProtectedRoute />}>
              <Route index element={<CoursePage />} />
            </Route>
            <Route path="/contest" element={<ProtectedRoute />}>
              <Route index element={<ContestPage />} />
            </Route>
            <Route path="/contestList/:param" element={<ProtectedRoute />}>
              <Route index element={<ContestListPage />} />
            </Route>
            <Route path="/contestResult/:param" element={<ProtectedRoute />}>
              <Route index element={<ContestResultPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
