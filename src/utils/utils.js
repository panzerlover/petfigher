export function pickRandomTeamMember(teamArray){
    const tempArr = [];
    teamArray.forEach((spot)=> {if (spot.pet !== null) tempArr.push(spot.pet)});
    const random = Math.floor(Math.random()* tempArr.length);
    return tempArr[random];
}