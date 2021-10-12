require("./products_data.js"); 

 var num_products = 5;

    let i = 1;

    while (i <= num_products/2) {
      console.log(`${i}. ${eval('name' + i)}`);
      i++;
    }
    console.log(`That's all we have!`);
    