const numero = [1, 2, 3, 4, 5];
const pos = [3, -7, 9, -4, 2, 1, -1, 6];

function calcularCubos() {
    const cubos = numero.map(num => Math.pow(num, 3));
    document.getElementById('resultadoCubos').innerText = 'Cubos: ' + cubos.join(', ');
}

function somarPositivos() {
    const somaPositivos = pos
        .filter(nume => nume > 0)
        .reduce((acumulador, nume) => acumulador + nume, 0);
    document.getElementById('resultadoSoma').innerText = 'Soma dos positivos: ' + somaPositivos;
}


const alunos = [
    { nome: "Alice", notas: [90, 85, 92] },
    { nome: "Bob", notas: [75, 80, 85] },
    { nome: "Charlie", notas: [90, 95, 85] },
    { nome: "Jack", notas: [100, 100, 100] }
];

function calcularMedias() {
    const medias = alunos.map(aluno => {
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / aluno.notas.length;
        return { nome: aluno.nome, media: media };
    });

    
    const resultado = medias.map(m => `${m.nome}: ${m.media.toFixed(2)}`).
    join('<br>');
    document.getElementById('resultado').innerHTML = resultado;
}

const produtos = [
    { name: "Product 1", price: 20, category: "Electronics" }, 
    { name: "Product 2", price: 30, category: "Clothes" }, 
    { name: "Product 3", price: 40, category: "Electronics" }, 
    { name: "Product 4", price: 50, category: "Clothes" }, 
    { name: "Product 5", price: 60, category: "Clothes" }, 
    { name: "Product 6", price: 70, category: "Electronics" }, 
    { name: "Product 7", price: 80, category: "Clothes" }, 
    { name: "Product 8", price: 90, category: "Electronics" },
];

document.getElementById('calcularMedias').onclick = function() {

    const categorias = produtos.reduce((acc, produto) => {
        if (!acc[produto.category]) {
            acc[produto.category] = [];
        }
        acc[produto.category].push(produto.price);
        return acc;
    }, {});

    
    const medias = Object.entries(categorias).map(([categoria, precos]) => {
        const media = precos.reduce((acc, preco) => acc + preco, 0) / precos.length;
        return { category: categoria, averagePrice: media };
    });

    
    const categoriasAcimaDe50 = medias.filter(item => item.averagePrice > 50);


    const resultadoMedias = categoriasAcimaDe50.map(item => `${item.category}: R$ ${item.averagePrice.toFixed(2)}`).join('<br>');
    document.getElementById('resultadoMedias').innerHTML = resultadoMedias || 'Nenhuma categoria com média acima de R$ 50';
};