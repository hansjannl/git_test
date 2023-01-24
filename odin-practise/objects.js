const multiply = function(z) {
    let x = 1;
    for (let i = 0; i<z.length; i++){
    let y = x*z[i];
      x += y;
    }
      return x;
  };


  console.log(multiply([1,2,3,4,5]));