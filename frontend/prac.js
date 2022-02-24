let arr = [1, 2, 3, 1, 2];
arr.sort((a, b) => a-b);

function find(arr){
   let obj = {};
   for(let i = 0 ; i < arr.length ;i++){
       if(obj[arr[i]] == undefined){
           obj[arr[i]] = 1
       }else{
           obj[arr[i]] =  obj[arr[i]] + 1 
       }
   }
   for(key in obj){
       if(obj[key] == 1){
           console.log(key);
       }
   }
 
}

find(arr)







