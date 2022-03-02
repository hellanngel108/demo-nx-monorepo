import { render } from '@testing-library/react';
import HeaderLogo from './shared-ui-header-logo';
describe('SharedUiHeaderLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderLogo />);
    expect(baseElement).toBeTruthy();
  });
});
