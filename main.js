const firstTenNumbers = multiple => {
    let resultArray = [];

    for (let i=1; i <= 10; i++) {
        resultArray.push(i * multiple);
    }

    return resultArray;
};

const matrixCreator = (rows, columns) => {
    let matrix = [];
    
    for (let row = 1; row <= rows; row++) {
        let rowList = [];

        for (let column = 1; column <= columns; column++) {
            rowList.push(`${row},${column}`);
        }

        matrix.push(rowList);
    }

    console.log(matrix);
    return matrix;
}

const matrixReplacer = (matrix, selector) => {
    const mainContainer = Object.assign(document.createElement('div'), { className: selector });;
    const title = Object.assign(document.createElement('h2'), { className: 'title' });

    title.innerText = `Matriz ${matrix.length}x${matrix[0].length}`;
    mainContainer.appendChild(title);

    matrix.forEach(row => {
        const rowContainer = Object.assign(document.createElement('div'), { className: 'fila' });

        row.forEach(column => {
            const columnContainer = Object.assign(document.createElement('div'), { className: 'item' });

            columnContainer.innerText = column;
            rowContainer.appendChild(columnContainer);
        });

        mainContainer.appendChild(rowContainer);
    });

    document.querySelector('body').appendChild(mainContainer);
}

const gridFiller = array => {
    if(Array.isArray(array)) {
        if(array.length === 3) {
            if(array[0] >= 1 && array[0]<=10 &&
                array[1] >= 1 && array[1]<=10 &&
                array[2] >= 1 && array[2]<=10) {
                    gridCleaner();

                    for (let row = 1; row <= 3; row++) {
                        let rowItems = document.querySelectorAll(`.test-c .fila-${row} .item`);
                        for (let column = 1; column <= array[row-1]; column++) {
                            rowItems[column - 1].innerText = '*';
                        }
                    }
            } else {
                console.log('Alguno de los items del array es > que 10 o < que 1');
            }
        } else {
            console.log('El array no es de 3 numeros');
        }
    } else {
        console.log('El valor ingresado a la función no es un array')
    }
}

const gridCleaner = () => {
    const testCItems = document.querySelectorAll(`.test-c .item`);

    testCItems.forEach(element => element.innerText = "");
}

console.log(firstTenNumbers(2));
const testMatrix = matrixCreator(5,6);
matrixReplacer(testMatrix,'.test-b');
gridFiller([4,2,7]);

/*Tercer ejercicio preguntar al usuario por los numeros y botar alarmas si el usuario mete un dato incorrecto */