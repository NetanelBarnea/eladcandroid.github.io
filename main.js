function useFetch(url, callback) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      callback(data);
      console.log(data);
    });
}

function callbackFunc(dataInFunc) {
  const input = document.querySelector("input");
  var value = input.value;
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = value * dataInFunc.rates.ILS;
}

var button = document.querySelector("button");
button.onclick = function () {
  useFetch("https://api.exchangeratesapi.io/latest", callbackFunc);
};

let imag = document.querySelector('img');
    const url = 'https://api.thecatapi.com/v1/images/search';

axios.get (url) .then (function(response){
    console.log (response.data[0].url);
    imag.src = response.data[0].url
});
