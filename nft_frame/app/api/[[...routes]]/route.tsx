/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog';
import { devtools } from 'frog/dev';
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
import { abi } from '@/app/src/abi';
import { neynar } from 'frog/middlewares';
import { sql } from '@vercel/postgres';
import { BASE_URL } from '../../config';

const app = new Frog({
  assetsPath: '/',
  imageAspectRatio: '1:1',
  basePath: '/api',
});

const neynarMiddleware = neynar({
  apiKey: process.env.NEYNAR_API_KEY ?? '',
  features: ['interactor', 'cast'],
});

// function to fetch NFT holding status
async function fetchNFTData(owner: string) {
  // las vegas, macau, monte carlo,
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

      if (tmpNFTs['totalCount'] !== 0) {
        status = index;
        break;
      }
    } catch (err) {
      console.error(err);
    }
  }
  return status;
}

// route for root page
app.frame('/', (c) => {
  return c.res({
    action: '/mint_page',
    image: `${BASE_URL}/top_page.png`,
    intents: [<Button value="click">Click Eligibility</Button>],
  });
});

// route for mint page
app.frame('/mint_page', neynarMiddleware, async (c) => {
  const fid = c['var']['interactor']?.fid;
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as string;

  const city = await fetchNFTData(verifiedAddress);

  await sql`INSERT INTO public."user_data" (fid, wallet_address, point, city) VALUES(${fid?.toString()}, ${verifiedAddress}, 0, ${city});`;

  if (city == 3) {
    return c.res({
      action: '/finish',
      image: `${BASE_URL}/select_page.png`,
      intents: [
        <Button.Transaction target="/mint_1">Mint</Button.Transaction>,
        <Button.Transaction target="/mint_2">Mint</Button.Transaction>,
        <Button.Transaction target="/mint_3">Mint</Button.Transaction>,
      ],
    });
  } else {
    return c.res({
      action: '/',
      image: `${BASE_URL}/mint_failed.png`,
      intents: [<Button value="back">Back</Button>],
    });
  }
});

app.frame('/finish', neynarMiddleware, async (c) => {
  const fid = c['var']['interactor']?.fid;
  const { rows } =
    await sql`SELECT * FROM public."user_data" WHERE fid = ${fid?.toString()};`;
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as string;
  const date = new Date(Date.now());

  const city = await fetchNFTData(verifiedAddress);

  if (rows.length == 0) {
    await sql`INSERT INTO public."user_data" (fid, wallet_address, point, city) VALUES(${fid?.toString()}, ${verifiedAddress}, 0, ${city});`;
  }

  return c.res({
    action: '/',
    image: `${BASE_URL}/mint_succeeded.gif`,
    intents: [<Button value="back">Back</Button>],
  });
});

// mint las vegas NFT
app.transaction('/mint_1', neynarMiddleware, async (c) => {
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as `0x${string}`;

  return c.contract({
    abi,
    chainId: 'eip155:84532',
    functionName: 'mint',
    args: [verifiedAddress],
    to: '0x693F24A8D3a3DEC819C55875ccafB462bc4Fe00c',
  });
});

// mint macau NFT
app.transaction('/mint_2', neynarMiddleware, async (c) => {
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as `0x${string}`;

  return c.contract({
    abi,
    chainId: 'eip155:84532',
    functionName: 'mint',
    args: [verifiedAddress],
    to: '0x1F82F19Adc76e65483d5B02f0226ccc2d0d9C90c',
  });
});

// mint monte carlo NFT
app.transaction('/mint_3', neynarMiddleware, async (c) => {
  const verifiedAddress = c['var']['interactor']?.['verifiedAddresses']?.[
    'ethAddresses'
  ]?.[0] as `0x${string}`;

  return c.contract({
    abi,
    chainId: 'eip155:84532',
    functionName: 'mint',
    args: [verifiedAddress],
    to: '0xfbfa3b21ABDfD639929406195Cf043fad6Fda91C',
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
