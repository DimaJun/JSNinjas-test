import fs from 'fs';
import path from 'path';
import { componentTsx } from './files/component';
import { moduleScss } from './files/styles';
import { indexTs } from './files/publicApi';

export const [layer, name] = process.argv.slice(2);

if (!layer || !name) {
    // eslint-disable-next-line
    console.error('❌ Usage: npm run gen <layer> <ComponentName>');
    process.exit(1);
}

const validLayers = ['widgets', 'features', 'entities', 'pages'];

if (!validLayers.includes(layer)) {
    // eslint-disable-next-line
    console.error(`❌ Layer must be one of: ${validLayers.join(', ')}`);
    process.exit(1);
}

const basePath = path.resolve('src', layer, name);
const uiPath = path.join(basePath, 'ui');

if (fs.existsSync(basePath)) {
    // eslint-disable-next-line
    console.error(`⚠️  ${layer}/${name} уже существует.`);
    process.exit(1);
}

fs.mkdirSync(uiPath, { recursive: true });

fs.writeFileSync(path.join(uiPath, `${name}.tsx`), componentTsx(name));
fs.writeFileSync(path.join(uiPath, `${name}.module.scss`), moduleScss(name));
fs.writeFileSync(path.join(basePath, 'index.ts'), indexTs(name));
// eslint-disable-next-line
console.log(`✅ Created ${layer}/${name} successfully!`);
