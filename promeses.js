let promessa1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("A promessa foi concluida!!");
   }, 2000);
}); //primeira promessa

let promessa2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      reject("A promessa não foi concluida!!");
   }, 2000);
}); //segunda promessa
promessa2
   .then((resultado) => {
      console.log(resultado);
   })
   .catch((error) => {
      console.log(error);
   });
promessa1
   .then((resultado) => {
      console.log(resultado);
   })
   .catch((error) => {
      console.log(error);
   });
