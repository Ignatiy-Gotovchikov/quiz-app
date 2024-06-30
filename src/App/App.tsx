import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from './router';
import { Header } from '../widgets/Header';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;
  const location = useLocation();

  const isQuizRoute = /^\/quiz\/\d+$/.test(location.pathname);

  return (
    <div className='app'>
      <div className='content-page'>
        {isQuizRoute && (
          <Header
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            setCurrentQuestion={setCurrentQuestion}
          />
        )}
        <AppRouter setCurrentQuestion={setCurrentQuestion} />
      </div>
    </div>
  );
};

export default App;
