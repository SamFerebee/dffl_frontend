import React, { useState, useEffect } from "react"

const StandingsTable = () => {
    const [allData, setAllData] = useState(null);
    const [theTableData, setTheTableData] = useState(null);
    const [rankSortStatus, setRankSortStatus] = useState("descending");
    const [winSortStatus, setWinSortStatus] = useState("none");
    const [lossSortStatus, setLossSortStatus] = useState("none");
    const [pointsForSortStatus, setPointsForSortStatus] = useState("none");
    const [pointsAgainstSortStatus, setPointsAgainstSortStatus] = useState("none");
   


    useEffect(()=>{
        fetch("http://localhost:3000/get_season_data")
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                data.sort((a,b)=> a.rank - b.rank);
                setAllData(data);
                let temp = [];
                for(let user in data){
                    let t = <tr key={data[user].name}>
                        <td>{data[user].rank}</td>
                        <td><img src={data[user].avatar} className="standingsAvatar"/></td>
                        <td>{data[user].name}</td>
                        <td>{data[user].wins}</td>
                        <td>{data[user].losses}</td>
                        <td>{data[user].points_for}</td>
                        <td>{data[user].points_against}</td>
                    </tr>
                    temp.push(t);
                }
                setTheTableData(temp);
            })
    }, [])

    const sortByRank = e =>{
        if(rankSortStatus === "descending"){
            setRankSortStatus("ascending");
            setWinSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> b.rank - a.rank);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }else{
            setRankSortStatus("descending");
            setWinSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> a.rank - b.rank);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }
    }

    const sortByWins = e => {
        if(winSortStatus === "descending"){
            setWinSortStatus("ascending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> b.wins - a.wins);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }else{
            setWinSortStatus("descending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> a.wins - b.wins);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }
    }

    const sortByLosses = e =>{
        if(lossSortStatus === "descending"){
            setLossSortStatus("ascending");
            setRankSortStatus("none");
            setWinSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> b.losses - a.losses);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }else{
            setLossSortStatus("descending");
            setRankSortStatus("none");
            setWinSortStatus("none");
            setPointsForSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> a.losses - b.losses);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }
    }

    const sortByPoints = e => {
        if(pointsForSortStatus === "descending"){
            setPointsForSortStatus("ascending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setWinSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> b.points_for - a.points_for);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }else{
            setPointsForSortStatus("descending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setWinSortStatus("none");
            setPointsAgainstSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> a.points_for - b.points_for);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }
    }

    const sortByPointsAgainst = e =>{
        if(pointsAgainstSortStatus === "descending"){
            setPointsAgainstSortStatus("ascending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setWinSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> b.points_against - a.points_against);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }else{
            setPointsAgainstSortStatus("descending");
            setRankSortStatus("none");
            setLossSortStatus("none");
            setPointsForSortStatus("none");
            setWinSortStatus("none");
            let temp = [...allData];
            temp.sort((a,b)=> a.wins - b.wins);
            let tempArr = [];
            for(let user in temp){
                let t = <tr key={temp[user].name}>
                        <td>{temp[user].rank}</td>
                        <td><img src={temp[user].avatar} className="standingsAvatar"/></td>
                        <td>{temp[user].name}</td>
                        <td>{temp[user].wins}</td>
                        <td>{temp[user].losses}</td>
                        <td>{temp[user].points_for}</td>
                        <td>{temp[user].points_against}</td>
                    </tr>
                    tempArr.push(t);
            }
            setTheTableData(tempArr);
        }
    }

    return(
        <table id ="homeStandingsTable">
            <tbody>
                <tr>
                    <th className="standingsTableHead" onClick={sortByRank}>Rank</th>
                    <th></th>
                    <th>Name</th>
                    <th className="standingsTableHead" onClick={sortByWins}>Wins</th>
                    <th className="standingsTableHead" onClick={sortByLosses}>Losses</th>
                    <th className="standingsTableHead" onClick={sortByPoints}>Points For</th>
                    <th className="standingsTableHead" onClick={sortByPointsAgainst}>Points Against</th>
                </tr>
                    {theTableData}
            </tbody>
        </table>
    )
}

export default StandingsTable