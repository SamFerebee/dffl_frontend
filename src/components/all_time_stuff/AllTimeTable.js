import React, { useState, useEffect } from "react"

const AllTimeTable = () => {
    const [allDataArray, setAllDataArray] = useState(null);
    const [winsSortStatus, setWinsSortStatus] = useState("none");
    const [pointsAgainstSortStatus, setPointsAgainstSortStatus] = useState("none");

    useEffect(()=>{
        fetch("http://localhost:3000/get_all_time_data")
            .then(r=>r.json())
            .then(data=>{
                let tempArray = [];
                for(const entry in data){
                    tempArray.push(data[entry]);
                }
                tempArray.sort((a,b) => b.wins - a.wins);
                setAllDataArray(tempArray);
                console.log(tempArray);
            })
    }, [])

    const sortByWins = () =>{
        let temp = [...allDataArray]
        if(winsSortStatus === "ascending" || winsSortStatus === "none"){
            temp.sort((a,b) => b.wins - a.wins);
            setAllDataArray(temp);
            setWinsSortStatus("descending");
            setPointsAgainstSortStatus("none");
        }else{
            temp.sort((a,b) => a.wins - b.wins);
            setAllDataArray(temp);
            setWinsSortStatus("none");
        }
    }

    const sortByPointsAgainst = () =>{
        let temp = [...allDataArray]
        if(pointsAgainstSortStatus === "ascending" || pointsAgainstSortStatus === "none"){
            temp.sort((a,b) => b.points_against - a.points_against);
            setAllDataArray(temp);
            setPointsAgainstSortStatus("descending");
            setWinsSortStatus("none");
        }else{
            temp.sort((a,b) => a.points_against - b.points_against);
            setAllDataArray(temp);
            setPointsAgainstSortStatus("ascending");
            setWinsSortStatus("none");
        }
    }

    return( 
        <table id ="homeStandingsTable">
            <tbody>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th onClick={sortByWins}>Wins</th>
                    <th>Losses</th>
                    <th>Winning Percentage</th>
                    <th>Points For</th>
                    <th onClick={sortByPointsAgainst}>Points Against</th>
                    <th>Championships</th>
                    <th>Playoff Appearances</th>
                    <th>Last Place Finishes</th>
                </tr>
                <tr>
                    <td><img src={allDataArray[0].avatar}/></td>
                    <td>{allDataArray[0].name}</td>
                    <td>{allDataArray[0].wins}</td>
                    <td>{allDataArray[0].losses}</td>
                    <td>{allDataArray[0].winning_percentage}</td>
                    <td>{allDataArray[0].points_for}</td>
                    <td>{allDataArray[0].points_against}</td>
                    <td>{allDataArray[0].championships.length}</td>
                    <td>{allDataArray[0].playoff_appearances.length}</td>
                    <td>{allDataArray[0].last_place_finishes.length}</td>
                </tr> 
                <tr>
                    <td><img src={allDataArray[1].avatar}/></td>
                    <td>{allDataArray[1].name}</td>
                    <td>{allDataArray[1].wins}</td>
                    <td>{allDataArray[1].losses}</td>
                    <td>{allDataArray[1].winning_percentage}</td>
                    <td>{allDataArray[1].points_for}</td>
                    <td>{allDataArray[1].points_against}</td>
                    <td>{allDataArray[1].championships.length}</td>
                    <td>{allDataArray[1].playoff_appearances.length}</td>
                    <td>{allDataArray[1].last_place_finishes.length}</td>
                </tr>
                <tr>
                    <td><img src={allDataArray[2].avatar}/></td>
                    <td>{allDataArray[2].name}</td>
                    <td>{allDataArray[2].wins}</td>
                    <td>{allDataArray[2].losses}</td>
                    <td>{allDataArray[2].winning_percentage}</td>
                    <td>{allDataArray[2].points_for}</td>
                    <td>{allDataArray[2].points_against}</td>
                    <td>{allDataArray[2].championships.length}</td>
                    <td>{allDataArray[2].playoff_appearances.length}</td>
                    <td>{allDataArray[2].last_place_finishes.length}</td>
                </tr> 
            </tbody>
        </table>
    )
}

export default AllTimeTable