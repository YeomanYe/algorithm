/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length;
    let ans = 0;
    let spare = 0;
    let min = Infinity;
    for(let i = 0;i < gas.length;i++) {
        spare += gas[i] - cost[i];
        if (spare < min) {
            min = spare;
            ans = i;
        }
    }
    return spare < 0 ? -1 : (ans + 1) % len;
};

var canCompleteCircuit=function(gas,cost){
    const len=gas.length;
    let run=remain=0;
    let k=0;

    for(let i=0;i<len;i++){
        // run变量表示车辆在前i个加油站能够跑起来；remain表示全程预计算后油量和油耗差值
        // 只有remain大等于0，汽车才能跑完全程
        run+=gas[i]-cost[i];
        remain+=gas[i]-cost[i];

        // 说明车辆无法跑到第i+1加油站，因此需要重置车辆初始加油站索引
        // 并重新开始
        if(run<0){
            k=i+1;
            run=0;
        }
    }

    return remain<0 ?-1:k
}