var arr = [1, 2, 5, 7, 5, 3];

const count = (arr) => {
    if(arr.length == 2){
        return 2
    }

    if(arr.length > 2){
        let up = 1;
        let down = 1;
        let temp = arr.length - 2;

        for (var i = 1; i <= arr.length; i++){
            up *= i
        }

        for (var i = 1; i <= temp; i++){
            down *= i
        }

        let count = up / (down * 2)

        return count
    }
}

const twosum = (count) => {
    let start_point = 0
    let temp_point = 0
    let increase = 0

    for (var i = start_point; i < count; i++){
        
        if(temp_point == arr.length - 1){
            temp_point = increase
            start_point++
            increase++
        }
        temp_point++

        console.log(start_point)
    }
}
 
const main = () => {
    twosum(count(arr))
}

main()
// Ckn = n!/(k!(n-k)!)

//C25 = 5!/(2!*3!)

