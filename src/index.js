module.exports = function multiply(first, second) {
    var A =[first.length],
        B=[second.length],
        C=[],
        leng = 0,
        str = '1',
        l = 0;
   // console.log(str);
    for (var i = 0; i < first.length; i++) {
        A[i]=first[first.length-i-1]-'0';
        //console.log(A[i]);     
    }
    for (var i = 0; i < second.length; i++) {
        B[i]=second[second.length-i-1]-'0';
       // console.log(B[i]);     
    } 

    leng = first.length+second.length - 1;
    //console.log(leng);
    l = leng;
    C = new Array(leng);
    J = new Array(leng);
    for (var j = 0; j < leng; j++) {
        C[j] = 0;
    }
   // console.log(C);

    for (var i = 0; i < first.length; i++) {
        for (var j = 0; j < second.length; j++) {
            C[i + j] += A[i] * B[j];    
        }      
    }
   // console.log(C);

    for (var i = 0; i < leng - 1 ; i++) {
        C[i + 1] += C[i] / 10;
        C[i] %= 10;
    }
    //console.log(C);
    
    while(C[leng] == 0){
        leng--;
    }
   // console.log(C);
    for (var i = 0; i < C.length ; i++) {  
        J[C.length - i - 1] = Math.floor(C[i]);
        //console.log(J);
    }

    str = J.join('');
    //console.log(str);
    return str;
}
