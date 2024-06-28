Welcome to the Casino Wars main game frame!

To play these games, you must own a city NFT, which can be minted through the city NFT frame. Once you have a city NFT, you are eligible to play three games: Roulette, Rock Paper Scissors (RPS), and Coin Flip, each once per day.

In two of these games, you have a 50% chance of winning and can challenge the game up to three consecutive times. Each consecutive win doubles your points. You can choose to exit the game midway and keep the points you've accumulated up to that point. However, if you lose midway, you won't earn any points.

In RPS, you have a one-third chance of winning, but the points you earn are higher. Accumulate points and compete with other users and cities for the top scores!

Good luck!
--------------------------------------------------------------------------

Used Technlogies

- Neynar API
- Alchemy API
- TypeScript
- Vercel
- Postgres

If you want to run our frame, enroll and create accounts of neynar api, alchemy api and vercel.

- https://neynar.com/
- https://www.alchemy.com/
- https://vercel.com/

Please follow the steps below to start the application.

1. change BASE_URL in config.ts
2. create files, ".env.local" and ".env.development.local"
   In ".env.development.local", set

```
POSTGRES_URL
POSTGRES_PRISMA_URL
POSTGRES_URL_NO_SSL
POSTGRES_URL_NON_POOLING
POSTGRES_USER
POSTGRES_HOST
POSTGRES_DATABASE
```

In ".env.local", set

```
NEYNAR_API_KEY
ALCHEMY_API_KEY
```

3. run the command

```
npm install
npm run dev
```

4. go to the "BASE_URL/api"
