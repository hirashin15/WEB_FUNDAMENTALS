// Predict 1
// var | val
// num | 0 -> 1 -> 2 ...
// Output = 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
for(var num = 0; num < 15; num++){
  console.log(num);
}

// Predict 2
// var | val 
//  i  | 1 -> 3 . . .
//  console | nothing, 3
//  Output = 3,6,9 
for(var i = 1; i < 10; i+=2){
  if(i % 3 == 0){
      console.log(i);
  }
}

// Predict 3
// var | val 
//  j  | 1 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8-> 10 -> 11 -> 12 -> 14 -> 15 -> 16 -> 17
//  console | 1, 2, 4, 5, 7, 10, 11, 14, 16
//  Output = 1,2,4,5,7,10,11,14,16
for(var j = 1; j <= 15; j++){
  if(j % 2 == 0){
      j+=2;
  }
  else if(j % 3 == 0){
      j++;
  }
  console.log(j);
}