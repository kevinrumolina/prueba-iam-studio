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

const numberChecker = position => {
    let number;

    do {
        number = parseInt(prompt(`Ingrese el numero ${position} del array`));
        isNaN(number) ? alert('El tipo de dato no es un numero') : number < 0 ? 
        alert('El numero es menor que 1, ingrese un numero entre 1 y 10') : number > 10 ?
        alert('El numero es mayor que 10, ingrese un numero entre 1 y 10') : console.log('el numero es correcto');
    } while (number < 1 || number > 10 || isNaN(number));

    return number
}

const numericArrayConstructor = positions => {
    let array = [];

    for(let i = 1; i <= positions; i++) {
        array.push(numberChecker(i));
    }  

    console.log(array);
    return(array);
}

console.log(firstTenNumbers(2));
const testMatrix = matrixCreator(5,6);
matrixReplacer(testMatrix,'test-b');

const arrayTestC = numericArrayConstructor(3);
gridFiller(arrayTestC);
