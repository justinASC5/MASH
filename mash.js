function mash(){
    if(process.argv[5]){
        return `You will live in a ${getHome()}, and you will have ${getChildrenCount()} kids, and you'll drive a ${getCar()} with an annual salary of $${getSalary()}, and will live for ${getLife()} years!`;
    }
    else{
        return "You didn't input anything or didn't complete input";
    }
}

function getHome(){
    let hInput = process.argv[2];
    let arr = ['Mansion', 'Apartment', 'Shack', 'House', 'Under a bridge'];
    arr.push(hInput);
    let indx = Math.floor(Math.random() * arr.length);
    return arr[indx];
}

function getChildrenCount(){
    let arr2 = [];
    let rand = Math.floor(Math.random() * 101);
    let cInput = process.argv[3];
    arr2.push(rand, cInput);
    let indx2 = Math.floor(Math.random() * 2);
    return arr2[indx2];
}

function getCar(){
    let arr3 = ['Lamborghini', 'Bugatti', 'Koenigsegg', 'Mclaren', 'Audi'];
    let carInput = process.argv[4];
    arr3.push(carInput);
    let indx3 = Math.floor(Math.random() * arr3.length);
    return arr3[indx3];
}

function getSalary(){
    let arr4 = [];
    let rand2 = Math.floor((Math.random() * Number.MAX_SAFE_INTEGER) - Number.MIN_SAFE_INTEGER);
    let sInput = process.argv[5];
    arr4.push(rand2, sInput);
    let indx4 = Math.floor(Math.random() * 2);
    return arr4[indx4];
}

function getLife(){
    let arr5 = [];
    let rand3 = Math.floor((Math.random() * 101));
    let lInput = process.argv[6];
    arr5.push(rand3, lInput);
    let indx5 = Math.floor(Math.random() * 2);
    return arr5[indx5]; 
}
console.log(mash());

