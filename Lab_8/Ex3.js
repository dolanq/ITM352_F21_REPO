require("./products_data.js"); 

 var num_products = 5;

    for (let i = 1; eval("typeof name"+i) != 'undefined'; i++ ) {
      if(i > num_products/2) {
        console.log("Don't ask for anything else!");
        process.exit() 
      }
      if(i > 0.25*num_products && i < 0.75*num_products) {
        console.log(`item #${i} is sold out!`);
        continue;
      }
      console.log(`${i}. ${eval('name' + i)}`);
    }
    console.log(`That's all we have! ${i}`);
    