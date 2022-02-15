// climbStairs
let memo = {}
var climbStairs = function(n) {
    if (n === 0) return 1;
    if (!memo[n - 1]) memo[n - 1] = climbStairs(n - 1)
    return memo[n - 1] + (memo[n - 2] || 0)
};

// var climbStairs = function(n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n === 0) return 1;
//     if ( n < 0) return 0;
//     return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
// };


// contains duplicate
var containsDuplicate = function(nums) {
    let setter = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!setter.has(nums[i])) {
            setter.add(nums[i])
        } else {
            return true;
        }
    }
    return false;
};

// countBits
var countBits = function(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let bin = i.toString(2);
        for (let j = 0; j < bin.length; j++) {
            if (bin[j] == 1) count++
        }
        arr.push(count);
        count = 0;
    }
    return arr;
};

// middleNode
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};


// reverse linkedlist
var reverseList = function(head) {
    if (head === null) return head

    let prev = null;
    let curr = head;
    let next = curr.next;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
//     let prev = null;
//     let curr = head;

//     while (curr) {
//         [curr.next, prev, curr] = [prev, curr, curr.next];
//     }
//     return prev;
};


// contains duplicate
var containsDuplicate = function(nums) {
    const setter = new Set(nums);
    return setter.size !== nums.length;
};

// find duplicate
var findDuplicate = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    let curr;
    let next;
    for (let i = 0; i < sorted.length; i++) {
        curr = sorted[i];
        next = sorted[i + 1];
        if (curr === next) {
            return curr;
        }
    }
};

// find duplicates
var findDuplicates = function(nums) {
    const setter = new Set();
    const sol = [];

    for (let i = 0; i < nums.length; i++) {
        if (!setter.has(nums[i])) {
            setter.add(nums[i])
        } else {
            sol.push(nums[i])
        }
    }
    return sol;
};

// product of array except self
var productExceptSelf = function(nums) {
    let sol = [];
    sol[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        sol[i] = sol[i - 1] * nums[i - 1];
    };

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        sol[i] *= right;
        right *= nums[i];
    }

    return sol;
};

// Maximum subarray
var maxSubArray = function(nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        sum = Math.max(sum, nums[i]);
    }

    return sum;
};


// isPalindrome
const reverse = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let starter = head;
    let length = 0;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++
    }

    let mid = reverse(slow);

    while (length) {
        length--;
        if (starter.val !== mid.val) return false;

        starter = starter.next;
        mid = mid.next;
    }

    return true;
};


// hasCycle
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        if (fast.next.next === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
};

// remove elements from a linked list
var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    let curr = head;
    let prev = dummy;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next
};
