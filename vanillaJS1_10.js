
const yunkukinfo = {
  name: "윤국",
  age: 26,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LORT", "Oldboy"],
  favFood: [
    {
      name: "Kimchi", 
      fatty: false 
    },
   {
     name : "Cheese burger",
     fatty : true
    } 
  ]
}

console.log(yunkukinfo.favFood[0].fatty);
alert(yunkukinfo.favFood[0].name);

