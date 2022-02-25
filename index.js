function palindrom(string) {
  string = string.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrom("azZAba"));
console.log(palindrom("azaasassasdvwZA"));
console.log(palindrom("azZAa"));
console.log(palindrom("azZA"));
console.log(palindrom("abcz"));
