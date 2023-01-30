# Simulation Internet Basketball Association (SIBA)

## Status - INACTIVE

The fictional basketball league, SIBA, is still going strong! However, this repository for the website is no longer being actively developed. If you want to see the new version, please check out [version 2](https://github.com/brittaniSavery/siba-league-site-v2).

## Description

The Simulation Internet Basketball Association (SIBA) is a fictional basketball league created by my father and me as a way to bond over our love of basketball 🏀 and stats 👩🏾‍🔬. We have two leagues, a professional league and a college league. The pro league consists of 30 teams from around the US and Canada. Players manage their team's finances, trades, draft picks, and team strategies to make the playoffs and ultimately, win the coveted championship. In the college league, choose up to three of the 350+ Division I colleges and universities and recruit, train, and educate young men as you seek a spot in the main tournament or one of the sub-tournaments.

## Motivation

The simulation for the league is handled by the pro and college basketball games from [Wolverine Studios](https://www.wolverinestudios.com/). However, we still needed a place to host the rules, standings, and announcements. My dad enjoys computers and even dibbles with various programs or hardware from time to time. But, websites aren't his strong suit and I work on the on a near-daily basis as my job. So after working with him on the design and basic structure of the website, I got to work.

I decided to use this opportunity to learn more about React, serverless architecture, and graphic design.

## Project Structure

The `frontend` holds the react app which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [React-Bootstrap v4](https://getbootstrap.com/docs/4.6/getting-started/introduction/). In the `public` folder, there is also a folder that contains `.php` files that are used for interacting with the SQL database on Bluehost as well as pulling the updated times from the download files required for the Wolverine Studios games.

The `backend` contains the AWS functions using the [Serverless framework](https://www.serverless.com/).

The `cms` is the content management system used for the news articles written by members of our league. We use [strapi](http://strapi.io/).

## Contributing

If you would like to contribute, great! 😊 I am a one-woman team, so any help given is appreciated. Feel free to use Github Issues for any problems you find or any suggestions you have.

## License

[MIT](https://choosealicense.com/licenses/mit/)
