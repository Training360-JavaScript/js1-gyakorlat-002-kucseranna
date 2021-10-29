const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire(path.join(workDir, 'js/main.js'));

const getRandomNumber = (max = 100) => Math.round(Math.random() * max);

describe('3. feladat', () => {
    it('Kellene lennie egy generateList nevű függvénynek.', () => {

        const generateList = main.__get__('generateList');

        expect(generateList).toBeTruthy();

    });

    it('A generateList-nek vissza kellene adnia a HTML-listát.', () => {

        const arr = ['first', 'second', 'third'];

        const generateList = main.__get__('generateList');

        const result = generateList(arr);

        expect(result).toMatch(/\<ul\>[\n\r.\w\W]*\<\/ul\>/);
        expect(result).toMatch(/\<li\>[\n\r.\w\W]*first[\n\r.\w\W]*\<\/li\>/);
        expect(result).toMatch(/\<li\>[\n\r.\w\W]*second[\n\r.\w\W]*\<\/li\>/);
        expect(result).toMatch(/\<li\>[\n\r.\w\W]*third[\n\r.\w\W]*\<\/li\>/);

    });

});
