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

 // Problem 04 - (Delete / Store)

var fileNames = [
    "result.pdf",
    "data.docs",
    "pdfData.jpg",
    "#exp.mp4",
    "docx.txt",
    "docx.xpdf",
    "slipdf.txt",
]

for( var i = 0; i<=fileNames.length; i++ ){
    var fileName = fileNames[i];
    
    if (fileName.startsWith('#') 
        || fileName.endsWith('.pdf') || fileName.endsWith('.docs')  ){
    
            console.log('Store');

        }else{
            console.log('Delete');
        }
}



// Problem 05 - ( PH Email Generator )

var student = { name: "jhankar", roll: 1014, department: "cse" };

var email = student.name + student.roll + "." + 
student.department + "@ph.ac.bd";

console.log(email);