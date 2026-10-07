import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';
import {tmpdir} from 'node:os';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cliEntry = resolve(projectRoot, 'node_modules/@remotion/cli/remotion-cli.js');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node scripts/remotion.mjs <remotion command and arguments>');
  process.exit(2);
}

// The sandbox and GitHub's standard Ubuntu runners do not ship Chrome. On Linux,
// use the npm-distributed Chromium build so renders do not fetch binaries from
// Remotion's external download host. macOS/Windows developers can use their
// installed Chrome or Remotion's normal browser discovery/download behavior.
if (process.platform === 'linux' && process.env.AUSTROPROMO_SYSTEM_CHROME !== '1') {
  const {default: chromium, inflate, setupLambdaEnvironment} = await import('@sparticuz/chromium');
  const browserExecutable = await chromium.executablePath();
  const chromiumEntry = fileURLToPath(import.meta.resolve('@sparticuz/chromium'));
  const chromiumPackage = resolve(dirname(chromiumEntry), '..');
  // The binary is built against Amazon Linux's NSS libraries; ship those
  // libraries from the npm package and add them to the child process path.
  await inflate(resolve(chromiumPackage, 'bin/al2023.tar.br'));
  setupLambdaEnvironment(resolve(tmpdir(), 'al2023', 'lib'));
  if (!args.some((arg) => arg === '--browser-executable' || arg.startsWith('--browser-executable='))) {
    args.push(`--browser-executable=${browserExecutable}`);
  }
}

const child = spawn(process.execPath, [cliEntry, ...args], {
  cwd: projectRoot,
  env: process.env,
  stdio: 'inherit',
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.on('error', (error) => {
  console.error(`Could not start Remotion: ${error.message}`);
  process.exitCode = 1;
});
child.on('exit', (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
