class Fighter {
  constructor(name, power, health){
    this.name = name;
    this.power  = power;
    this.health = health; 
  }
  
  setDamage(damage){
    this.health = this.health - damage;
    console.log(`health: ${health}`);
  }
  
  hit(enemy, point){
    damage = point * this.power;
    enemy.setDamage(damage);
  }
}
