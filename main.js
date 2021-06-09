const firstTenNumbers = multiple => {
    let resultArray = [];

    for (let i=1; i <= 10; i++) {
        resultArray.push(i * multiple);
    }

    return resultArray;
};

/*const gridConstructor = (rows, columns) => {
    const gridContainer = document.createElement('section');
    for (let row = 1; row <= rows; row++) {
        let rowComponent = Object.assign(document.createElement('div'), { className:`fila fila-${row}` });

        for (let column = 1; column <= columns; column++) {
            let columnComponent = Object.assign(document.createElement('div'), { className: `item item-${column}` });

            rowComponent.appendChild(columnComponent);
        }

        gridContainer.appendChild(rowComponent);
    }

    document.querySelector('body').appendChild(gridContainer);
}*/

const matrixFiller = (rows, columns) => {
    for (let row = 1; row <= rows; row++) {
        let rowItems = document.querySelectorAll(`.test-b .fila-${row} .item`);
        for (let column = 1; column <= columns; column++) {
            rowItems[column - 1].innerText = `${row},${column}`;
        }
    }
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
matrixFiller(5,5);
gridFiller([4,2,7]);
