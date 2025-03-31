import apis from './apis/index.mjs';
import { updateExample } from './utils/index.mjs';

const apisPreview = apis.map(item =>
`

## ${item.label}

${item.value}`).join('')

const preview = `# API Preview${apisPreview}
`;

updateExample(preview, 'preview');
