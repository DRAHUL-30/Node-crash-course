const fs = require('fs');

// read File

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) console.log(err, 'err')
//     console.log(data.toString());
// })

// write File

fs.writeFile('./docs/blog3.txt', 'Here is what happened??', () => {
    console.log('data.toString()')
})

// fs.writeFile('./docs/blog2.txt', 'Happened KK??', () => {
//     console.log('data.toString(1)')
// })

// directories

// if (fs.existsSync('./assets')) {
//     fs.rmdir('./assets', (err) => {
//         if (err) console.log(err)
//         console.log('Folder Deleted')
//     })
// } else {
//     fs.mkdir('./assets', (err) => {
//         if (err) console.log(err)
//         console.log('Folder Created')
//     })
// }

// delete File

// if (fs.existsSync('./docs/blog2.txt')) {
//     fs.unlink('./docs/blog2.txt', (err) => {
//         if (err) console.log(err)
//         console.log('File Deleted')
//     })
// }