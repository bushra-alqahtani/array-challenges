function reverse(arr) {
    // your code here
var arr2=[];
for(var i=arr.length;i>0;i--){
    arr2.push(arr.pop());


}
arr=arr2;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
