const computeFees = require('../fees');

describe('computeFees', () => {
  test('bkash app', () => {
    const res = computeFees('bkash', 'app', 1000);
    expect(res.charge).toBe('18.5 BDT');
    expect(res.agentFees).toBeCloseTo(18.5);
    expect(res.atmFees).toBeCloseTo(14.9);
  });

  test('bkash ussid', () => {
    const res = computeFees('bkash', 'ussid', 1000);
    expect(res.charge).toBe('18.5 BDT');
    expect(res.agentFees).toBeCloseTo(18.5);
    expect(res.atmFees).toBeCloseTo(14.9);
  });

  test('nagad app', () => {
    const res = computeFees('nagad', 'app', 1000);
    expect(res.charge).toBe('12.5 BDT');
    expect(res.agentFees).toBeCloseTo(12.5);
    expect(res.atmFees).toBe("Can't withdraw via USSD");
  });

  test('nagad ussid', () => {
    const res = computeFees('nagad', 'ussid', 1000);
    expect(res.charge).toBe('15.0 BDT');
    expect(res.agentFees).toBeCloseTo(15.0);
    expect(res.atmFees).toBe("Can't withdraw via USSD");
  });

  test('rocket app', () => {
    const res = computeFees('rocket', 'app', 1000);
    expect(res.charge).toBe('16.7 BDT');
    expect(res.agentFees).toBeCloseTo(16.7);
    expect(res.atmFees).toBeCloseTo(9);
  });

  test('rocket ussid', () => {
    const res = computeFees('rocket', 'ussid', 1000);
    expect(res.charge).toBe('16.7 BDT');
    expect(res.agentFees).toBeCloseTo(16.7);
    expect(res.atmFees).toBeCloseTo(9);
  });

  test('upay app', () => {
    const res = computeFees('upay', 'app', 1000);
    expect(res.charge).toBe('14.0 BDT');
    expect(res.agentFees).toBeCloseTo(14);
    expect(res.atmFees).toBeCloseTo(8);
  });

  test('upay ussid', () => {
    const res = computeFees('upay', 'ussid', 1000);
    expect(res.charge).toBe('10.0 BDT');
    expect(res.agentFees).toBeCloseTo(14);
    expect(res.atmFees).toBeCloseTo(8);
  });
});
