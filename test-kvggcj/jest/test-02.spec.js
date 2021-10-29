const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire(path.join(workDir, 'js/second.js'));

const getRandomNumber = (max = 100) => Math.round(Math.random() * max);

describe('2. feladat', () => {
    it('Kellene lennie egy checker nevű függvénynek.', () => {

        const checker = main.__get__('checker');

        expect(checker).toBeTruthy();

    });

    it('A checker függvénynek vissza kellene adnia a helyes objektumot.', () => {

        const arr = [100, 200, 300];
        const searchValue = 100;

        const checker = main.__get__('checker');

        const result = checker(arr, searchValue);

        expect(result).toEqual({
            exists: true,
            index: 0,
            allElementsAreNumbers: true,
            someElementsAreNumbers: true,
        });

    });
});
