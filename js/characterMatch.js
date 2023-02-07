exports.isCharacterMatch = function(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  exceptions = [" ", "-", ".", "_", ",", "!"]
  let str1obj = {}
  for (let i=0; i<str1.length; i++) {
    if (exceptions.includes(str1[i])){
      continue
    }
    str1[i] in str1obj ? str1obj[str1[i]] += 1 : str1obj[str1[i]] = 1
  }
  for (let i=0; i<str2.length; i++) {
    if (exceptions.includes(str2[i])){
      continue
    }
    if (!(str2[i] in str1obj)) {
      return false
    }
    str1obj[str2[i]] -= 1;
    if (str1obj[str2[i]] < 0) {
      return false
    }
  }
  return true
};

exports.anagramsFor = function(word, listOfWords) {
  ans = [];
  listOfWords.forEach((option) => {
    if (this.isCharacterMatch(word, option)) {
      ans.push(option)
    }
  })
  return ans
};

