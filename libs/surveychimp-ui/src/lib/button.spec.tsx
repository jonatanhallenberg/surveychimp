import { render } from '@testing-library/react';
import Button from './button';

describe("Button", () => {
    it("should match snapshot", () => {
        const renderResult = render(<Button label="Klicka här!" />);
        expect(renderResult.baseElement).toMatchSnapshot();
    })
})