const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire( path.join(workDir, 'js/first.js') );

const getRandomNumber = (max = 100) => Math.round(Math.random() * max);

describe('1. feladat', () => {
    it('Kellene lennie egy brutto nevű függvénynek.', () => {

        const brutto = main.__get__('brutto');

        expect(brutto).toBeTruthy();
        
    });

    it('Vissza kellene adnia az elemek bruttó összegét kerekítve.', () => {

        const brutto = main.__get__('brutto');

        const items = [100, 200, 300];

        expect(brutto(items)).toEqual(762);

    });
});
