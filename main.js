const firstTenNumbers = multiple => {
    let resultArray = [];

    for (let i=1; i <= 10; i++) {
        resultArray.push(i * multiple);
    }

    return resultArray;
};

console.log(firstTenNumbers(2));
