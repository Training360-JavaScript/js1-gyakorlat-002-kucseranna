# Feladatok

## 1. feladat
- A `js/first.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!

## 2. feladat
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, hogy a tömbben van-e number típusú elem vagy sem

## 3. feladat
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
- Pl.:

```JavaScript
// ha ez a tömb
const content = ['első', 'második', 'harmadik'];
```

```HTML
<!-- akkor ez legyen a visszatérési érték (nem kellenek a behúzások, lehet egysoros string a kimenet): -->
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
```
