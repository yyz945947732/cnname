import apis from './api/index.mjs';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const apisPreview = apis.map(item =>
`

## ${item.label}

${item.value}`).join('')

const preview = `
# API Preview${apisPreview}
`;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const previewPath = path.resolve(__dirname, '../example/preview.md');

writeFileSync(previewPath, preview, 'utf-8');

console.log('更新成功！');
