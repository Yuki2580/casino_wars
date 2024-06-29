# Casino Wars Project

Our project is a city-based and personal-based leaderboard point earning SocialFi game framework in Warpcast Frame. To play these games, you must own a city NFT, which can be minted through the city NFT frame. Once you have a city NFT, you are eligible to play three games: Roulette, Rock Paper Scissors (RPS), and Coin Flip, each once per day.



This project consists of several applications below

1. NFT contract
2. IPFS image and metadata files for NFT
3. City NFT mint frame
4. Casino Wars main game frame
5. Leaderboard frame
6. PostgreSQL


Technlogies to develop

- Neynar API
- Alchemy API
- TypeScript
- Vercel
- PostgreSQL
- Solidity
- Pinata

If you want to run our frame, enroll and create accounts of neynar api, alchemy api and vercel

- https://neynar.com/
- https://www.alchemy.com/
- https://vercel.com/

You can check how the frame works in frame validator below:

- https://warpcast.com/~/developers/frames

We created a "user_data" table in PostgresSQL below:
| id | fid | wallet_address | point | city | game1_tried_at | game2_tried_at | game3_tried_at |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | 1389 | 0xb***** | 100 | 0 | TIMESTAMP | TIMESTAMP | TIMESTAMP |
| 2 | 2398 | 0xa***** | 1200 | 1 | TIMESTAMP | TIMESTAMP | TIMESTAMP |

Navigate to each directory and follow the instructions provided in each README file to run the code.