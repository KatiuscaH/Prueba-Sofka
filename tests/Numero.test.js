const { numeros, numeroCero,
    numeroUno,
    numeroDos,
    numeroTres,
    numeroCuatro,
    numeroCinco,
    numeroSeis,
    numeroSiete,
    numeroOcho,
    numeroNueve
    } = require('../src/Numero');

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
        expect(n).toEqual(matrix)

    })

    it('Retorna el numero UNO impreso con tamaño 1', () => {
        const n = numeroUno(1);
        const matrix = [
            [" ", " ", " "],
            [" ", " ", "|"],
            [" ", " ", " "],
            [" ", " ", "|"],
            [" ", " ", " "]
        ]
        expect(numeroUno(1)).toEqual(matrix)

    })

    it('Retorna el numero DOS impreso con tamaño 1', () => {
        const n = numeroDos(1);
        const matrix = [
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", "-", " "],
            ["|", " ", " "],
            [" ", "-", " "]
        ]
        expect(numeroDos(1)).toEqual(matrix)

    })

    it('Retorna el numero TRES impreso con tamaño 1', () => {
        const n = numeroTres(1);
        const matrix = [
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroTres(1)).toEqual(matrix)

    })

    it('Retorna el numero CUATRO impreso con tamaño 1', () => {
        const n = numeroCuatro(1);
        const matrix = [
            [" ", " ", " "],
            ["|", " ", "|"],
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", " ", " "]
        ]
        expect(numeroCuatro(1)).toEqual(matrix)

    })

    it('Retorna el numero CINCO impreso con tamaño 1', () => {
        const n = numeroCinco(1);
        const matrix = [
            [" ", "-", " "],
            ["|", " ", " "],
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroCinco(1)).toEqual(matrix)

    })

    it('Retorna el numero SEIS impreso con tamaño 1', () => {
        const n = numeroSeis(1);
        const matrix = [
            [" ", "-", " "],
            ["|", " ", " "],
            [" ", "-", " "],
            ["|", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroSeis(1)).toEqual(matrix)

    })

    it('Retorna el numero SIETE impreso con tamaño 1', () => {
        const n = numeroSiete(1);
        const matrix = [
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", " ", " "],
            [" ", " ", "|"],
            [" ", " ", " "]
        ]
        expect(numeroSiete(1)).toEqual(matrix)

    })

    it('Retorna el numero OCHO impreso con tamaño 1', () => {
        const n = numeroOcho(1);
        const matrix = [
            [" ", "-", " "],
            ["|", " ", "|"],
            [" ", "-", " "],
            ["|", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroOcho(1)).toEqual(matrix)

    })

    it('Retorna el numero NUEVE impreso con tamaño 1', () => {
        const n = numeroNueve(1);
        const matrix = [
            [" ", "-", " "],
            ["|", " ", "|"],
            [" ", "-", " "],
            [" ", " ", "|"],
            [" ", "-", " "]
        ]
        expect(numeroNueve(1)).toEqual(matrix)

    })
});

