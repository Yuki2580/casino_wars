/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog';
import { handle } from 'frog/next';
import { BASE_URL } from '../../config';
import { neynar } from 'frog/middlewares';
import { sql } from '@vercel/postgres';

const neynarMiddleware = neynar({
  apiKey: process.env.NEYNAR_API_KEY ?? '',
  features: ['interactor', 'cast'],
});

const app = new Frog({
  assetsPath: '/',
  imageAspectRatio: '1:1',
  basePath: '/api',
});

async function fetchNFTData(owner: string) {
  // las vegas, macau, monte carlo
  const contract_addresses = [
    '0x693F24A8D3a3DEC819C55875ccafB462bc4Fe00c',
    '0x1F82F19Adc76e65483d5B02f0226ccc2d0d9C90c',
    '0xfbfa3b21ABDfD639929406195Cf043fad6Fda91C',
  ];
  var status = 3;

  for (const [index, address] of contract_addresses.entries()) {
    const url = `https://base-sepolia.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}/getNFTsForOwner?owner=${owner}&contractAddresses[]=${address}&withMetadata=true&pageSize=100`;

    const options = { method: 'GET', headers: { accept: 'application/json' } };

    try {
      const response = await fetch(url, options);
      const tmpNFTs = await response.json();

      if (tmpNFTs['ownedNfts'] !== undefined) {
        status = index;
        break; // Breaking the loop as soon as we find the owned NFTs
      }
    } catch (err) {
      console.error(err);
    }
  }
  return status;
}

interface StageJson {
  action: string;
  intents?: React.ReactElement[];
  image: string;
}

app.frame('/lobby', neynarMiddleware, async (c) => {
  const fid = c['var']['interactor']?.fid;
  const { buttonValue } = c;
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as string;
  const { rows } =
    await sql`SELECT * FROM public."user_data" WHERE fid = ${fid?.toString()};`;

  if (buttonValue == 'get200') {
    await sql`UPDATE public."user_data" SET point = point + 200  WHERE fid = ${fid?.toString()};`;
  } else if (buttonValue == 'get300') {
    await sql`UPDATE public."user_data" SET point = point + 300 WHERE fid = ${fid?.toString()};`;
  } else if (buttonValue == 'get400') {
    await sql`UPDATE public."user_data" SET point = point + 400 WHERE fid = ${fid?.toString()};`;
  } else if (buttonValue == 'get600') {
    await sql`UPDATE public."user_data" SET point = point + 600 WHERE fid = ${fid?.toString()};`;
  } else if (buttonValue == 'get800') {
    await sql`UPDATE public."user_data" SET point = point + 800 WHERE fid = ${fid?.toString()};`;
  } else if (buttonValue == 'get1200') {
    await sql`UPDATE public."user_data" SET point = point + 1200 WHERE fid = ${fid?.toString()};`;
  }
  const game1_tried_at = rows[0]?.game1_tried_at;
  const game2_tried_at = rows[0]?.game2_tried_at;
  const game3_tried_at = rows[0]?.game3_tried_at;
  const game1_status = !(
    Date.parse(game1_tried_at) + 24 * 60 * 60 * 1000 >
    Date.now()
  );
  const game2_status = !(
    Date.parse(game2_tried_at) + 24 * 60 * 60 * 1000 >
    Date.now()
  );
  const game3_status = !(
    Date.parse(game3_tried_at) + 24 * 60 * 60 * 1000 >
    Date.now()
  );

  const status = await fetchNFTData(verifiedAddress);

  // insert user data if the user has not been registered yet
  if (rows[0] == undefined) {
    await sql`INSERT INTO public."user_data" (fid, wallet_address, point, city) VALUES(${fid?.toString()}, ${verifiedAddress}, ${status}, 0);`;
  }

  var image_url = '';
  switch (status) {
    case 0:
      image_url = 'lasvegas_lobby.png';
      break;
    case 1:
      image_url = 'macau_lobby.png';
      break;
    case 2:
      image_url = 'monte_carlo_lobby.png';
      break;
  }

  var first_stage_json: StageJson = {
    action: '/firstStart',
    image: `${BASE_URL}/${image_url}`,
  };

  const createButtons = (
    game1_status: boolean,
    game2_status: boolean,
    game3_status: boolean,
  ): React.ReactElement[] => {
    const intents: React.ReactElement[] = [];

    if (game1_status) {
      intents.push(
        <Button key="game1" value="game1">
          Roulette
        </Button>,
      );
    }

    if (game3_status) {
      intents.push(
        <Button key="game3" value="game3">
          RPS
        </Button>,
      );
    }

    if (game2_status) {
      intents.push(
        <Button key="game2" value="game2">
          Coin Flip
        </Button>,
      );
    }

    return intents;
  };

  const buttons = createButtons(game1_status, game2_status, game3_status);

  first_stage_json['intents'] = buttons;

  if (status != 3) {
    if (!game1_status && !game2_status && !game3_status) {
      // when the user played the games within 24 hours, display error image
      return c.res({
        action: '/',
        image: `${BASE_URL}/attempt_limitation.png`,
        intents: [<Button value="check">Back</Button>],
      });
    } else {
      return c.res(first_stage_json);
    }
  } else {
    // when the user does not hold the NFT, display error image
    return c.res({
      action: '/',
      image: `${BASE_URL}/attempt_limitation.png`,
      intents: [<Button value="check">Back</Button>],
    });
  }
});

export const GET = handle(app);
export const POST = handle(app);
