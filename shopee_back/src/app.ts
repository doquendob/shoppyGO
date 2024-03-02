import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { envs } from "./config/envs";


const countVowels = (str: string) => {
     const vowels = ['a', 'e', 'i', 'o', 'u'];
     return str.toLowerCase().split('').reduce((acc, char) => vowels.includes(char) ? acc + 1: acc, 0);
    // return str.toLowerCase().split('').reduce((acc, char) => (vowels.includes(char) ? acc + 1: acc), 0);
}

// Call fetchData function

// const diagonalDifference = (arr:any) => {
//     const primaryDiagonalSum = arr.reduce((sum:any, row:any, i:any) => sum + row[i], 0);
//     const secondaryDiagonalSum = arr.reduce((sum:any, row:any, i:any) => sum + row[arr.length - 1 - i], 0);

//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
// };

const reverseString = (str: string) => {
    let reversedString = ''

    for (let i = str.length -1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

(() => {
//main();
// const result = diagonalDifference([[3,-2,7,-9,6],[3,12,-6,4,1],[3,12,-6,4,1],[3,12,-6,4,1],[3,12,-6,4,1]]);
const result = reverseString('cuantico');
console.log(result)
})()

async function main(){
   /* new Server({
        port: envs.port,
        routes: AppRoutes.routes
    }).start()
    */
    
}

