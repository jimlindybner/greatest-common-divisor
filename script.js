window.onload = () => {
    // handles;
    const input1 = document.querySelector("#num1");
    const input2 = document.querySelector("#num2");
    const btnSubmit = document.querySelector("#formSubmit");
    const output = document.querySelector("#output");
    
    // function: greatest common denominator
    function twoNumGCD(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          let t = y;
          y = x % y;
          x = t;
        }
        
        output.innerHTML = `${x}`;
      }

    // call function
    btnSubmit.addEventListener("click", (event) => {
      // prevent form submission
      event.preventDefault();
      // variables: input values
      let input1Val = parseInt(input1.value);
      let input2Val = parseInt(input2.value);
      //call twoNumGCD function
      twoNumGCD(input1Val,input2Val);
    });
}