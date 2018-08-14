const highlight = (literals, ...values) => {
  let result='';
  console.log(values[0]);
  for (var i = 0; i < values.length; i++) {
    result+=literals[i]+`<span class="red">${values[i]}</span>`

  }
  return result+=literals[i];
  // return tmp1.replace(/\${+\w+}/g,'<span class="col"></span>');
}
// console.log(isSameSet('Hello, ${yourName}. I am ${myName}.');
console.log(highlight('Hello, ${yourName}. I am ${myName}.',[{a:'s'},{b:21}]));
