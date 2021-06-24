/**
 * @param {number[]} height
 * @return {number}
 */

 var trap = function(height) {
    if (!height) return 0;
    var TotalWater = 0
    var LeftMaximum = 0
    const leftMaxes = height.map(currentElevation => { LeftMaximum = Math.max(LeftMaximum, currentElevation)
        return LeftMaximum
    })
    
    let RightMaxiumum = 0
    for(let k=height.length-1 ; k>=0; k--){
        const Height = height[k]
        RightMaxiumum = Math.max(Height, RightMaxiumum)
        const maxTrapableWater = Math.min(leftMaxes[k],RightMaxiumum)
        if(Height < maxTrapableWater) {
            TotalWater+= maxTrapableWater - Height
        }
    }   
    return TotalWater
};