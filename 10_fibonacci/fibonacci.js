const fibonacci = function(pos) {
    pos = Number(pos);
    if(!(pos === NaN)) {
        if(pos == 1 || pos == 2) {
            return 1;
        } else  if(pos >= 3){
            current = 1;
            let last = 1;
            for(let i=3; i<=pos; i++) {
                let prevCurrent = current;
                current = current + last;
                last = prevCurrent;
            }
            return current;
        } else {
            return "OOPS";
        }
    }
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
