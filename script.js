const chooseOptimalDistance = (t, k, ls) => {
   if (k < 1 || t <= 0 || ls.length < k) {
       return null
   }
   const result = [[]]

    for (let i = 0; i < ls.length; i++) {
        let arr = [...result]
        for (let j = 0; j < arr.length; j++) {
            result.push(arr[j].concat(ls[i]))
        }
    }

   return result.filter(a => a.length == k)
       .map(arr => arr.reduce((a,b) => a + b), 0)
       .filter(item => item < t )
       .sort((a,b) => b-a)[0] || null
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61, 62, 63, 64])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null

//t - расстояние
//k - города
//ls - расстояния между
