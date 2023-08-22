// o que sao vetores ou arrays

/* // como declarar um array
let array = ['string', 1, true];
console.log(array);
 */
// pode guardar varios tipos de dados
let array = ["string", 1, true, [array1], [array2], [array3], [array4], [array5]]
console.log(array[0])

// forEach
array.forEach(function(item, index){console.log(item, index)})

array.push('novo item');
console.log(array)

