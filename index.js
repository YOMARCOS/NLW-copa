function CreatGame(team1, team2, hour){
    return `
       
    <li>
    <img src="./assets/icon-${team1}.svg" alt='${team1}'> 
    <strong>${hour}
    </strong> <img src="./assets/icon-${team2}.svg" alt='${team1}'>
    </li>
   

    `

}
let delay = -0.5;
function CreatCard(data, day, games) {
    delay = delay + 1
    return `
   
    <div  class="card" style="animation-delay: ${delay}s">
    <h2>${data}<span>${day}</span></h2>
        <ul>
        ${games}
        </ul>       
    </div>
   
`
  }  
document.querySelector("#cards").innerHTML =
       CreatCard('24/11 ', 'Quinta' ,  CreatGame('port', 'gana', '13:00') + CreatGame('brazil', 'serbia', '16:00'))+
       CreatCard('28/11 ', 'Segunda',CreatGame('brazil', 'suiça', '13:00') + CreatGame('port', 'uru', '16:00'))+
       CreatCard('02/12', 'Sexta' , CreatGame('port', 'corea', '12:00')+ CreatGame('brazil', 'camaroes', '16:00'))
       
        
