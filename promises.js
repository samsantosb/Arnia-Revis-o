//Computação concorrente

/*
Computação concorrente é um paradigma de programação que
permite que um programa seja dividido em partes
que podem ser executadas simultaneamente.
*/


//10 segundos para resolver
function getPromise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1");
        }, 10000);
    });
}

//2 segundos para resolver
function getPromise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000);
    });
}

//1segundo apra resolver
function getPromise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3");
        }, 1000);
    });
}

function executePromises() {
    //quando voce usa o then a promise será resolvida
    //dentro do parenteses do then você tem o retorno da promise
    getPromise3().then(result => console.log(result));
    getPromise2().then(result => console.log(result));
    getPromise1().then(result => console.log(result));
}



//método recomendado para executar promises
async function executePromiseOne() {
    const result = await getPromise1();
    console.log(result);
    return result
}

function executPromiseOneWithThen() {
    getPromise1().then(result => console.log(result));
}


//se forem várias promises, você pode usar o Promise.all
async function resolveWithPromiseAllAndAsyncAwait() {
    const promises = [getPromise1(), getPromise2(), getPromise3()];
    const result = await Promise.all(promises);

    console.log(result);
}

resolveWithPromiseAllAndAsyncAwait()


//_______________________________________________________