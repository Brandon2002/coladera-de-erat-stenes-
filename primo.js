export default class Primo{
    constructor() {
        this._primes = [];
        
    }

    getNumbers(){
        for(let i = 2; i < 1000; i++){
            this._primes.push(i);
        }
        return this._primes;
    }

    getPrimos(){
        for(let i = 2; i < 1000; i++){
            for(let n = i + 1; n < 1000; n++){
                if(n % i === 0){ //no es primo
                    let o = this._primes.indexOf(n)
                    if(o > 0){
                        this._primes.splice(o, 1);
                    }
                }
               
            }
        } 
        return this._primes;
        
        
    }



   

}
