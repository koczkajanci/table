const array = [
    {
        firstname1: 'Doktor',
        firstname2: 'Koczka',
        lastname: 'János'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]


const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
const thr = document.createElement('tr');
const tbr = document.createElement('tr');
let thveznev = document.createElement('th');
let thkernev = document.createElement('th')
let td = document.createElement('td');
//---------------------------------------------------
document.body.appendChild(table);
table.appendChild(tablehead);
table.appendChild(tablebody);
 
tablehead.appendChild(thr);
tablebody.appendChild(tbr);
 
thr.appendChild(thveznev);
thr.appendChild(thkernev);
 
tbr.appendChild(td);
//---------------------------------------------------
thveznev.innerHTML = 'Vezetéknév';
thkernev.innerHTML = 'Keresztnév';

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
        firstname1
    }

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


