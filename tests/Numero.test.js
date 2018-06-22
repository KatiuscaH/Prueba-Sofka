const { numeros, numeroCero } = require('../src/Numero');

describe('Numeros', () => {
    it('Retorna el numero de COLUMNAS de la matriz', () => {
        const n = numeros(1);
        for (let i = 0; i < 3; i++) {
            expect(n[i].length).toBe(3)
        }
    })

    it('Retorna el numero de FILAS de la matriz', () => {
        const n = numeros(1);
        expect(n.length).toBe(5)
    })
});


describe('Numeros impresos', () => {
    it('Retorna el numero CERO impreso con tamaño 1', () => {
        const n = numeroCero(1);
        const matrix = [
            [" ", "-", " "],
            ["|", " ", "|"],
            [" ", " ", " "],
            ["|", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroCero(1)).toEqual(matrix)

    })

});
