import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SurveychimpUiProps {}

const StyledSurveychimpUi = styled.div`
  color: pink;
`;

export function SurveychimpUi(props: SurveychimpUiProps) {
  return (
    <StyledSurveychimpUi>
      <h1>Welcome to SurveychimpUi!</h1>
    </StyledSurveychimpUi>
  );
}

export default SurveychimpUi;
