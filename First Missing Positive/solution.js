/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function (nums) {
    const MapNumber = _.countBy(nums);
    for(let j = 1; true; j++){
        if(!MapNumber[j]) return j;
    }
};
