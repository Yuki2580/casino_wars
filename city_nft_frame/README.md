# City NFT mint frame.

You can mint one of the NFT among Las Vegas, Macau, Monte Carlo.
You can hold only one NFT and cannot mint 2 or 3 NFT.
This NFT can be used to enter our main Casino Wars frame.

This frame is deployed to https://casino-wars-nft-frame.vercel.app

Used Technlogies
* Neynar API
* Alchemy API
* TypeScript
* Vercel
* Postgres

If you want to run our frame, enroll and create accounts of neynar api, alchemy api and vercel.

* https://neynar.com/
* https://www.alchemy.com/
* https://vercel.com/

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
```shell
npm install
npm run dev
```

4. go to the "BASE_URL/api"
You can check how our frame works in https://warpcast.com/~/developers/frames
Enter the "https://casino-wars-nft-frame.vercel.app/api" 
