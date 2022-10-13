import * as GremlinQueryServices from './GremlinQuery';
import * as ThemeSetting from './ThemeSetting';
import * as StyleSetting from './StyleSetting';
import * as TemplateService from './TemplateService';
export default {
  id: 'GI',
  name: 'GraphInsight 官方数据服务',
  services: {
    ...GremlinQueryServices,
    ...ThemeSetting,
    ...StyleSetting,
    ...TemplateService,
  },
};
