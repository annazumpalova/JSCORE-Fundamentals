function cityMarket(strArr) {
    let summary=new Map();
    for(let row of strArr){
        let [town, product, sales]=row.split(/\s*->\s*/);
        sales.split(/\s*:\s*/).reduce((a,b) =>Number(a*b));
        if(!summary.has(town)){
            summary.set(town, new Map());
        }
        if(!summary.get(town).has(product)){
            summary.get(town).set(product, 0);
        }
        let oldSales=summary.get(town).get(product);
        summary.get(town).set(product, oldSales + sales);
    }
   // for(let [town,products] of summary){
   //     console.log(`Town - ${town}`);
   //     for(let [product, sales] of products){
   //         console.log(`$$$${product} : ${sales}`);
   //     }
    }
    //ili
   // [...summary].forEach(([town,products]) =>{
       // console.log(`Town - ${town}`);
//[...products].forEach(([product, sales]) => console.log(`$$$${product} : ${sales}`))
    //    }
//    )
}
cityMarket([
    ' Sofia -> Laptops HP -> 200 : 2000',
  'Sofia -> Raspberry -> 200000 : 1500',
'Montana -> Oranges -> 200000 : 1',
'Montana -> Cherries -> 1000 : 0.3',
'Sofia -> Audi Q7 -> 200 : 100000'
])

function cityMarkets(sales) {


    let townsWithProducts = new Map();


    for (let sale of sales) {


        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);


        let [quantity, price] = quantityPrice.split(/\s*:\s*/);


        if (!townsWithProducts.has(town))


            townsWithProducts.set(town, new Map());


        let income = quantity * price;


        let oldIncome = townsWithProducts.get(town).get(product);


        if (oldIncome) income += oldIncome;


        townsWithProducts.get(town).set(product, income);

    }
    for(let [town,products] of townsWithProducts){
        console.log(`Town - ${town}`);
        for(let [product, sales] of products){
            console.log(`$$$${product} : ${sales}`);
        }
    }
}