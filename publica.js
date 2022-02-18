function maxTickets(tickets) {
    let number = 0;
    let count = 0;
    let sorted = tickets.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (Math.abs(sorted[i], sorted[i - 1]) === 0 || Math.abs(sorted[i], sorted[i - 1]) === 1) {
                count++;
                number = Math.max(count, number);
            } else {
                count = 0;
            }
        }
    }
    return number;
}

function countHighlyProfitableMonths(stockPrices, k) {
    // Write your code here
    let count = 0;
    let currCount = 0;
    for (let i = 1; i < stockPrices.length; i++) {
        for(let j = i; j < i + 2; j++) {
            if (stockPrices[j] > stockPrices[j - 1]) {
                currCount++;
                if(currCount === k) {
                    count++;
                }
            }
        }
    }
    return count;
}

// SELECT name, rides.distance FROM USERS
// INNER JOIN RIDES ON USERS.id = RIDES.user_id
// ORDER BY rides.distance DESC, name ASC
// LIMIT 100;
