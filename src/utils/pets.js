import { addHealthOnFaint, explodeOnFaint, gainAttackOnHurt, snipe } from "./abilities";

class Pet {
    hitCount = 0;
    constructor(hp = 1, atk = 1, ability, place, level = 1, food = null){
        this.hp = hp;
        this.atk = atk;
        this.ability = ability;
        this.place = place;
        this.level = level;
        this.food = food;
        food.effect(this);
    }
    attack(target){
        target.defend(this.atk);
    }    
    defend(damage){
        this.hp -= damage;
        this.hitCount += 1;
    }
}

export class Sniper extends Pet{
    constructor(addedHp, addedAtk, place, level, food){
       super(2 + addedHp, 2 + addedAtk, snipe, place, level, food)
    }
}

export class Healer extends Pet{
    constructor(addedHp, addedAtk, place, level, food){
        super(8 + addedHp, 2 + addedAtk, addHealthOnFaint, place, level, food)
    }
}

export class Berserker extends Pet{
    constructor(addedHp, addedAtk, place, level, food){
        super(6 + addedHp, 2 + addedAtk, gainAttackOnHurt, place, level, food)
    }
}

export class Bomber extends Pet{
    constructor(addedHp, addedAtk, place, level, food){
        super(3 + addedHp, 2 + addedAtk, explodeOnFaint, place, level, food)
    }
}