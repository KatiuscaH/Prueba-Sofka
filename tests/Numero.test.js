const { numeros } = require('../src/Numero');

describe('numeros', () => {
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

