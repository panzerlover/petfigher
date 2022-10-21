export class Fight{
    turn = 0;
    constructor(playerTeam, enemyTeam){
        this.playerTeam = this.populatePets([...playerTeam]);
        this.enemyTeam = this.populatePets([...enemyTeam]);
    }
    populatePets(teamArray){
        const temp = [];
        teamArray.forEach((spot)=> {if (spot.pet !== undefined) temp.push(spot.pet)})
        return temp;
    }
    playRound(){
       this.fightPets();
       this.eliminateFainted();
        this.turn += 1;
    }
    fightPets(){
        this.playerTeam[0].attack(this.enemyTeam[0]);
        this.enemyTeam[0].attack(this.playerTeam[0]);

    }
    useAbilities(trigger){
        this.playerTeam.forEach((pet)=> pet.ability(this.playerTeam, this.enemyTeam, trigger));
        this.enemyTeam.forEach((pet)=> pet.ability(this.enemyTeam, this.playerTeam, trigger));
        this.eliminateFainted();
    }
    eliminateFainted(){

    }


}