import { snipe } from "./abilities";

class Pet {
    constructor(hp, atk, ability, place, food = null){
        this.hp = hp;
        this.atk = atk;
        this.ability = ability;
        this.place = place;
        this.food = food;
    }
    attack(target){
        this.ability("attack");
        target.defend(this.atk);
        if (target.hp < 1){
            this.ability("knockout");
        }
    }
    defend(damage){
        this.ability("defend");
        this.hp -= damage;
        if (this.hp > 0){
            this.ability("hurt");
        } else {
            this.ability("faint");
        }
    }
    buy(){
        this.ability("buy");
    }
    sell(){
        this.ability("sell");
    }
}
