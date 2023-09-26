import React, { useState, useEffect } from "react"
import {Tooltip as ReactTooltip} from "react-tooltip";

const AllTimeTable = () => {
    const [allDataArray, setAllDataArray] = useState(null);
    const [theTable, setTheTable] = useState(null);
    const [lossesSortStatus, setLossesSortStatus] = useState("none");
    const [winsSortStatus, setWinsSortStatus] = useState("descending");
    const [pointsAgainstSortStatus, setPointsAgainstSortStatus] = useState("none");
    const [winningPercentageSortStatus, setWinningPercentageSortStatus] = useState("none");
    const [losingPercentageSortStatus, setlosingPercentageSortStatus] = useState("none");
    const [pointsForSortStatus, setPointsForSortStatus ] = useState("none");
    const [championshipsSortStatus, setChampionshipsSortStatus ] = useState("none");
    const [playoffsSortStatus, setPlayoffsSortStatus ] = useState("none");
    const [lastSortStatus, setLastSortStatus ] = useState("none");

    let allData = [];
    const totalSeasons = 9;

    const getHeaders = () => {
        return(
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th onClick={sortByWins} className="standingsTableHead" >Wins</th>
                    <th className="standingsTableHead" >Losses</th>
                    <th onClick={sortByWinningPercentage} className="standingsTableHead" >Winning %</th>
                    <th className="standingsTableHead" >Points For</th>
                    <th onClick={sortByPointsAgainst} className="standingsTableHead" >Points Against</th>
                    {/* <th className="standingsTableHead">Points For / Against </th> */}
                    <th className="standingsTableHead" >Championships</th>
                    <th className="standingsTableHead" >Playoff Appearances</th>
                    <th className="standingsTableHead">Playoff Appearance %</th>
                    <th className="standingsTableHead" >Last Place Finishes</th>
                </tr>
        )
    }

    const makeRow = (row) =>{
        let lossID = row.name + "loss";
        let playoffsID = row.name + "yoffs";
        return(
            <tr>
                <td><img src={row.avatar} className="standingsAvatar"/></td>
                <td>{row.name}</td>
                <td>{row.wins}</td>
                <td>{row.losses}</td>
                {makeWinsRatio(row)}
                <td>{row.points_for.toFixed(2)}</td>
                <td>{row.points_against.toFixed(2)}</td>
                {/* <td>{makePointsRatio(row)}</td> */}
                <td data-tip data-tooltip-id={row.name}>{row.championships.length}</td>
                <td data-tip data-tooltip-id={playoffsID} >{row.playoff_appearances.length}</td>
                <td>{(row.playoff_appearances.length / totalSeasons * 100).toFixed(2)}%</td>
                <td data-tip data-tooltip-id={lossID}>{row.last_place_finishes.length}</td>
                <ReactTooltip id={row.name} place="right" effect="solid" wrapper="span">
                    {makeShipsString(row.championships)}
                </ReactTooltip>
                <ReactTooltip id={lossID} place="right" effect="solid" wrapper="span">
                    {makeLastPlacesString(row.last_place_finishes)} 
                </ReactTooltip>
                <ReactTooltip id={playoffsID} place="right" effect="solid" wrapper="span">
                    {makePlayoffsString(row.playoff_appearances)} 
                </ReactTooltip>
            </tr>
        )
    }

    const makeShipsString = data =>{
        let str = "";
        if(data.length === 0){
            str = "None";
        }else{
            for(const win in data){
                if(win == data.length - 1){
                    str += data[win];
                }else{
                    str += data[win];
                    str += ", "; 
                }
            }
        }
        return str;
    }

    const makePlayoffsString = data =>{
        let str = "";
        if(data.length === 0){
            str = "None";
        }else{
            for(const win in data){
                if(win == data.length - 1){
                    str += data[win];
                }else{
                    str += data[win];
                    str += ", "; 
                }
            }
        }
        return str;
    }

    const makeLastPlacesString = data =>{
        let str = "";
        if(data.length === 0){
            str = "None";
        }else{
            for(const loss in data){
                if(loss == data.length - 1){
                    str += data[loss];
                }else{
                    str += data[loss];
                    str += ", "; 
                }
            }
        }
        return str;
    }

    const makePointsRatio = row =>{
        let ratio;
        row.points_for / row.points_against >= 1 ? ratio = <td style={{color: "green"}}>{row.points_for / row.points_against}</td> : ratio = <td style={{color: "red"}}>{row.points_for / row.points_against}</td>; 
        return ratio;
    }

    const makeWinsRatio = row =>{
        let ratio;
        row.winning_percentage >= 1 ? ratio = <td style={{color: "green"}}>{row.winning_percentage.toFixed(2)}</td> : ratio = <td style={{color: "red"}}>{row.winning_percentage.toFixed(2)}</td>; 
        return ratio;
    }

    const setTable = data => {
        let headers = getHeaders();
        let rowsArray = [];
        for(let i in data){
            rowsArray.push(makeRow(data[i])); 
        }
        let table = <table id="allTimeStandingsTable">
                    <tbody>
                        {headers}
                        {rowsArray}
                    </tbody>
        </table>

        return table;
    }

    const resetSortStatus = sortCriteria =>{
        console.log("reset all but " + sortCriteria);
        if(sortCriteria != "losses") { setLossesSortStatus("none")};
        if(sortCriteria != "wins") {setWinsSortStatus("none")};
        if(sortCriteria != "pointsAgainst") {setPointsAgainstSortStatus("none")};
        if(sortCriteria != "winningP") {setWinningPercentageSortStatus("none")};
        if(sortCriteria != "losingP") {setlosingPercentageSortStatus("none")};
        if(sortCriteria != "pointsFor") {setPointsForSortStatus ("none")};
        if(sortCriteria != "champs") {setChampionshipsSortStatus ("none")};
        if(sortCriteria != "playoffs") {setPlayoffsSortStatus ("none")};
        if(sortCriteria != "lasts") {setLastSortStatus ("none")};
    }

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
                allData = [...tempArray];
                setTheTable(setTable(tempArray));     
            })
    }, [])

    const sortByWins = () =>{
        let temp = [...allData]
        if(winsSortStatus === "ascending" || winsSortStatus === "none"){
            temp.sort((a,b) => a.wins - b.wins);
            console.log("win sort desc")
            setAllDataArray(temp);
            setTheTable(setTable(temp)); 
            setWinsSortStatus("descending");
        }else{
            setWinsSortStatus("ascending");
            console.log("win asec")
            temp.sort((a,b) => b.wins - a.wins);
            setAllDataArray(temp);
            setTheTable(setTable(temp)); 
        }
        resetSortStatus("wins");
    }

    const sortByPointsAgainst = () =>{
        let temp = [...allData]
        if(pointsAgainstSortStatus === "ascending" || pointsAgainstSortStatus === "none"){
            temp.sort((a,b) => a.points_against - b.points_against);
            setAllDataArray(temp);
            setTheTable(setTable(temp));
            setPointsAgainstSortStatus("descending");
        }else{
            setPointsAgainstSortStatus("ascending");
            temp.sort((a,b) => b.points_against - a.points_against);
            setAllDataArray(temp);
            setTheTable(setTable(temp));
        }
        resetSortStatus("pointsAgainst");
    }

    const sortByWinningPercentage = () =>{
        let temp = [...allData]
        if(winningPercentageSortStatus === "ascending" || pointsAgainstSortStatus === "none"){
            temp.sort((a,b) => a.winning_percentage - b.winning_percentage);
            setAllDataArray(temp);
            setTheTable(setTable(temp));
            setWinningPercentageSortStatus("descending");
        }else{
            setWinningPercentageSortStatus("ascending");
            temp.sort((a,b) => b.winning_percentage- a.winning_percentage);
            setAllDataArray(temp);
            setTheTable(setTable(temp));
        }
        resetSortStatus("winningP");
    }

    return( 
       <>
        {theTable}
       </>
    )
}

export default AllTimeTable