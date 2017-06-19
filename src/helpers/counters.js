
const counterMessages = (function(num){
    var count =0;
    return function(num){
        count = num!==undefined ? num : count;
        return count++;
    }
}()) ;


export default counterMessages
