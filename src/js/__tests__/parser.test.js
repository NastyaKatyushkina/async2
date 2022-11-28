import { expect, test } from '@jest/globals';
import json from '../parser';
import read from '../reader';

test('', async () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const data = await read();
  const received = await json(data);
  expect(received).toEqual(expected);
});