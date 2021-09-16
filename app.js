//Task 1
let task1 = () => {
    let no = +prompt('Enter Order of Matrix', 3)
    let row = []
    let matrix = []
    document.write(`<h3>Matrix</h3>`)
    //user input for matrix
    for (let i = 0; i < no; i++) {
        for (let j = 0; j < no; j++) {
            row.push(+prompt(`Enter Element of Matrix A: \n  R${i + 1} C${j + 1}`))
            document.write(row[j] + ' ')
        }
        matrix.push(row);
        row = [];
        document.write(`<br>`)
    }
    //sum and product calculation 
    let primaryDiognalSum = 0;
    let secondaryDiognalSum = 0;
    let primaryDiognalMultiply = 1;
    let secondaryDiognalMultiply = 1;

    for (let i = 0; i < no; i++) {
        for (let j = 0; j < no; j++) {
            if (i === j) {
                primaryDiognalSum += matrix[i][j]
                primaryDiognalMultiply = primaryDiognalMultiply * matrix[i][j]
            }
            if ((i + j) == (no - 1)) {
                secondaryDiognalSum += matrix[i][j]
                secondaryDiognalMultiply = secondaryDiognalMultiply * matrix[i][j]
            }
        }
    }
    //Render on DOM
    document.write(`<h3>Primary Diognal:</h3><p>SUM: ${primaryDiognalSum}</p><p>PRODUCT: ${primaryDiognalMultiply}</p>`)
    document.write(`<h3>Secondary Diognal:</h3><p>SUM: ${secondaryDiognalSum}</p><p>PRODUCT: ${secondaryDiognalMultiply}</p>`)
}

//task 2
let task2 = () => {
    let noR = +prompt('Enter No of Rows of Matrix', 3)
    let noC = +prompt('Enter No of Coulums of Matrix ', 3)
    let matrixA = []
    let matrixB = []
    let matrixC = []
    let row = []

    //first matrix input and print on DOM
    document.write(`<h3>Matrix A</h3>`)
    for (let i = 0; i < noR; i++) {
        for (let j = 0; j < noC; j++) {
            row.push(prompt(`Enter Element of Matrix A: \n  R${i + 1} C${j + 1}`))
            document.write(row[j] + ' ')
        }
        matrixA.push(row);
        row = [];
        document.write(`<br>`)

    }

    //Second matrix input and print on DOM
    document.write(`<h3>Matrix B</h3>`)
    for (let i = 0; i < noR; i++) {
        for (let j = 0; j < noC; j++) {
            row.push(prompt(`Enter Element of Matrix B: \n  R${i + 1} C${j + 1}`))
            document.write(row[j] + ' ')
        }
        matrixB.push(row);
        row = [];
        document.write(`<br>`)
    }

    // matrix multiplication and print on DOM
    document.write(`<h3> Result of A X B</h3>`)
    for (let i = 0; i < noR; i++) {
        for (let j = 0; j < noC; j++) {
            row.push(matrixA[i][j] * matrixB[i][j])
            document.write(row[j] + ' ')
        }
        matrixC.push(row);
        row = [];
        document.write(`<br>`)
    }
}
//Task 3
let task3 = () => {
    let obj =
    {
        parent_name: 'Father',
        child1: 'Sumair'
    }
    let arr = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"]

    arr.map((value, index) => {
        obj[`child${index + 2}`] = value;
    })
    console.log('New Object=>', obj)
    alert('check Console for Output')
}
// task 4
let task4 = () => {
    let container = document.getElementById('container')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            data.map((value) => {
                container.innerHTML +=
                    `<ul>
                <li>ID: ${value.id}</li>
                <li>Name: ${value.name}</li>
                <li>Phone: ${value.phone}</li>
                <li>Website: ${value.website}</li>
                <li>Address: ${value.address.suite} ${value.address.street} ${value.address.city}</li>
                  </ul>`
            })
        }
        )
}


