import { render } from '@testing-library/react';
import SharedFeatureFooter from './shared-feature-footer';
describe('SharedFeatureFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFeatureFooter />);
    expect(baseElement).toBeTruthy();
  });
});
