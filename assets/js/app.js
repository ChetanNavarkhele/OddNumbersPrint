let cl = console.log;

const oddNumbers = ((n1, n2) => {
        let oddNumArray = [];
        while(n1<n2){
                if(n1%2 != 0){
                        oddNumArray.push(n1);
                }
                n1++
        }
        return oddNumArray;
})
cl(oddNumbers(1,10))