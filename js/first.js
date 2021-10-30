
const brutto = (Uint16Array) => {
    let bruttoFloatArray = Uint16Array.map(item => item * 1.27);
    let bruttoIntArray = bruttoFloatArray.map(item => Math.round(item));
    return bruttoIntArray.reduce((item1, item2) => item1 + item2);
}




