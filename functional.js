let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


//Exercise - a function that maps the states and returns an actual urls

    //function url(elements) {
    //  return elements.map(element => urlify(`https://example.com/${element}`));
    //}

    //console.log(url(states));


//FILTERS

//singles: Imperative version

function impSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1){
      singles.push(element);
    }
  });
  return singles;
}
console.log(impSingles(states));

//singles: Functional version
function funSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(funSingles(states));




//Exercise

function check(elements) {
  return elements.filter(element => element.split(/\s+/).length > 1);
}
console.log(check(states));

function checkAlt(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(checkAlt(states));


//REDUCE

let numbers = [1,2,3,4,5,6,7,8,9,10];

//sum: Imperative solution
function impSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(impSum(numbers));

//sum: functional solution
function funSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(funSum(numbers));

//lengths imperative
function impLength(elements) {
  let lengths ={};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(impLength(states));


//lengths functional
function funLength(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;
  }, {});
}
console.log(funLength(states));
