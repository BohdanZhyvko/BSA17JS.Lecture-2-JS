class Fighter {
  constructor(name, power, health){
    this.name = name;
    this.pwer = pwer;
    this.health = health; 
  }
  
  setDamage(damage){
    this.health = health - damage;
  }
  
  hit(enemy, point){
    damage = point * power;
    enemy.setDamage(damage);
  }

}
