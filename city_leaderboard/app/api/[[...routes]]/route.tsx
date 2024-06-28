/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog';
import { devtools } from 'frog/dev';
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
import { sql } from '@vercel/postgres';
import { neynar } from 'frog/middlewares';
import { createSystem } from 'frog/ui';
import { BASE_URL } from '../../config';

const { Box, Divider, HStack, Image, Text, VStack, vars } = createSystem();

type User = {
  fixobject: string;
  fid: number;
  custody_address: string;
  username: string;
  display_name: string;
  pfp_url: string;
  profile: {
    bio: object;
  };
  follower_count: number;
  following_count: number;
  verifications: string[];
  verified_addresses: {
    eth_addresses: string[];
    sol_addresses: string[];
  };
  active_status: string;
  power_badge: boolean;
  point: number | undefined;
};

const neynarMiddleware = neynar({
  apiKey: process.env.NEYNAR_API_KEY ?? '',
  features: ['interactor', 'cast'],
});

const app = new Frog({
  ui: { vars },
  imageAspectRatio: '1:1',
  basePath: '/api',
});

// function to get user info by fid
async function getUserInfo(user_fid: number | undefined) {
  const fetch_url = `https://api.neynar.com/v2/farcaster/user/bulk?fids=${user_fid}`;

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', api_key: 'NEYNAR_API_DOCS' },
  };

  const data = await fetch(fetch_url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));

  const result = data['users'];
  return result;
}

// function to get top 3 users by points
async function getTop3Users(top3_data: any | undefined) {
  const fetch_url = `https://api.neynar.com/v2/farcaster/user/bulk?fids=${top3_data.join('%2C%20')}`;

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', api_key: 'NEYNAR_API_DOCS' },
  };

  const data = await fetch(fetch_url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));

  const result = data['users'];
  return result;
}

// route for root page
app.frame('/', neynarMiddleware, async (c) => {
  return c.res({
    action: '/board',
    image: `${BASE_URL}/top_page.png`,
    intents: [
      <Button value="personal">Personal</Button>,
      <Button value="city">City</Button>,
    ],
  });
});

// route for board page
// if the user click 'Personal' button, display the user point and point top 3 users
// if the user click 'City' button, display the city point ranking
app.frame('/board', neynarMiddleware, async (c) => {
  const { buttonValue } = c;
  console.log(buttonValue);
  const fid = c['var']['interactor']?.fid;

  console.log(buttonValue);
  if (buttonValue == 'personal') {
    const { rows: user_data } =
      await sql`SELECT * FROM public."user_data" WHERE fid = ${fid};`;
    const { rows: top3_data } =
      await sql`SELECT * FROM public."user_data" ORDER BY point DESC LIMIT 3;`;

    if (user_data.length === 0) {
      var name = '';
      var point = '0';
      var pfp_image = 'https://i.imgur.com/1zj6Z9I.png';
    } else {
      var user = await getUserInfo(fid);

      var name = `@${user[0]['display_name']}`;
      var point: string = user_data[0].point;
      var pfp_image =
        c['var']['interactor']?.pfpUrl || 'https://i.imgur.com/1zj6Z9I.png';
    }

    const fids = top3_data.map((user) => user.fid);
    const top3_users_data = getTop3Users(fids);
    const top3_points = top3_data.map((user) => user.point);

    const top3_users: User[] = await top3_users_data.then((users) =>
      users.map((user: User, index: number) => ({
        fid: user.fid,
        display_name: `@${user.display_name}`,
        pfp_url: user.pfp_url,
        point: top3_points[index],
      })),
    );

    return c.res({
      action: '/',
      image: (
        <div
          style={{
            background: 'black',
            display: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            alignVertical="center"
            backgroundColor="background"
            alignHorizontal="center"
            gap="20"
            flexDirection="column"
            flex="1"
          >
            <Box
              color="purple"
              borderColor="purple"
              borderWidth="2"
              padding="30"
            >
              <VStack gap="8" alignHorizontal="center">
                <HStack gap="8">
                  <Image src={pfp_image} height="20" width="20" />
                  <Text size="20">{name}</Text>
                </HStack>
                <Text color="text200" size="20">
                  {point}
                </Text>
                <Text>Points</Text>
              </VStack>
            </Box>

            <Box width="256">
              <VStack gap="4" alignHorizontal="center">
                <Text color="purple" size="20">
                  Point Top 3
                </Text>
                <Divider />
                <Box>
                  {top3_users.map((item: User, index: number) => (
                    <VStack
                      key={index}
                      gap="8"
                      alignHorizontal="center"
                      paddingBottom="4"
                    >
                      <HStack gap="6" paddingBottom="8" alignHorizontal="left">
                        <Text size="16" color="purple">
                          #{index + 1}
                        </Text>
                        <Image src={item.pfp_url} height="18" width="24" />
                        <Text size="12">{item.display_name}</Text>
                        <Text color="text100" size="12">
                          {item.point ?? 0}
                        </Text>
                        <Text size="12">Points</Text>
                      </HStack>
                    </VStack>
                  ))}
                </Box>
              </VStack>
            </Box>
          </Box>
        </div>
      ),
      intents: [<Button value="click">Done</Button>],
    });
  } else {
    const { rows: data } = await sql`SELECT 
                                      city,
                                          SUM(point) AS total_points,
                                          RANK() OVER (ORDER BY SUM(point) DESC) AS ranking
                                      FROM 
                                          user_data
                                      GROUP BY 
                                          city
                                      ORDER BY 
                                          total_points DESC;`;

    const city_name = ['Las Vegas', 'Macau', 'Monte Carlo'];

    return c.res({
      action: '/',
      image: (
        <div
          style={{
            background: 'black',
            display: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            alignVertical="center"
            backgroundColor="background"
            alignHorizontal="center"
            gap="40"
            flexDirection="row"
            flex="1"
          >
            <VStack gap="10" alignHorizontal="center">
              <Text color="purple" size="24">
                City Ranking
              </Text>
              <Divider />
              <Box>
                {data.map((item: any, index: number) => (
                  <VStack
                    key={index}
                    gap="20"
                    alignHorizontal="center"
                    paddingBottom="12"
                  >
                    <HStack gap="20" paddingBottom="10" alignHorizontal="left">
                      <Text size="24" color="purple">
                        #{index + 1}
                      </Text>
                      <Text size="18">{city_name[item.city]}</Text>
                      <Text color="text100" size="20">
                        {item.total_points ?? 0}
                      </Text>
                      <Text>Points</Text>
                    </HStack>
                  </VStack>
                ))}
              </Box>
            </VStack>
          </Box>
        </div>
      ),
      intents: [<Button value="click">Done</Button>],
    });
  }
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
