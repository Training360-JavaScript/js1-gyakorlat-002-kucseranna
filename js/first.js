/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

// const brutto = (Int32Array) => {
//     const itemsValueMultiplied = Int32Array.map(item => item ** 1.27);
//     const sumOfValue = itemsValueMultiplied.reduce((previousValue, currentValue)=> previousValue + currentValue);
//     return Math.round(sumOfValue)
// }

// //vagy

// const brutto = IntArray  => IntArray.Math.round(intMultiplied.reduce(item ** 1.27))

const brutto = (Uint16Array) => {
    let bruttoFloatArray = Uint16Array.map(item => item * 1.27);
    let bruttoIntArray = bruttoFloatArray.map(item => Math.round(item));
    return bruttoIntArray.reduce((item1, item2) => item1 + item2);
}




