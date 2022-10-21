import { pickRandomTeamMember } from "./utils"

export function snipe(trigger, friendlyTeam, enemyTeam, level){
    if (trigger === "start"){
        const target = pickRandomTeamMember(enemyTeam); 
        target.defend(level * 2);
    }
}

export function addHealthOnFaint(trigger, friendlyTeam, enemyTeam, level){
    if (trigger === "faint" && this.hp < 1){
        const target = pickRandomTeamMember(friendlyTeam);
        target.hp += level;
        target.atk += level * 2;
    }
}

export function explodeOnFaint(trigger, friendlyTeam, enemyTeam, level){
    if (trigger === "faint" && this.hp < 1){
        enemyTeam.foreach(pet => {pet.hp -= level * 2})
    }
}

export function gainAttackOnHurt(trigger, friendlyTeam, enemyTeam, level){
    if (trigger === "hurt" && this.hp > 0){
        this.atk += level * 2;
    }
}