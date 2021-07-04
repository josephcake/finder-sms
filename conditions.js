const c = require('./constant')

const joinWithIdx = (arr) =>{
  return arr.map(function (val, i) {
      let str = `${i+1}. ${val}`
      return str
    })
    .join('\n');
}
const checkBody = (e) =>{
  e = e.toUpperCase()
  switch (e) {
    case c.PUBLIC:
      return joinWithIdx(c.PUBLIC_ALL)
      break;
    case c.FOOD:
      return joinWithIdx(c.FOOD_ALL)
      break;
    case c.SCENERY:
      return joinWithIdx(c.SCENERY_ALL)
      break;
    case c.SPORT:
      return joinWithIdx(c.SPORT_ALL)
      break;
    default:
      let all = joinWithIdx(c.CONSTANT_ALL)
      return `. \nHi, you can select one of the following to see additional choices: ${all}`
  }
}



module.exports = {checkBody}