import { renderHook, act } from '@testing-library/react-hooks';
import useCountdown from './index';

describe('useCountdown', () => {
  it('should count down from 5', async () => {
    const { result, waitForValueToChange } = renderHook(() => useCountdown(5));

    // counter
    expect(result.current[0]).toEqual(5);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(4);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(3);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(2);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(1);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(0);
  }, 10000);

  it('should reset with function', async () => {
    const { result, waitForValueToChange } = renderHook(() => useCountdown(2));

    // counter
    expect(result.current[0]).toEqual(2);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(1);
    await waitForValueToChange(() => result.current[0]);
    expect(result.current[0]).toEqual(0);

    act(() => {
      result.current[1](); // reset
    });
    expect(result.current[0]).toEqual(2);
  }, 5000);
});
