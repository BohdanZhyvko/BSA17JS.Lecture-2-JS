class Fighter {
  constructor(name, power, health){
    this.name = name;
    this.pwer = pwer;
    this.health = health; 
  }
  
  setDamage(damage){
    this.health = health - damage;
    console.log(`health: ${health}`);
  }
  
  hit(enemy, point){
    damage = point * this.power;
    enemy.setDamage(damage);
  }
}
