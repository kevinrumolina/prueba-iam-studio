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

console.log(firstTenNumbers(2));
matrixFiller(5,5);
