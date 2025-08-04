// problem-01 (Divided the Asset)

var area = 800;
var sharableAsset = area/2;
console.log(sharableAsset);


// problem-02 (Cycle or Laptop)

var money = 10000;
if( money >= 25000){
    console.log('Laptop');
} else if (money >= 10000){
    console.log('Cycle');
}else{
    console.log('chocolate');
}

//  problem -03 ( Medicine Planner )

 let lastDay = 11;
 for( day = 1; day <= lastDay; day++ ){
    if( day % 6 === 0  ){
        console.log(day + " -medicine");
    } else{
        console.log(day + ' -rest');
    }
 } 

