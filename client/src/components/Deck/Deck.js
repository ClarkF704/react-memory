
import ReactLogo from '../../img/reactLogo.png';
import cSharp from '../../img/c#Logo.png';
import cssLogo from '../../img/cssLogo.png';
import goku from '../../img/goku.png';
import htmlLogo from '../../img/htmlLogo.png';
import mongodbLogo from '../../img/mongodbLogo.png';
import vegeta from '../../img/vegeta.png';

function randomizer(array){
    const _array = array.slice(0)
    for(let i = 0; i < array.length - 1; i++){
        let shuffleIndex = Math.floor(Math.random() * (i + 1))
        let ripple = _array[i]
        _array[i] = _array[shuffleIndex]
        _array[shuffleIndex] = ripple
    }

    return _array
}

export default function initilizedeck(){
    let id = 0;
    const cards = [ReactLogo, cSharp, cssLogo, mongodbLogo, htmlLogo, goku, vegeta].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return randomizer(cards)
}