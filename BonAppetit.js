function bonAppetit(bill, k, b) {
   // Write your code here
 let arrsum = bill.reduce((acc,item)=>(acc + item), 0)
 let arr_owe = arrsum/2
 let arrfinalsum = (arrsum - bill[k])/2
   if (b== arrfinalsum) {
       console.log('Bon Appetit')
   }
    else if (b== arr_owe) {
        console.log(arr_owe - arrfinalsum)
    }
}
