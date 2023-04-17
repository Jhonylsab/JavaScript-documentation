const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelarMais(130)
console.log(volvo.status())

ferrari.acelarMais(200)
console.log(ferrari.status())