function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "playerName": "Alan Anderson",
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "playerName": "Reggie Evans",
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "playerName": "Brook Lopez",
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "playerName": "Mason Plumlee",
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "playerName": "Jason Terry",
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "playerName": "Jeff Adrien",
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "playerName": "Bismak Biyombo",
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "playerName": "DeSagna Diop",
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "playerName": "Ben Gordon",
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "playerName": "Brendan Haywood",
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

function teams(){
    return Object.values(gameObject());
}

function players(){
    const homePlayers = teams()[0].players
    const awayPlayers = teams()[1].players
    return Object.assign(homePlayers,awayPlayers)

    teams.map
}

function findPlayer(name){
    return players()[name]
}

function numPointsScored(name){
    return findPlayer(name)["points"]
}

function shoeSize(name){
    return findPlayer(name)["shoe"]
}

function findTeam(name){
    return teams().find(team => team.teamName == name)
}

function teamColors(name){
    return findTeam(name).colors
}

function teamNames(){
    return teams().map(team => team.teamName)
}

function playerNumbers(team){
    return Object.values(findTeam(team).players).map(player => player.number)
}

function playerStats(name){
    let allStats = findPlayer(name)
    delete allStats.playerName
    return allStats
}

function allPlayerStats(){
    return Object.values(players())
}
function bigShoeRebounds(){
    return allPlayerStats().reduce((acc,player) => {
        return (player.shoe > acc.shoe) ? player : acc
    },{shoe: -1}).rebounds
}

function mostPointsScored(){
    return allPlayerStats().reduce((acc,player) => {
        return (player.points > acc.points) ? player : acc
    },{points: -1}).playerName
}

function winningTeam(){
    let homePoints = Object.values(teams()[0].players).reduce((acc,player) => {
        return acc + player.points
    },0)
    let awayPoints = Object.values(teams()[1].players).reduce((acc,player) => {
        return acc + player.points
    },0)
    return (homePoints > awayPoints) ? gameObject()['home'].teamName : gameObject()['away'.teamName]
}

function playerWithLongestName(){
    return allPlayerStats().reduce((acc,player) => {
        return (player.playerName.length > acc.playerName.length) ? player : acc
    },{playerName:""}).playerName
}

function doesLongNameStealATon(){
    let playerWithMostSteals = allPlayerStats().reduce((acc,player) => {
        return (player.steals > acc.steals) ? player : acc
    },{steals:-1}).playerName
    return (playerWithLongestName() == playerWithMostSteals) ? true : false
}