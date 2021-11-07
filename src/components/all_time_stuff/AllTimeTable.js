import React, { useState, useEffect } from "react"

const AllTimeTable = () => {
    const [allDataArray, setAllDataArray] = useState([]);
    const [winsSortStatus, setWinsSortStatus] = useState("none");
    const [pointsAgainstSortStatus, setPointsAgainstSortStatus] = useState("none");
    const [theTable, setTheTable] = useState(null);

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
                setTheTable( <table id ="allTimeStandingsTable">
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
                        <td><img src={tempArray[0].avatar}/></td>
                        <td>{tempArray[0].name}</td>
                        <td>{tempArray[0].wins}</td>
                        <td>{tempArray[0].losses}</td>
                        <td>{tempArray[0].winning_percentage}</td>
                        <td>{tempArray[0].points_for}</td>
                        <td>{tempArray[0].points_against}</td>
                        <td>{tempArray[0].championships.length}</td>
                        <td>{tempArray[0].playoff_appearances.length}</td>
                        <td>{tempArray[0].last_place_finishes.length}</td>
                    </tr> 
                    <tr>
                        <td><img src={tempArray[1].avatar}/></td>
                        <td>{tempArray[1].name}</td>
                        <td>{tempArray[1].wins}</td>
                        <td>{tempArray[1].losses}</td>
                        <td>{tempArray[1].winning_percentage}</td>
                        <td>{tempArray[1].points_for}</td>
                        <td>{tempArray[1].points_against}</td>
                        <td>{tempArray[1].championships.length}</td>
                        <td>{tempArray[1].playoff_appearances.length}</td>
                        <td>{tempArray[1].last_place_finishes.length}</td>
                    </tr>
                    <tr>
                        <td><img src={tempArray[2].avatar}/></td>
                        <td>{tempArray[2].name}</td>
                        <td>{tempArray[2].wins}</td>
                        <td>{tempArray[2].losses}</td>
                        <td>{tempArray[2].winning_percentage}</td>
                        <td>{tempArray[2].points_for}</td>
                        <td>{tempArray[2].points_against}</td>
                        <td>{tempArray[2].championships.length}</td>
                        <td>{tempArray[2].playoff_appearances.length}</td>
                        <td>{tempArray[2].last_place_finishes.length}</td>
                    </tr> 
                </tbody>
            </table>)
            })
    }, [])

    const sortByWins = () =>{
        let temp = [...allDataArray]
        if(winsSortStatus === "ascending" || winsSortStatus === "none"){
            temp.sort((a,b) => b.wins - a.wins);
            setAllDataArray(temp);
            setTheTable( <table id ="allTimeStandingsTable">
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
                        <td><img src={temp[0].avatar}/></td>
                        <td>{temp[0].name}</td>
                        <td>{temp[0].wins}</td>
                        <td>{temp[0].losses}</td>
                        <td>{temp[0].winning_percentage}</td>
                        <td>{temp[0].points_for}</td>
                        <td>{temp[0].points_against}</td>
                        <td>{temp[0].championships.length}</td>
                        <td>{temp[0].playoff_appearances.length}</td>
                        <td>{temp[0].last_place_finishes.length}</td>
                    </tr> 
                    <tr>
                        <td><img src={temp[1].avatar}/></td>
                        <td>{temp[1].name}</td>
                        <td>{temp[1].wins}</td>
                        <td>{temp[1].losses}</td>
                        <td>{temp[1].winning_percentage}</td>
                        <td>{temp[1].points_for}</td>
                        <td>{temp[1].points_against}</td>
                        <td>{temp[1].championships.length}</td>
                        <td>{temp[1].playoff_appearances.length}</td>
                        <td>{temp[1].last_place_finishes.length}</td>
                    </tr>
                    <tr>
                        <td><img src={temp[2].avatar}/></td>
                        <td>{temp[2].name}</td>
                        <td>{temp[2].wins}</td>
                        <td>{temp[2].losses}</td>
                        <td>{temp[2].winning_percentage}</td>
                        <td>{temp[2].points_for}</td>
                        <td>{temp[2].points_against}</td>
                        <td>{temp[2].championships.length}</td>
                        <td>{temp[2].playoff_appearances.length}</td>
                        <td>{temp[2].last_place_finishes.length}</td>
                    </tr> 
                </tbody>
            </table>)
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
       <>
        {theTable}
       </>
    )
}

export default AllTimeTable