import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import HomeworkPage from './components/HomeworkPage';
import ProblemPage from './components/ProblemPage';
import ResultPage from './components/ResultPage';
import SettingPage from './components/SettingPage';
import CoursePage from './components/CoursePage';
import ContestPage from './components/ContestPage';
import ContestListPage from './components/ContestListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homework" element={<HomeworkPage />} />
          <Route path="/problem" element={<ProblemPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/contest" element={<ContestPage />} />
          <Route path="/contestList/:param" element={<ContestListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;