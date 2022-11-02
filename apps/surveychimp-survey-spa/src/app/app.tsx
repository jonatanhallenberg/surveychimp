
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <Routes>
        <Route
          path="/"
          element={<p>Här finns inget</p>} />
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
      </Routes>
    </StyledApp>
  );

}


export default App;
