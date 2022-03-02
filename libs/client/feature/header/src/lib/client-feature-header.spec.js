import { render } from '@testing-library/react';
import Header from './client-feature-header';
describe('ClientFeatureHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
