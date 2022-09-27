import 'dotenv/config';

const requiredEnvironment = ['BOT_TOKEN'];

const missingEnv = requiredEnvironment.filter((req) => !process.env[req]);

if (missingEnv.length > 0)
  throw new Error(
    'Missing required environment variables: \n- ' +
      missingEnv.reduce((a, b) => (b += `\n- ${a}`))
  );

export const { BOT_TOKEN = '' } = process.env;
