import { extra as GIExtra } from '@alipay/graphinsight';
import * as components from './components';
const { GIAC_CONTENT_METAS, GIAC_CONTENT_PROPS, GIAC_METAS, GIAC_PROPS, GIAComponent } = GIExtra;

import * as elements from './elements';
import * as layouts from './layouts';
import services from './services';
const extra = {
  GIAComponent,
  GIAC_CONTENT_METAS,
  GIAC_METAS,
  GIAC_PROPS,
  GIAC_CONTENT_PROPS,
};

export { components, elements, layouts, extra, services };
