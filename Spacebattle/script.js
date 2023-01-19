let isPlaying = true;
let label = document.getElementById("label");
label.style.color = "pink";
label.style.fontSize = '50px';

// To make Class of Spaceship
class Spaceship{      
    isAlive = true;  
     constructor(hull,firepower,accuracy,name){
       this.accuracy=accuracy;
       this.hull = hull;
       this.firepower = firepower; 
       this.name = name;
     }
     attack(enemy){

        console.log(this.name +" is attacking");//You attack the first alien ship

        console.log(enemy.name +" is defending");
       let numValue = Math.random();//accuracy is the chance between 0 and 1 that the ship will hit its target
       let  result='' ;
        if(numValue < this.accuracy){
           result =this.name+" Won!! It's a direct hit!! Well done";
           enemy.hull -= this.firepower;//firepower is the amount of damage done to the hull of the target with a successful hit
           if( enemy.hull <= 0){
              enemy.isAlive = false; //hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
              result = this.name+" Won!! Target got destroyed!! Well done";
            }
           
          return result;
       } else{
        result = this.name+" You lose !! You missed the target";
      }       
        return result;//enemy  parameter used for both instaces to call attack method
      }      
  
    }


   const captain = new Spaceship(20,5,0.7,'Captain');

   const addalienArr=[];
   const alienArray = ()=>{
   for (let i = 0; i < 6; i++) {
     addalienArr.push( new Spaceship(Math.round(Math.random()*(7-3)+3),
                                Math.round(Math.random()*(4-2)+2),
                                Math.random()*(0.8-0.6)+0.6,
                                'Alien'+i));                         
      }//There are six alien ships.
    }


   const startBattle = ()=>{
   
     while(isPlaying )  
      {
        alert(captain.attack(addalienArr[0]));//You attack the first alien ship
        if( addalienArr[0].isAlive){//If the ship survives, it attacks you

         alert(addalienArr[0].attack(captain));
    
          if(!captain.isAlive){
             alert(" You Lost " +addalienArr[0].name + "won");//If captain got damaged and hull damaged then captain is not alive

             isPlaying= false;
             
             break;
          }
         }
         else{
           alert(` Captain Won, ${addalienArr[0].name} is Destroyed`);//If you survive, aleien array reduced by 1

          addalienArr.shift();

           ///Bonus Point:After evry alienship destroyed it ask do you want to play until alienship's "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship
          if(addalienArr.length>0){
              const retreat = prompt("Do you want to play battle with next Alienship, press 'Y' for playing and press 'N' to Quit");
              console.log(retreat);
              if(retreat.toLowerCase() === 'y'){
                  alert (`${addalienArr[0].name} is start fighting with captain`);           
              }
              else if(retreat.toLowerCase() === 'n') {
                  window.close();
                  break;
              }
           }else
           {
            //isPlaying= false;
            /////When the game is over, prompt the user if they would like to play again, and make it so the user can play again
            const restartGame = prompt("Captain Won , All Aliens are Destroyed, \n Press 'Y' for playing again and press 'N' for Quitting");
             ///////Bonus Point: After all alienships destroyed, After every battle you are asked if you want to return to base and recharge your shields.
            if(restartGame.toLowerCase() === 'y'){
              alienArray();
              captain.hull=20;  
              isPlaying=true;      
             }else  {
              window.close();
              break;
             }
            }
          }
        }

     }

    
    let startgameBtn = document.getElementById('start_game');
    startgameBtn.addEventListener('click',function(){
    const startgame = prompt(" Do you want to play a game ?  press 'Y' to play, \n press 'N' to exit");
    console.log(startgame);
    if(startgame.toLowerCase()==='y'){

       alert('Aliens are here to attack on Earth ');
       alienArray();
       //currentStatus();
      startBattle();
    }else if(startgame.toLowerCase()==='n') {
        alert('Good bye');
      }
    }
)                 
    
//Function to get current status of UssAssenmly and Alienship values 
const currentStatus = () =>{

    //alert('currentStatus'+addalienArr.length);
    for(let j=0;j<addalienArr.length;j++){
                              
        alert(`PLAYER\n HULL : ${captain.hull}\n FIREPOWER : ${captain.firepower}\n ACCURACY :${captain.accuracy} \n ---------------\n ALIEN \n HULL : ${addalienArr[j].hull}\n FIREPOWER : ${addalienArr[j].firepower}\n ACCURACY : ${addalienArr[j].accuracy}`);
    }
}

let retreatBtn = document.getElementById('retreat');
retreatBtn.style.color = "red";
retreatBtn.addEventListener('click',function(){
    alert('You Loose the battle!!!!');
    const retreat =prompt("Do you want to play battle with next Alienship, press 'Y' for playing and press 'N' to Quit");
    console.log(retreat);
    if(retreat.toLowerCase() === 'y'){
      alienArray();
      startBattle();
    }else if(retreat.toLowerCase() === 'n') {
    exit1();}
}
)


const exit1 = ()=>{
    let arr = addalienArr.length;
    const exit = prompt('Do you want to exit the screen If yes type "Y" or no type "N"');
    if(exit.toLowerCase()=='y'){
        alert('Good Bye');
        window.close();
    }
    else{

        if(arr>0){
            
            //attackAlien();
            startBattle();
        }
        else{
            window.location.reload();
        }
        if(captain.hull===0 && arr>0){
            window.location.reload();
        }
        
        
    }
}


let exitBtn = document.getElementById('Exit');
exitBtn.addEventListener('click',function(){
    exit1();
}) 

