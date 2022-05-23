// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var myInit = {
//   method: "GET",
//   headers: myHeaders,
//   method: "POST",
//   body: '{"expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)"}',
// };

// var url = "http://api.mathjs.org/v4/";
// const myRequest = new Request(url, myInit);

// fetch(myRequest)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Ops! Houve um erro em nosso servidor.");
//     }
//   })
//   .then((response) => {
//     console.debug(response);
//     // ...
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function nome(name) {
  return Olá + name;
}
