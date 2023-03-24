function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1      
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// console.log(gameObject());

// a function that returns the name of the home team
function homeTeamName() {
    let obj = gameObject()["home"]["teamName"];
    return obj;
}

// console.log(homeTeamName());

// Build a function, numPointsScored that takes in an argument of a player's name 
function numPointsScored(playerName) {
    //  save the result of the gameObject function into a variable, named game
    let game = gameObject();
    // loop through game to find the game keys
    for(let gameKey in game) {
        // save the result of game keys into a variable, named teamObj
        let teamObj = game[gameKey];
            // loop through teamObj to find the team keys
        for(let teamKey in teamObj){
            // check if teamKey is players
            if (teamKey === "players"){
                // save the result of teamKey players into a variable, named data 
                let data = teamObj[teamKey];
                // loop through data to find the name of the player
                for (let playerObj in data) {
                    // check if player name is matched
                    if (playerObj === playerName) {
                        // returns the number of points scored for that player.
                        return data[playerName]["points"];
                    }
                }
            }
        }
    }
}

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
    //  save the result of the gameObject function into a variable, named game
    let game = gameObject();
    // loop through game to find the game keys
    for(let gameKey in game) {
        // save the result of game keys into a variable, named teamObj
        let teamObj = game[gameKey];
            // loop through teamObj to find the team keys
        for(let teamKey in teamObj){
            // check if teamKey is players
            if (teamKey === "players"){
                // save the result of teamKey players into a variable, named data 
                let data = teamObj[teamKey];
                // loop through data to find the name of the player
                for (let playerObj in data) {
                    // check if player name is matched
                    if (playerObj === playerName) {
                        // returns the shoes size of that player.
                        return data[playerName]["shoe"];
                    }
                }
            }
        }
    }
}

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
    let game = gameObject();
    // loop through game to find game keys
    for (let gameKey in game) {
        // save the result of game keys into a variable, named teamObj
        let teamObj = game[gameKey];
        // loop through teamObj
        for (let teamKey in teamObj) {
            // check if team name is matched
            if ((teamObj[teamKey]) === teamName) {
                return Object.values(teamObj["colors"]);
            }
        }
    }
}

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
    let game = gameObject();
    let arrayOfTheTeamName = [];

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === "teamName") {
                arrayOfTheTeamName.push(teamObj[teamKey])
            }
        }
    }
    return arrayOfTheTeamName;
}

// Build a function, playerNumbers, 
// that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
    let game = gameObject();
    let jerseyNumber = [];

    for (let gameKey in game) {
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            if (teamObj[teamKey] === teamName) {
                let data = teamObj["players"];

                for(let playerObj in data) {
                    jerseyNumber.push(data[playerObj]["number"]);
                }
                return jerseyNumber;
            }
        }
    }
}

// Build a function, playerStats, 
//that takes in an argument of a player's name and returns a object of that player's stats
function playerStats(playerName) {
    //  save the result of the gameObject function into a variable, named game
    let game = gameObject();
    // loop through game to find the game keys
    for(let gameKey in game) {
        // save the result of game keys into a variable, named teamObj
        let teamObj = game[gameKey];
            // loop through teamObj to find the team keys
        for(let teamKey in teamObj){
            // check if teamKey is players
            if (teamKey === "players"){
                // save the result of teamKey players into a variable, named data 
                let data = teamObj[teamKey];
                // loop through data to find the name of the player
                for (let playerObj in data) {
                    // check if player name is matched
                    if (playerObj === playerName) {
                        // returns the shoes size of that player.
                        return data[playerName];
                    }
                }
            }
        }
    }
}

// Build a function, bigShoeRebounds, 
// that will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds() {
    let maxShoeSize = 0;
    let playerWithMaxShoeSize;
    let game = gameObject();

    // loop through game to find the game keys
    for(let gameKey in game) {
        // save the result of game keys into a variable, named teamObj
        let teamObj = game[gameKey];
            // loop through teamObj to find the team keys
        for(let teamKey in teamObj){
            // check if teamKey is players
            if (teamKey === "players"){
                // save the result of teamKey players into a variable, named data 
                let data = teamObj[teamKey];
                // loop through data 
                for (let playerObj in data){
                    if (shoeSize(playerObj) > maxShoeSize) {
                        maxShoeSize = shoeSize(playerObj);
                        playerWithMaxShoeSize = playerObj;
                    }
                }
            }
        }
    }
    // console.log(playerWithMaxShoeSize, maxShoeSize);
    return playerStats(playerWithMaxShoeSize)["rebounds"]
}

// Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    let mostPointsScored = 0;
    let game = gameObject();

    for(let gameKey in game) {
        let teamObj = game[gameKey];
        for(let teamKey in teamObj) {
            if(teamKey === "players"){
                let data = teamObj[teamKey];
                for(let playerObj in data) {
                    if (numPointsScored(playerObj) > mostPointsScored) {
                        mostPointsScored = numPointsScored(playerObj);
                    }
                }
            }
        }
    }
    return mostPointsScored;
}

// Which team has the most points? Call the function winningTeam.
function winningTeam() {
    let game = gameObject();
    let homePoint = 0;
    let awayPoint = 0;

    for(let gameKey in game) {
        let pointScored = 0;
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            if(teamKey === "players"){
                let data = teamObj[teamKey];

                for(let playerObj in data) {
                    pointScored += numPointsScored(playerObj);
                }
            }
        }
        if (game.home === game[gameKey]) {
            homePoint = pointScored;
        }
        else {
            awayPoint = pointScored;
        }
    }
    if (homePoint > awayPoint) {
        return game.home.teamName;
    }
    else {
        return game.away.teamName;
    }
}

// Which player has the longest name? Call the function playerWithLongestName
function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
  
    for (let gameKey in game) {
      let teamObj = game[gameKey];
  
      for (let teamKey in teamObj) {
        if (teamKey === "players") {
          let data = teamObj[teamKey];
  
          for (let playerObj in data) {
            let playerName = playerObj;
            debugger
            if (playerName.length > longestName.length) {
                debugger
                longestName = playerName;
            }
          }
        }
      }
    }
    return longestName;
  }
  
// Write a function that returns true if the player with the longest name had the most steals. 
// Call the function doesLongNameStealATon.
function doesLongNameStealATon() {
    let mostSteals = 0;
    let mostStealPlayerName = "";
    let game = gameObject();

    for(let gameKey in game) {
        let teamObj = game[gameKey];
        for(let teamKey in teamObj) {
            if(teamKey === "players"){
                let data = teamObj[teamKey];
                for(let playerObj in data) {
                    if (playerStats(playerObj)["steals"] > mostSteals) {
                        mostSteals = playerStats(playerObj)["steals"];
                        mostStealPlayerName = playerObj;
                    }
                }
            }
        }
    }

    if ( mostStealPlayerName === playerWithLongestName()){
        return true;
    }
}          
            

            
console.log("Home team name:", homeTeamName());
console.log("Points scored:", numPointsScored("Mason Plumlee"));
console.log("Shoes size:", shoeSize("Mason Plumlee"));
console.log("Team colors:", teamColors("Brooklyn Nets")  );
console.log("Array of the team names:", teamNames());
console.log("Array of the jersey number's:", playerNumbers("Brooklyn Nets"))
console.log("Player stat:", playerStats("Mason Plumlee"));
console.log("Big shoes rebound:", bigShoeRebounds());
console.log("Most point scored:", mostPointsScored());
console.log("The winner is:", winningTeam());
console.log("Player with longest name:", playerWithLongestName())
console.log("Did the longest name player have the most steal ?:", doesLongNameStealATon());
