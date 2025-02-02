



let ran1;

let ran2;

let score1 = 0;
let score2 = 0;

let bexp1 = 0;
let bexp2 = 0;


let player_name1 = 'john'
let player_name2 = 'jane'

let exp1 = card1.querySelector('#experience');
exp1.innerHTML = '';

let exp2 = card2.querySelector('#experience');
exp2.innerHTML = '';

player1.querySelector('#p1_name').textContent = player_name1
let playerScore1 = player1.querySelector('#p1_score')
playerScore1.innerHTML = `Score: ${score1}`
// let sT1 = document.createElement('p');
// playerScore1.append(sT1)
//sT1.textContent = `Score: ${score1}`;

player2.querySelector('#p2_name').textContent = player_name2
let playerScore2 = player2.querySelector('#p2_score')
playerScore2.innerHTML = `Score: ${score1}`
// let sT2 = document.createElement('p');
// playerScore2.append(sT2)
// sT2.textContent = `Score: ${score2}`



function randomNum(){
    return Math.floor(Math.random()*19 + 1);
}

console.log(randomNum())

function pokemonCard1(){
    //console.log(ran1, ran2)
    fetch(`https://pokeapi.co/api/v2/pokemon/${ran1}`).then((res)=>{
        if(!res.ok){
            throw new Error("network error");
        }
        let responseData = res.json();
        console.log(responseData)
        return responseData
    }).then((data)=>{
        console.log(data.sprites.other.dream_world.front_default)
        let imgUrl = data.sprites.other.dream_world.front_default;

        document.querySelector('#player1 #name').textContent = data.name

        const lst = card1.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = data.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
        //console.log(ul)
        //return data.abilities
        //return data.json();
        
        exp1.textContent = data.base_experience
        bexp1 = data.base_experience;
        playerScore1.innerHTML = `Score: ${score1}`

        console.log(bexp1)
        imgLoad1(imgUrl)
    })
    
    //console.log(sT1)
    
}
let imgTag1 = document.querySelector(`#player1 #img`);
   
    let image1 = document.createElement('img');
    
    image1.classList.add('img1')
    imgTag1.appendChild(image1)
    image1.src = ""

function imgLoad1(imgUrl){
    
    
    image1.src = imgUrl;
    
}


//card 2
function pokemonCard2(){
    //console.log(ran1, ran2)
    fetch(`https://pokeapi.co/api/v2/pokemon/${ran2}`).then((res)=>{
        if(!res.ok){
            throw new Error("network error");
        }
        let responseData = res.json();
        console.log(responseData)
        return responseData
    }).then((data)=>{
        console.log(data.sprites.other.dream_world.front_default)
        let imgUrl = data.sprites.other.dream_world.front_default;
        document.querySelector('#player2 #name').textContent = data.name
        //return data.json();
        const lst = card2.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = data.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
                exp2.textContent = data.base_experience
                bexp2 = data.base_experience
                console.log(bexp2)
                playerScore2.innerHTML = `Score: ${score2}`

        imgLoad2(imgUrl)
    })
}

let imgTag2 = document.querySelector(`#player2 #img`);
    let image2 = document.createElement('img');
    image2.classList.add('img2')
    imgTag2.appendChild(image2)
    image2.src = ""
function imgLoad2(imgUrl){
    
    image2.src = imgUrl
}



let fightBtn = document.getElementById('fight');
fightBtn.addEventListener('click', ()=>{
    ran1 = randomNum();
    ran2 = randomNum();
    if(bexp1>bexp2){
        score1 += 1;
    }else{
        score2 += 1;
    }
    pokemonCard1();
    pokemonCard2();
    console.log(score1, score2)

    //console.log(bexp1, bexp2)
})

