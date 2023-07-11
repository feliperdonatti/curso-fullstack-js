import { soma } from '../src/soma';

describe('Testando a função de soma', () => {
    it('A soma de 2 + 1 deve retornar 3', () => {
        const resultado = soma(2, 1);

        expect(resultado).toEqual(3);
    })

   
})