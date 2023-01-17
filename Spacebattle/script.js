let isPlaying = true;


class Spaceship{      
    isAlive = true;  
     constructor(hull,firepower,accuracy,name){
       this.accuracy=accuracy;
       this.hull = hull;
       this.firepower = firepower; 
       this.name = name;
     }
     attack(enemy){
      console.log(this.name +" is attacking");
      console.log(enemy.name +" is defending");
       let numValue = Math.random();
       let  result='' ;
        if(numValue < this.accuracy){
           result =this.name+" Won!! It's a direct hit!! Well done";
           enemy.hull -= this.firepower;
           if( enemy.hull <= 0){
              enemy.isAlive = false;
              result = this.name+" Won!! Target got destroyed!! Well done";
            }
           
          return result;
       } else{
        result = this.name+" You lose !! You missed the target";
      }       
        return result;
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
    }
}
const startBattle = ()=>{
   
    while(isPlaying)  
    {
        alert(captain.attack(addalienArr[0]));
        if( addalienArr[0].isAlive){
         alert(addalienArr[0].attack(captain));
    
          if(!captain.isAlive){
             alert(" You Lost "+addalienArr[0].name + "won");
             isPlaying= false;
             break;
          }
      }else{
        alert(` Captain Won,${addalienArr[0].name} is Destroyed`);
          addalienArr.shift();
          if(addalienArr.length===0){
              isPlaying= false;
            alert("Captain Won , All Aliens are Destroyed");
            break;
          }
        }
      }

}

    
const fight= (element)=>{

    console.log("element in fight"+element.name);
    isPlaying=true;
    while(isPlaying)  
    {
        alert(captain.attack(element));
        if( element.isAlive){
         alert(element.attack(captain));
    
          if(!captain.isAlive){
             alert(" You Lost "+element.name + "won");
             isPlaying= false;
             break;
          }
      }else{
        alert(` Captain Won!! ${element.name} Alien is Destroyed`);
          addalienArr.shift();
          if(addalienArr.length===0){
              isPlaying= false;
            alert("Captain Won , All Aliens are Destroyed");
            break;
          }
        }
      }

}
let startgameBtn = document.getElementById('start_game');
startgameBtn.addEventListener('click',function(){
    //soldier.hull = 0;
    console.log("Do you want to play a game? If yes press Y no press N");
    const startgame = prompt("Do you want to play a game? If yes press 'Y' no press 'N'");
    console.log(startgame);
    if(startgame.toLowerCase()==='y'){
        alert ('Aliens are here to attack on Earth');
       alienArray();
       //currentStatus();
      startBattle();
    }else if(startgame.toLowerCase()==='n') {
        alert('Good bye');
        }
    }
)                 
    
//Funnction to get currenyt status
const currentStatus = () =>{

    //alert('currentStatus'+addalienArr.length);
    for(let j=0;j<addalienArr.length;j++){
                              //return alert(`Your current status is ${soldier.hull},${soldier.firepower},${soldier.accuracy} and the alien status is ${alien1.shipArr[j].hull},${alien1.shipArr[j].firepower},${alien1.shipArr[j].accuracy}`)
        alert(`PLAYER\n HULL : ${captain.hull}\n FIREPOWER : ${captain.firepower}\n ACCURACY :${captain.accuracy} \n ---------------\n ALIEN \n HULL : ${addalienArr[j].hull}\n FIREPOWER : ${addalienArr[j].firepower}\n ACCURACY : ${addalienArr[j].accuracy}`);
    }
}

let retreatBtn = document.getElementById('retreat');
retreatBtn.style.color = "red";
retreatBtn.addEventListener('click',function(){
    alert('You Loose the battle!!!!');
    exit1();
})


const exit1 = ()=>{
    let arr = addalienArr.length;
    const exit = prompt('Do you want to exit the screen If yes type "Y" or no type "N"');
    if(exit.toLowerCase()=='y'){
        //alert('Good Bye');
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

