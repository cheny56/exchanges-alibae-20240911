
const get_random_float =( { min , max } )=> ( Math.random() * ( max  - min + 1)) + min

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports= {
  get_random_float ,
  getRandomInt
}
