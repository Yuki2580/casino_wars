/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog';
import { devtools } from 'frog/dev';
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
import { neynar } from 'frog/middlewares';
import { BASE_URL } from '../../config';
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

// interface for frame request
interface StageJson {
  action: string;
  intents?: React.ReactElement[];
  image: string;
}

// function to update game_tried_at in user_data table
const updateGameTriedAt = async (game: string, date: Date, fid: number) => {
  const gameColumn = `game${game}_tried_at`;
  const query = `UPDATE public."user_data" SET ${gameColumn} = $1 WHERE fid = $2`;
  await sql.query(query, [date.toISOString(), fid?.toString()]);
};

// route for root page
app.frame('/', neynarMiddleware, async (c) => {
  return c.res({
    action: '/lobby',
    image: `${BASE_URL}/top_page.png`,
    intents: [<Button>Game Start</Button>],
  });
});

// route for first start page
app.frame('/firstStart', neynarMiddleware, async (c) => {
  const { buttonValue } = c;
  var image_url = '';
  var buttons = [];

  switch (buttonValue) {
    case 'game1':
      image_url = `${BASE_URL}/game1_top_page.png`;
      buttons.push(<Button value="game1">Start</Button>);
      break;
    case 'game2':
      image_url = `${BASE_URL}/game2_top_page.png`;
      buttons.push(<Button value="game2">Start</Button>);
      break;
    case 'game3':
      image_url = `${BASE_URL}/game3_top_page.png`;
      buttons.push(<Button value="game3">Start</Button>);
      break;
  }

  var req_json: StageJson = {
    action: `/first`,
    intents: buttons,
    image: image_url,
  };

  return c.res(req_json);
});

// route for first page
app.frame('/first', neynarMiddleware, async (c) => {
  const { buttonValue } = c;
  var image_url = '';
  var game_num = '';
  var buttons = [];

  switch (buttonValue) {
    case 'game1':
      image_url = `${BASE_URL}/game1_game_page.gif`;
      buttons.push(
        <Button value="option1">🔴</Button>,
        <Button value="option2">🖤</Button>,
      );
      game_num = '1';
      break;
    case 'game2':
      image_url = `${BASE_URL}/game2_game_page.gif`;
      buttons.push(
        <Button value="option1">Head</Button>,
        <Button value="option2">Tail</Button>,
      );
      game_num = '2';
      break;
    case 'game3':
      image_url = `${BASE_URL}/game3_game_page.gif`;
      buttons.push(
        <Button value="option1">✊</Button>,
        <Button value="option2">✌️</Button>,
        <Button value="option3">🖐️</Button>,
      );
      game_num = '3';
      break;
  }

  var req_json: StageJson = {
    action: `/firstValidate/${game_num}`,
    intents: buttons,
    image: image_url,
  };

  return c.res(req_json);
});

// route for first validate page
app.frame('/firstValidate/:game', neynarMiddleware, async (c) => {
  const fid = c['var']['interactor']?.fid;
  const { game } = c.req.param();
  const { buttonValue } = c;
  const date = new Date(Date.now());
  var image_url = '';

  updateGameTriedAt(game, date, fid ?? -1);

  const random = Math.random() <= 1 / 2;
  let button_value;
  switch (game) {
    case '1':
    case '2':
      button_value = 'get200';
      break;
    case '3':
      button_value = 'get300';
      break;
  }

  if (random) {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_stage1_win.gif`;

    return c.res({
      action: `/second/${game}`,
      image: image_url,
      intents: [
        <Button value={`game${game}`}>Play Again</Button>,
        <Button value={button_value}>Quit and Earn</Button>,
      ],
    });
  } else {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_loose.png`;

    return c.res({
      action: '/lobby',
      image: image_url,
      intents: [<Button value="back">Back to Lobby</Button>],
    });
  }
});

