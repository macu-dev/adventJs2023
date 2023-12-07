function findNaughtyStep(original, modified) {
  const originalArr = original.split('');
  const modifiedArr = modified.split('');
  const maxLenght = Math.max(originalArr.length, modifiedArr.length);
  
  for (let i = 0; i <= maxLenght -1; i++) {
    if(modifiedArr[i] !== originalArr[i]  ) 
      return (originalArr.length> modifiedArr.length) ? originalArr[i] : modifiedArr[i];
  }  
  return ''
}

module.exports = findNaughtyStep;