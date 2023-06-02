const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'
const userLocation = 'RSA'
let shipping = null //any
let currency = '$'
const customers = 1
let shoes = 300 * 1; //300
let toys = 100 * 5; //500
let shirts = 150 * NONE_SELECTED; //0
let batteries = 35 * 2; //70
let pens = 5 * NONE_SELECTED; //0
let totalPrice = shoes + toys + shirts + batteries + pens  ;


 if (userLocation === 'RSA') {
    shipping = 400
     currency = 'R' 
    
 } else if (userLocation === 'NAM') {
     shipping = 600 
     currency = '$'
   
 }  else if (userLocation === 'NK'){
    console.log(BANNED_WARNING);
 } else {
     shipping = 800;
     currency = '$'
 }


 //Function 1
 if (totalPrice >= 1000 &&  customers === 1) {
    if (userLocation === 'RSA' || userLocation === 'NAM'){
        console.log('shipping is free')
        shipping = 0;
    }
 	}


 if (shipping === 0 && customers !== 1) { 
     console.log(FREE_WARNING) 
    }
    

 //Function 2 
 console.log('price:', currency, totalPrice + shipping);


