<?php

function setupDatabase()
{
    $serverName = getenv("SIBA_SERVER");
    $userName = getenv("SIBA_USERNAME");
    $password = getenv("SIBA_PASSWORD");
    $db = getenv("SIBA_DATABASE");

    return mysqli_connect($serverName, $userName, $password, $db);
}

function getProTeamsByName($conn)
{
    return mysqli_query($conn, "SELECT * FROM pro_teams ORDER BY name");
}
function getCollegeTeamsByName($conn)
{
    return mysqli_query($conn, "SELECT * FROM college_teams ORDER BY name");
}

function insertProTeam($conn, $team)
{
    $sql = "INSERT INTO pro_teams (name,logo,owner) VALUES ('$team->name','$team->logo','$team->owner')";
    return mysqli_query($conn, $sql);
}

function insertCollegeTeam($conn, $team)
{
    $sql = "INSERT INTO pro_teams (name,logo,owner,ranking) VALUES ('$team->name','$team->logo','$team->owner')";
    return mysqli_query($conn, $sql);
}

function updateUploadDate($conn, $league, $teamId)
{
    $updatedDate;
    $tableName = $league == "pro" ? "pro_teams" : "college_teams";
    $updateSql = "UPDATE $tableName SET upload_date = UTC_TIMESTAMP WHERE id = " . intval($teamId);

    if (mysqli_query($conn, $updateSql)) {
        $selectSql = mysqli_query($conn, "SELECT upload_date FROM $tableName WHERE id = " . intval($teamId));
        while ($row = mysqli_fetch_assoc($selectSql)) {
            $updatedDate = $row["upload_date"];
        }
        return $updatedDate;
    } else {
        return false;
    }
}
