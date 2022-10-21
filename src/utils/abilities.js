import { pickRandomTeamMember } from "./utils"

export function snipe(trigger){
    if (trigger === "start"){
        const target = pickRandomTeamMember(enemyTeam); 
        target.hp -= hp;
    }
}

export function faint(friendlyTeam, enemyTeam, turn){


}