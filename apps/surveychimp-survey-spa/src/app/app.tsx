
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPageWithStars from './pages/SurveyPageWithStars';

import StartPage from './pages/StartPage';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-249711198-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  console.log('process.env.NX_RATING_STARS_FEATURE',  process.env.NX_RATING_STARS_FEATURE);

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
