## Assignment

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Requirements

- use `jest` and `supertest` to write the tests.
- Your API must be able to **create** and **delete** a _resource_ of your choosing.
- Write a minimum of two tests per route handler.

# Planning

## Features

-resources `nba teams` & `players`
-list of teams
-list of players
-add player to team
-delete players FROM TEAM
-list showing players BY TEAM


| Feature                  | Method | URL                         |
| :---------------------   | :----- | :-------------------------- |
| List teams               | GET    | /api/teams                  |
| View team players        | GET    | /api/teams/:id/players      |
| List of players          | GET    | /api/players                |
| Add a player to team     | POST   | /api/team/:id               |
| delete players from team | DELETE | /api/teams/:id/players/:id  |

## Teams

-id
-name


## Players

-id
-name
-position
-team_id(if exists, id of team player is assigned to)
