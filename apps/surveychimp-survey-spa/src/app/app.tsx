
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPageWithStars from './pages/SurveyPageWithStars';

import StartPage from './pages/StartPage';


import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  console.log('process.env.NX_RATING_STARS_FEATURE',  process.env.NX_RATING_STARS_FEATURE);

  return (
    <StyledApp>
      <Routes>

        {process.env.NX_RATING_STARS_FEATURE === "true" ? <Route
          path="/survey/:surveyId"
          element={<SurveyPageWithStars />}
        /> : <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />}

        <Route
          path="/"
          element={<StartPage />} />
      </Routes>
    </StyledApp>
  );

}


export default App;
