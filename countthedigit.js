// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
    d = d.toString()
    arr = []
    for(i=0; i<=n; i++){
        num = i*i
        arr.push(num.toString())
    }

    counter = 0
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i], typeof arr[i])
        for(j=0; j<=arr[i].length-1; j++){
            // console.log(arr[i][j])
            if(arr[i][j] == d){
                counter++
            }
        }
    }
    console.log(`The number ${d}'s occurence is ${counter}`)
}
nbDig(10, 1)
console.log('=====')
nbDig(25, 1)
console.log('=====')
nbDig(25, 2)