// route for second page
app.frame('/second/:game', neynarMiddleware, async (c) => {
  const { game } = c.req.param();
  const { buttonValue } = c;
  var image_url = '';
  var req_json: StageJson = {
    action: `/secondValidate/${game}`,
    image: image_url,
  };
  var buttons = [];

  switch (buttonValue) {
    case 'game1':
      image_url = `${BASE_URL}/game1_game_page.gif`;
      buttons.push(
        <Button value="option1">🔴</Button>,
        <Button value="option2">🖤</Button>,
      );
      break;
    case 'game2':
      image_url = `${BASE_URL}/game2_game_page.gif`;
      buttons.push(
        <Button value="option1">Head</Button>,
        <Button value="option2">Tail</Button>,
      );
      break;
    case 'game3':
      image_url = `${BASE_URL}/game3_game_page.gif`;
      buttons.push(
        <Button value="option1">✊</Button>,
        <Button value="option2">✌️</Button>,
        <Button value="option3">🖐️</Button>,
      );
      break;
    case 'get200':
    case 'get300':
      req_json['action'] = '/lobby';
      image_url = `${BASE_URL}/game${game}_earn.gif`;
      break;
  }

  req_json['intents'] = buttons;
  req_json['image'] = image_url;

  if (
    buttonValue == 'game1' ||
    buttonValue == 'game2' ||
    buttonValue == 'game3'
  ) {
    return c.res(req_json);
  } else {
    return c.res({
      action: `/lobby`,
      image: image_url,
      intents: [<Button value={buttonValue}>Earn Point</Button>],
    });
  }
});

// route for second validate page
app.frame('/secondValidate/:game', neynarMiddleware, async (c) => {
  const { game } = c.req.param();
  const fid = c['var']['interactor']?.fid;
  const { buttonValue } = c;
  const date = new Date(Date.now());
  var image_url = '';

  updateGameTriedAt(game, date, fid ?? -1);

  const random = Math.random() <= 1 / 2;
  let button_value = '';
  switch (game) {
    case '1':
    case '2':
      button_value = 'get400';
      break;
    case '3':
      button_value = 'get600';
      break;
  }

  if (random) {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_stage2_win.gif`;

    return c.res({
      action: `/third/${game}`,
      image: image_url,
      intents: [
        <Button value={`game${game}`}>Play Again</Button>,
        <Button value={button_value}>Quit and Earn</Button>,
      ],
    });
  } else {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_loose.png`;

    return c.res({
      action: '/lobby',
      image: image_url,
      intents: [<Button value="back">Back to Lobby</Button>],
    });
  }
});

// route for third page
app.frame('/third/:game', neynarMiddleware, async (c) => {
  const { game } = c.req.param();
  const { buttonValue } = c;
  var image_url = '';
  var req_json: StageJson = {
    action: `/thirdValidate/${game}`,
    image: image_url,
  };
  var buttons = [];
  var button_value = '';

  switch (buttonValue) {
    case 'game1':
      image_url = `${BASE_URL}/game1_game_page.gif`;
      buttons.push(
        <Button value="option1">🔴</Button>,
        <Button value="option2">🖤</Button>,
      );
      break;
    case 'game2':
      image_url = `${BASE_URL}/game2_game_page.gif`;
      buttons.push(
        <Button value="option1">Head</Button>,
        <Button value="option2">Tail</Button>,
      );
      break;
    case 'game3':
      image_url = `${BASE_URL}/game3_game_page.gif`;
      buttons.push(
        <Button value="option1">✊</Button>,
        <Button value="option2">✌️</Button>,
        <Button value="option3">🖐️</Button>,
      );
      break;
    case 'get400':
    case 'get600':
      req_json['action'] = '/lobby';
      image_url = `${BASE_URL}/game${game}_earn.gif`;
      if (buttonValue == 'get400') {
        button_value = 'get800';
      } else if (buttonValue == 'get600') {
        button_value = 'get1200';
      }
      break;
  }

  req_json['intents'] = buttons;
  req_json['image'] = image_url;

  if (
    buttonValue == 'game1' ||
    buttonValue == 'game2' ||
    buttonValue == 'game3'
  ) {
    return c.res(req_json);
  } else {
    return c.res({
      action: `/lobby`,
      image: image_url,
      intents: [<Button value={button_value}>Earn Point</Button>],
    });
  }
});

// route for third validate page
app.frame('/thirdValidate/:game', neynarMiddleware, async (c) => {
  const { game } = c.req.param();
  const fid = c['var']['interactor']?.fid;
  const { buttonValue } = c;
  const date = new Date(Date.now());
  var image_url = '';
  var button_value = '';

  updateGameTriedAt(game, date, fid ?? -1);

  const random = Math.random() <= 1 / 2;

  switch (game) {
    case '1':
    case '2':
      button_value = 'get800';
      break;
    case '3':
      button_value = 'get1200';
      break;
  }

  if (random) {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_stage3_win.gif`;

    return c.res({
      action: `/lobby`,
      image: image_url,
      intents: [<Button value={button_value}>Earn and Back</Button>],
    });
  } else {
    image_url = `${BASE_URL}/${buttonValue}_game${game}_loose.png`;

    return c.res({
      action: '/lobby',
      image: image_url,
      intents: [<Button value="back">Back to Lobby</Button>],
    });
  }
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
