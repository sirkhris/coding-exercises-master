/*Was given the ok to convert YAML file into JSON. Furthermore due to the direct nature
that is a JSON file, I didn't see the need to use the hotel_parse file.
*/
// describe HotelParser do
const _parser = require('../data/hotel.json');

//     it 'allows accessing via []' do
//       expect(subject['hotels'].last['rooms'].first['amenities'].last).to eq 'Pool'
let answer = 'Pool';
if (
  _parser.hotels[_parser.hotels.length - 1].rooms[0].amenities[
    _parser.hotels[_parser.hotels.length - 1].rooms[0].amenities.length - 1
  ] == answer
) {
  console.log('pass');
} else console.log('fail');

//     it 'allows accessing via []' do
//       expect(subject['hotels'].first['rooms'].first['amenities'].last).to eq 'Fitness'
answer = 'Fitness';
if (
  _parser.hotels[0].rooms[0].amenities[
    _parser.hotels[0].rooms[0].amenities.length - 1
  ] == answer
) {
  console.log('pass');
} else console.log('fail');

//     it 'allows accessing via method calls' do
//       expect(subject.hotels.last.rooms.first.amenities.last).to eq 'Pool'
answer = 'Pool';
if (
  _parser.hotels[_parser.hotels.length - 1].rooms[0].amenities[
    _parser.hotels[_parser.hotels.length - 1].rooms[0].amenities.length - 1
  ] == answer
) {
  console.log('pass');
} else console.log('fail');

//     it 'allows accessing via method calls' do
//       expect(subject.hotels.first.rooms.first.amenities.last).to eq 'Fitness'
answer = 'Fitness';
if (
  _parser.hotels[0].rooms[0].amenities[
    _parser.hotels[0].rooms[0].amenities.length - 1
  ] == answer
) {
  console.log('pass');
} else console.log('fail');
