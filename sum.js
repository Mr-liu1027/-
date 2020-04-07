function sum(...args){
  const result = args.reduce((previous, current) => {
    return previous + current
  }, 0);
  return result
}
module.exports = sum;


