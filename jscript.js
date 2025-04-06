let teams = [
{name:"Special Eleven",matchPlayed:9, wins: 7, draws: 2,losses: 0, goalsFor: 26, goalsAgainst: 6,goalDifference: `+`+20, points: 23 },
{name:"Sait Chads",matchPlayed:7, wins: 6,  draws: 1, losses: 0, goalsFor: 30, goalsAgainst: 5,goalDifference: `+`+25, points: 19 },
{name:"Real State",matchPlayed:7, wins: 5,  draws: 1,losses: 1, goalsFor: 19, goalsAgainst: 4,goalDifference: `+`+15, points: 16 },
{name:"Junoir Special",matchPlayed:9, wins: 3,  draws: 1, losses: 5, goalsFor: 19, goalsAgainst: 21,goalDifference: -2, points: 10 },
{name:"Mabizela",matchPlayed:8, wins: 1,  draws: 5,losses: 2, goalsFor: 9, goalsAgainst: 13,goalDifference: -4, points: 8 },
{name:"Try Again",matchPlayed:9, wins: 2,  draws: 2, losses: 5, goalsFor: 12, goalsAgainst: 19,goalDifference: -7, points: 8 },
{name:"Ababhidlizi",matchPlayed:6, wins: 2,  draws: 1,losses: 3, goalsFor: 8, goalsAgainst: 10,goalDifference: -2, points: 7 },
{name:"Pieters United",matchPlayed:8, wins: 2,  draws: 1 ,losses: 5, goalsFor: 11, goalsAgainst: 13,goalDifference: -2, points: 7 },
{name:"Black Stars",matchPlayed:8, wins: 2,  draws: 0 ,losses: 6, goalsFor: 8, goalsAgainst: 45,goalDifference: -36, points: 6 },
{name:"Vultures",matchPlayed:5, wins: 1,  draws: 0 ,losses: 4, goalsFor: 4, goalsAgainst: 9,goalDifference: -5, points: 3 }];

//Sort teams by points in desceding order
teams.sort((a,b) => b.points - a.points);

//function to display teams in a table

function displayTeams(){
    let tableBody = document.getElementById("team-table-body");
    tableBody.innerHTML = ""; // clear previous content

    //Assign color classes based on position
    debugger;
    teams.forEach((team, index) =>{
    let row = document.createElement("tr");
 
    let colorClass = "far fa-star"; // Default class for teams not in top or last positions
    if (index === 0 || index === 1) colorClass = "fas fa-star blue-star"; // First and second position
    else if (index === 2) colorClass = "fas fa-star orange-star"; // Third position
    else if (index === teams.length - 2) colorClass = "fas fa-star yellow-star"; // Second last
    else if (index === teams.length - 1) colorClass = "fas fa-star red-star"; // Last position
     

    row.innerHTML = `
    
    <td><i class="${colorClass}"></i> 
    ${index + 1} <img src="Empty-Team-Logo.jpg" alt="Team Logo" class="team-logo">
    ${team.name}
    </td>
    <td>${team.matchPlayed}</td>
    <td>${team.wins}</td>
    <td>${team.draws}</td>
    <td>${team.losses}</td>
    <td>${team.goalsFor}</td>
    <td>${team.goalsAgainst}</td>
    <td>${team.goalDifference}</td>
    <td><strong>${team.points}</strong></td>
    <td> - </td> <!-- Placeholder for last 5 matches -->
`;

tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", displayTeams);