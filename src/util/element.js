/**
 * `element-ui` load on demand
 * @see http://element-cn.eleme.io/#/zh-CN/component/quickstart#an-xu-yin-ru
 */

import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Card,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Select,
  Option,
  Form,
  FormItem,
  Tag,
  Slider,
  Icon,
  Upload,
  Header,
  Loading,
  MessageBox,
  Message,
  Notification,
  Steps
} from 'element-ui';
import ElementLocale from 'element-ui/lib/locale';
import i18n from '@/i18n';

/**
 * `element-ui` and `vue-i18n` integration with load on demand
 * @see http://element-cn.eleme.io/#/zh-CN/component/i18n#an-xu-jia-zai-li-ding-zhi-i18n
 */
ElementLocale.i18n((key, value) => i18n.t(key, value));

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Select);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tag);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Upload);
Vue.use(Header);
Vue.use(Steps);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
