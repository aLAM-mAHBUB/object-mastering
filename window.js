var name = "Mahabub";
function add(num1, num2) {
    var result = num1 + num2;
    console.log("result", result);
    console.log("name inside", name);
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log("name outside", name);
var sum = add(12, 25);
console.log(sum);
