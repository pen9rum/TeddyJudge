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
          <Route path="/contestResult/:param" element={<ContestResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;