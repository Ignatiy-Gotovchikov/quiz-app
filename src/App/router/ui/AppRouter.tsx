import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageSelectionPage } from '../../../pages/LanguageSelectionPage';
import { GenderSelectionPage } from '../../../pages/GenderSelectionPage';
import { AgeSelectionPage } from '../../../pages/AgeSelectionPage';
import { HateSelectionPage } from '../../../pages/HateSelectionPage';
import { FavoriteTopicsPage } from '../../../pages/FavoriteTopicsPage';
import { LoadingPage } from '../../../pages/LoadingPage';
import { EmailPage } from '../../../pages/EmailPage';
import { ResultsPage } from '../../../pages/ResultsPage';

interface AppRouterProps {
  setCurrentQuestion: (question: number) => void;
}

const AppRouter = ({ setCurrentQuestion }: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quiz/1" replace />} />
      <Route
        path="/quiz/1"
        element={<LanguageSelectionPage setCurrentQuestion={setCurrentQuestion} />}
      />
      <Route
        path="/quiz/2"
        element={<GenderSelectionPage setCurrentQuestion={setCurrentQuestion} />}
      />
      <Route
        path="/quiz/3"
        element={<AgeSelectionPage setCurrentQuestion={setCurrentQuestion} />}
      />
      <Route
        path="/quiz/4"
        element={<HateSelectionPage setCurrentQuestion={setCurrentQuestion} />}
      />
      <Route
        path="/quiz/5"
        element={<FavoriteTopicsPage setCurrentQuestion={setCurrentQuestion} />}
      />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/results" element={<ResultsPage />} />

    </Routes>
  );
};

export default AppRouter;
