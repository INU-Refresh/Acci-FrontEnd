import { render } from '@testing-library/react';

import { ReasonIcon } from './reason-icon';

describe('ReasonIcon', () => {
  it('SVG 요소를 렌더링한다', () => {
    const { container } = render(<ReasonIcon />);
    const svg = container.querySelector('svg');

    expect(svg).not.toBeNull();
    expect(svg as SVGSVGElement).toBeInTheDocument();
  });
});

