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
  doubleHit(){
    let doublePoint = point*2;
    super.hit(enemy, doublePoint)
  }
}