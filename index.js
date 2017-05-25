class Fighter {
  constructor(name, power, health){
    this.name = name;
    this.power  = power;
    this.health = health; 
  }
  
  setDamage(damage){
    this.health = this.health - damage;
    //string interpolation
    console.log(`health: ${this.health}`);
  }
  
  hit(enemy, point){
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {
  doubleHit(enemy, point = 1){
    let doublePoint = point*2;
    super.hit(enemy, doublePoint);
  }
}

var fighter = new Fighter('first', 25, 32500);
var improvedFighter = new ImprovedFighter('second', 30, 3500);

var fight = (fighter, improvedFighter, ...point) => {
  while(fighter.health > 0 || improvedFighter.health > 0){
    
    for(let value of point){
      fighter.hit(improvedFighter, value);

      if(improvedFighter.health <= 0 || fighter.health <= 0){
      	break;
      }

      improvedFighter.hit(fighter, value);
    }
    if(improvedFighter.health <= 0 || fighter.health <= 0){
      	break;
      }
  }
  if(fighter.health > 0){
    console.log(`${fighter.name} was won! His health: ${fighter.health}`);
  }else{
    console.log(`${improvedFighter.name} was won! His health: ${improvedFighter.health}`);
  }
};

//start
fight(fighter, improvedFighter, 25, 13, 45);