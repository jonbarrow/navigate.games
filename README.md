# navigate.games

Open source interactive game map viewer for Mario Kart World

## Features

- Track progress, no account needed
- Hide POIs by type to reduce clutter
- Click anywhere on the map to suggest new POIs
- Each POI has (WIP, not all POIs will have all this data at the moment):
	- A preview image showing the POI in the game world
	- A video showing how to complete/obtain the POI
	- A description of what the POI task is (if applicable)
	- POI reward information (if applicable, WIP)

## Contributing (general)

The same general contribution styles/guidelines as found in the Pretendo Network project are in use here (https://github.com/PretendoNetwork/.github/tree/master/.github). As a small general overview:

- Please keep commits focused. For example, if adding multiple POIs please do not create multiple POIs in a single commit
- We use the [Conventional Commits](https://conventionalcommits.org) commit message syntax
- Please keep PRs focused. Multiple tasks should be in multiple PRs. Adding multiple POIs in a single PR is fine, within reason, however changes like style updates, bug fixes, POI updates, etc. should all be in different commits
- Please make an issue request if you would like to work on a new feature. While PRs can be made regardless, and may be accepted, opening an issue to discuss a feature request before working on it saves time/effort on both ends and increases the chances of a feature being merged

## Contributing POIs (points of interest)

To contribute POIs, click anywhere in the world map and select a POI type. If the type is not listed, pick any type. Fill out the resulting GitHub issue template, changing what needs to be changed, and submit. If possible, please also provide a high-resolution screenshot of the POI in the game world where the POI is clearly visible, as well as a high-quality video showing how to obtain the POI if it is a collectable or how to complete the task if the POI is a mission, such as through the Switch 2's built in screenshot/recording feature. If the POI is a mission, please also include a description of what the task is. If a POI gives an extra reward, such as a sticker, please also include this information as well if possible.

Not all extra information (such as images and videos) is 100% necessary, however it is greatly appreciated as it speeds up completing the map.

Once the POI has been verified in game, it will be added to the map. You may create a pull request if you wish prior to the POI being verified, so that it is ready beforehand, but this is not necessary.

## Updating POIs

Not all POIs have all possible information at the moment. If you see a POI which is missing data or has incorrect data, please feel free to open a pull request to add/fix the missing/incorrect information. Additionally, POI locations are approximated by hand using the limited in-game camera. If a POI is in an incorrect location, please feel free to update it/

## Images

Images of POIs should, ideally, be from before completion (still blue). If a POI is already completed (and is now grey) this is fine. If you see a POI image which is grey, and are able to get a new one which is blue, please submit a pull request to replace it.

Images of rewards should have their backgrounds removed to the best of your ability. There are many background removal tools online which may pose useful if you are unable to do so yourself.

## Running locally

Install [NodeJS](https://nodejs.org) and [git](https://git-scm.com)

```
git clone https://github.com/jonbarrow/navigate.games

cd navigate.games

npm i

npm run dev
```

The server is now listening at https://localhost:3000. Set `NAVIGATE_GAMES_PORT` to change the port. `.env` files supported