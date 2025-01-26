/**
 * To enable Chromatic analysis, you need to run the following script to update Chromatic analysis
 */
const { execSync } = require('child_process');

const token = process.env.CHROMATIC_PROJECT_TOKEN;

if (!token) {
  console.error('[ERROR]: CHROMATIC_PROJECT_TOKEN is not defined in your .env file');
  process.exit(1);
}

execSync(`pnpm dlx chromatic --project-token=${token}`, { stdio: 'inherit' });