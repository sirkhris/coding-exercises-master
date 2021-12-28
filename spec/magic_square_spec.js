// describe MagicSquare do
import { MagicSquare } from '../code/magic_square.js';

//     context 'valid square 3x3' do
let square = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];

//       subject { MagicSquare.validate(square) }
let data = MagicSquare(square);

//       it { is_expected.to eq true }
let answer = true;
if (data == answer) console.log('pass');
else console.log('fail');
//     end

// context 'valid square 4x4' do
square = [
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1],
];

//   subject { MagicSquare.validate(square) }
data = MagicSquare(square);

//   it { is_expected.to eq true }
answer = true;
if (data == answer) console.log('pass');
else console.log('fail');
// end

// context 'invalid square 3x3' do
square = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//       subject { MagicSquare.validate(square) }
data = MagicSquare(square);

//       it { is_expected.to eq false }
answer = false;
if (data == answer) console.log('correct');
else console.log('wrong');
