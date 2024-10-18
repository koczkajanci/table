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



const form = document.getElementById("form")
form.addEventListener('submit', 
    function(e)
    {
        e.preventDefault() 
        const lastname = document.getElementById('lastname')   
        const firstname1 = document.getElementById('firstname1')   
        const firstname2 = document.getElementById('firstname2')   
        const married = document.getElementById('married')   
        const pet = document.getElementById('pet')
        
        
        let lastnValue =lastname.value
        let firstn1Value = firstname1.value
        let firstn2Value = firstname2.value
        let all = pet.value
        let marryValue = married.checked

        //Ha ures a firstname 1 akkor undefined legyen az erteke

        if(firstn2Value == ""){
            firstn2Value = undefined;
        }
        let new_person = {
            lastname: lastnValue,
            firstname1: firstn1Value,
            firstname2: firstn2Value,
            pet: all,
            married: marryValue
        }

        //felpusholjuk a new_person objektumot a tombunkhoz de elotte kiuritjuk a tbodynak a tartalmat hogy ne legyen benne semmi
        if(Validatefield(lastname, firstname1, pet)){
            array.push(new_person);
            console.log(array);
            tablebody.innerHTML = "";

            rendertable();
        }
    })  
    
    

    //ebbe a fuggvenybe megnezzuk hogy a mezokbe megvan-e adva ertek
    //ha nincs akkor belerakjuk oket egy error classba ami az osszes olyan cellat ahol nincsen semmi belerakja az osztalyba
    //es oda a blank helyett azt fogja kiirni hogy Kötelező vezetéknév
    //majd egy elobb letrehozott bool valtozot allitjuk annak megfeleloen hogy jo-e a cella vagy sem-
    function Validatefield(lastn, firstn1, alla){
        let result = true;

        const error = form.querySelectorAll('.error');
        for(const errors of error)
        {
        errors.innerHTML = "";
        }

        if(lastname.value === ""){
            const parentElement = lastname.parentElement
            const error = parentElement.querySelector('.error')
            error.innerHTML = "Kötelező vezetéknév";
            result = false;
        }

        if(firstname1.value === ""){
            const parentElement = firstname1.parentElement
            const error = parentElement.querySelector('.error')
            error.innerHTML = "Kötelező keresztnev";
            result = false;
        }

        if(pet.value === ""){
            const parentElement = pet.parentElement
            const error = parentElement.querySelector('.error')
            error.innerHTML = "Kötelező állat";
            result = false;
        }
        return result;
    }

function createTableCell(tagName,innerHTML, parentElement){
    const sigma = document.createElement(tagName);
    sigma.innerHTML = innerHTML;
    parentElement.appendChild(sigma);

    
}
    
    




rendertable();

    //fuggveny amit meghivunk amikor letrehozzuk a tableunkat
    function rendertable(){
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
            tablebody.appendChild(tr);
            tr.appendChild(pet);
            pet.innerHTML = person.pet;
            tablebody.appendChild(tr);
          
        
        
          
        
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
    }




