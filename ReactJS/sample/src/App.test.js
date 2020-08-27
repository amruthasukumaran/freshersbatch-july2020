import {  total } from './App';

const add = jest.fn(() => 3);


test('add' , () => {
  expect(add(1,2)).toBe(3);
 // expect(add(2,2)).toBe(4);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledTimes(1, 2);
});





// test('total',() => {
//   expect(total(5, 20)).toBe('$25');
// })