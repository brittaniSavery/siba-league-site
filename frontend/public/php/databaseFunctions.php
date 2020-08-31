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
function getCollegeTeamsByRanking($conn)
{
    return mysqli_query($conn, "SELECT * FROM college_teams ORDER BY ranking ASC");
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

function updateUploadDate($conn, $league, $teamId, $date)
{
    $tableName = $league == "pro" ? "pro_teams" : "college_teams";
    $sql = "UPDATE $tableName SET upload_date = ('$date') WHERE id = " . intval($teamId);
    return mysqli_query($conn, $sql);
}
