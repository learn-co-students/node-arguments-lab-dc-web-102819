// code solution here

var chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

const passLength = parseInt(process.argv[2], 10)
const solutionsCount = parseInt(process.argv[3], 10)

if (isNaN(passLength) || isNaN(solutionsCount) || !process.argv[3]) {
    console.error("Invalid Argument")
    process.exit(1)
}

let words = []

while (words.length < solutionsCount) {
    let word = ''
    let i = 0
    while (i < passLength) {
        word = word + chars.charAt(Math.floor(Math.random() * 62))
        i++
    }
    words.push(word)
} 

words.forEach(word => console.log(word))
process.exit(0)


