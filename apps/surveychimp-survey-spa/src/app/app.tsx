
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPageWithStars from './pages/SurveyPageWithStars';
import StartPage from './pages/StartPage';
import { Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const StyledApp = styled.div`
    // Your style here
`;

const TRACKING_ID = "G-B7987J32K9"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <StyledApp>
      <Routes>

        <Route
          path="/survey/:surveyId"
          element={<SurveyPageWithStars />}
        />

        <Route
          path="/"
          element={<StartPage />} />
      </Routes>
    </StyledApp>
  );

}


export default App;
