function ArrayChallenge(strArr) {
    let width = 0;
    let height = 0;
    let str = strArr.join('');
    let xArr = new Set();
    let yArr = new Set();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === '(') {
            xArr.add(str[i]);
        } else if (str[i + 1] === ')') {
            yArr.add(str[i]);
        }
    }

    console.log('xArr', xArr, 'yArr', yArr)
}

console.log(ArrayChallenge(['(1 1)', '(1 3)', '(3 1)', '(3 3)'])) // 4
console.log(ArrayChallenge(['(0 0)', '(1 0)', '(1 1)', '(0 1)'])) // 1
