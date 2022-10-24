import { render } from '@testing-library/react';

import SurveychimpUi from './surveychimp-ui';

describe('SurveychimpUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveychimpUi />);
    expect(baseElement).toBeTruthy();
  });
});
