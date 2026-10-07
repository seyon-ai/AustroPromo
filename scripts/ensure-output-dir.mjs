import {mkdir} from 'node:fs/promises';

await mkdir(new URL('../out/', import.meta.url), {recursive: true});
