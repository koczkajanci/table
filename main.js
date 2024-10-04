let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]


const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
const thr = document.createElement('tr');
const tbr = document.createElement('tr');
let thveznev = document.createElement('th');
let thkernev = document.createElement('th');
let thhazas = document.createElement('th');
let thallat = document.createElement('th');
let td = document.createElement('td');
//---------------------------------------------------
document.body.appendChild(table);
table.appendChild(tablehead);
table.appendChild(tablebody);
 
tablehead.appendChild(thr);
tablebody.appendChild(tbr);
 
thr.appendChild(thveznev);
thr.appendChild(thkernev);
thr.appendChild(thhazas);
thr.appendChild(thallat);
 
tbr.appendChild(td);
//---------------------------------------------------
thveznev.innerHTML = 'Vezetéknév';
thkernev.innerHTML = 'Keresztnév';
thhazas.innerHTML = 'Házas-e?';
thallat.innerHTML = 'Háziállat';

thkernev.colSpan = 2


const tbody= document.createElement('tbody')
table.appendChild(tbody);


for (const person of array){
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const lastname = document.createElement('td');
    tr.appendChild(lastname);
    lastname.innerHTML = person.lastname;
    const firstname1 = document.createElement('td');
    tr.appendChild(firstname1);
    firstname1.innerHTML = person.firstname1;

    if(person.firstname2 === undefined){
        firstname1.colSpan = 2
    }else{
        const firstname2 = document.createElement('td')
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)
    }
    const married = document.createElement('td');
    tr.appendChild(married);
    married.innerHTML = person.married;

    if(person.married === true){
        married.innerHTML = "igen"
    }else{
        married.innerHTML = "nem"
    }
    
    const pet = document.createElement('td');
    tr.appendChild(pet);
    pet.innerHTML = person.pet;
  


  

    tr.addEventListener('click', function(e)
    { 
        let valasztott = tbody.querySelector('.selected');
        if(valasztott != undefined){
            valasztott.classList.remove('selected');
        }   
        console.log('click')
        console.log(e);
        e.currentTarget.classList.add('selected');
       


    }) 

 
    
}


