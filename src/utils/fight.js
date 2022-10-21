export class Fight{
    turn = 0;
    result;
    playing = true;
    constructor(playerTeam, enemyTeam){
        this.playerTeam = this.populatePets([...playerTeam]);
        this.enemyTeam = this.populatePets([...enemyTeam]);
    }
    populatePets(teamArray){
        const temp = [];
        teamArray.forEach((spot)=> {if (spot.pet !== undefined) temp.push(spot.pet)})
        return temp;
    }

    main(){
        this.useAbilities("start");
        while(this.playerTeam.length > 0 && this.enemyTeam.length > 0){
            this.playRound();
        }
        this.pickWinner();
        this.playing = false;
    }
    playRound(){
       this.fightPets();
       this.useAbilities("hurt");
       this.useAbilities("faint");
       this.useAbilities("knockout");
       this.eliminateFainted();
    }
    fightPets(){
        this.useAbilities("beforeAttack", false);
        this.playerTeam[0].attack(this.enemyTeam[0]);
        this.enemyTeam[0].attack(this.playerTeam[0]);

    }
    useAbilities(trigger, targetAll = true, petIndex = 0){
        if (targetAll){
            this.playerTeam.forEach((pet)=> pet.ability(trigger, this.playerTeam, this.enemyTeam, pet.level));
            this.enemyTeam.forEach((pet)=> pet.ability(trigger, this.enemyTeam, this.playerTeam, pet.level));
        } else {
            let myPet = this.playerTeam[petIndex];
            let theirPet = this.enemyTeam[petIndex];
            myPet.ability(trigger, this.playerTeam, this.enemyTeam, myPet.level);
            theirPet.ability(trigger, this.enemyTeam, this.playerTeam, theirPet.level);
        }
    }
    eliminateFainted(){
        let newPlayerTeam = [];
        let newEnemyTeam = [];
        this.playerTeam.forEach(pet => {if (pet.hp > 0) newPlayerTeam.push(pet)});
        this.enemyTeam.forEach(pet => {if (pet.hp > 0) newEnemyTeam.push(pet)});
        this.playerTeam = newPlayerTeam;
        this.enemyTeam = newEnemyTeam;
    }
    pickWinner(){
        let playerLength = this.playerTeam.length;
        let enemyLength = this.enemyTeam.length;
        if (playerLength === 0 && enemyLength === 0){
            result = 0;
        } else if (playerLength > 0 && enemyLength === 0){
            result = 1;
        } else if (playerLength === 0 && enemyLength > 0){
            result = -1;
        } 
    }
}