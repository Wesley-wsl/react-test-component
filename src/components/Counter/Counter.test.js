import { render } from '@testing-library/react';
import Counter from './';

describe('Counter Component', () => {
  test('deve iniciar o título com o valor 0', () => {
    render(<Counter />);
  });
});
