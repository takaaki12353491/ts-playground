import { Greeter } from './string';

test('test', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Taro');
});