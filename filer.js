const product=[
    {name:"redmi",brand:"xiami",price:40000 ,colo:"Green"},
     {name:"sas",brand:"sansume",price:30000 ,colo:"Black"},
      {name:"Iphne",brand:"Apple",price:140000 ,colo:"White"},
       {name:"Vivo",brand:"Vivo",price:44000 ,colo:"Blue"},

]
const result=product.filter(product =>product.brand==="Apple");
console.log(result);