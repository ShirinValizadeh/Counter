let counter = document.querySelector('.counter')
const lowerCount = document.querySelector('#lowercount')
const addCount = document.querySelector('#addcount')


let count = 0;


addCount.addEventListener('click' , incrementCounter)
lowerCount.addEventListener('click' , decrementCounter)



function incrementCounter() {
    count ++
    counter.innerHTML = count
    if (counter.innerHTML>'0') {
        counter.style.color = 'white'        
    }
    counter.animate([{opacity: '0.2'},{opacity:'1'}],{duration:2000 })
} 


function decrementCounter() {
    count --
    counter.innerHTML = count
    if (counter.innerHTML<'0') {
        counter.style.color = 'red'
        
    }else if(counter.innerHTML === '0'){
        counter.style.color= 'white'
    }
} 
