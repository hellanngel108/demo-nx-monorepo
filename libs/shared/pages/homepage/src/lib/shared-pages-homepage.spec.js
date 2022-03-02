import { render } from '@testing-library/react';
import Homepage from './shared-pages-homepage';
describe('SharedPagesHomepage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Homepage />);
    expect(baseElement).toBeTruthy();
  });
});
