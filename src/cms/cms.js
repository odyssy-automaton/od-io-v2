import CMS from 'netlify-cms';

import WorkPreview from './preview-templates/WorkPreview';

CMS.registerPreviewTemplate('blog', WorkPreview);
