import { greet } from './myFunction';

describe('My function', () => {
  it('should greet', () => {
    const expectedName = 'Alex';
    const result = greet(expectedName);

    expect(result).toContain(expectedName);
  });
});
