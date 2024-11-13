/**
 * 国家-工具库
 * @author: cmg
 * @time: 2023-03-21 10:16:55
 */
import lodash from 'lodash';

// 国家
export interface Country {
  // 代码
  code: string;
  // 中文名称
  zh_CN: string;
  // 英文名称
  name: string;
}

// 国家列表
export const COUNTRY_LIST: Country[] = [
  {
    code: 'xx',
    zh_CN: '未知',
    name: 'Unknown',
  },
  {
    code: 'ac',
    zh_CN: '阿森松岛',
    name: 'Ascension Island',
  },
  {
    code: 'ad',
    zh_CN: '安道尔共和国',
    name: 'Andorra',
  },
  {
    code: 'ae',
    zh_CN: '阿拉伯联合酋长国',
    name: 'United Arab Emirates',
  },
  {
    code: 'af',
    zh_CN: '阿富汗',
    name: 'Afghanistan',
  },
  {
    code: 'ag',
    zh_CN: '安提瓜和巴布达',
    name: 'Antigua and Barbuda',
  },
  {
    code: 'ai',
    zh_CN: '安圭拉岛',
    name: 'Anguilla',
  },
  {
    code: 'al',
    zh_CN: '阿尔巴尼亚',
    name: 'Albania',
  },
  {
    code: 'am',
    zh_CN: '亚美尼亚',
    name: 'Armenia',
  },
  {
    code: 'ao',
    zh_CN: '安哥拉',
    name: 'Angola',
  },
  {
    code: 'aq',
    zh_CN: '南极洲',
    name: 'Antarctica',
  },
  {
    code: 'ar',
    zh_CN: '阿根廷',
    name: 'Argentina',
  },
  {
    code: 'as',
    zh_CN: '美属萨摩亚',
    name: 'American Samoa',
  },
  {
    code: 'at',
    zh_CN: '奥地利',
    name: 'Austria',
  },
  {
    code: 'au',
    zh_CN: '澳大利亚',
    name: 'Australia',
  },
  {
    code: 'aw',
    zh_CN: '阿鲁巴',
    name: 'Aruba',
  },
  {
    code: 'ax',
    zh_CN: '奥兰群岛',
    name: 'Aland Islands',
  },
  {
    code: 'az',
    zh_CN: '阿塞拜疆',
    name: 'Azerbaijan',
  },
  {
    code: 'ba',
    zh_CN: '波斯尼亚和黑塞哥维纳',
    name: 'Bosnia and Herzegovina',
  },
  {
    code: 'bb',
    zh_CN: '巴巴多斯',
    name: 'Barbados',
  },
  {
    code: 'bd',
    zh_CN: '孟加拉国',
    name: 'Bangladesh',
  },
  {
    code: 'be',
    zh_CN: '比利时',
    name: 'Belgium',
  },
  {
    code: 'bf',
    zh_CN: '布基纳法索',
    name: 'Burkina Faso',
  },
  {
    code: 'bg',
    zh_CN: '保加利亚',
    name: 'Bulgaria',
  },
  {
    code: 'bh',
    zh_CN: '巴林',
    name: 'Bahrain',
  },
  {
    code: 'bi',
    zh_CN: '布隆迪',
    name: 'Burundi',
  },
  {
    code: 'bj',
    zh_CN: '贝宁',
    name: 'Benin',
  },
  {
    code: 'bl',
    zh_CN: '圣巴泰勒米岛',
    name: 'Saint Barthelemy',
  },
  {
    code: 'bm',
    zh_CN: '百慕大群岛',
    name: 'Bermuda',
  },
  {
    code: 'bn',
    zh_CN: '文莱达鲁萨兰国',
    name: 'Brunei Darussalam',
  },
  {
    code: 'bo',
    zh_CN: '玻利维亚',
    name: 'Bolivia (Plurinational State of)',
  },
  {
    code: 'bq',
    zh_CN: '博内尔岛,圣尤斯达蒂斯和萨巴岛',
    name: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    code: 'br',
    zh_CN: '巴西',
    name: 'Brazil',
  },
  {
    code: 'bs',
    zh_CN: '巴哈马',
    name: 'Bahamas',
  },
  {
    code: 'bt',
    zh_CN: '不丹',
    name: 'Bhutan',
  },
  {
    code: 'bv',
    zh_CN: '布韦岛',
    name: 'Bouvet Island',
  },
  {
    code: 'bw',
    zh_CN: '博茨瓦纳',
    name: 'Botswana',
  },
  {
    zh_CN: '白俄罗斯',
    code: 'by',
    name: 'Belarus',
  },
  {
    code: 'bz',
    zh_CN: '伯利兹',
    name: 'Belize',
  },
  {
    code: 'ca',
    zh_CN: '加拿大',
    name: 'Canada',
  },
  {
    code: 'cc',
    zh_CN: '科科斯群岛',
    name: 'Cocos (Keeling) Islands',
  },
  {
    code: 'cf',
    zh_CN: '中非共和国',
    name: 'Central African Republic',
  },
  {
    code: 'cg',
    zh_CN: '刚果(金)',
    name: 'The Democratic Republic of the Congo',
  },
  {
    code: 'cd',
    zh_CN: '刚果(布)',
    name: 'Republic of the Congo',
  },
  {
    code: 'ch',
    zh_CN: '瑞士',
    name: 'Switzerland',
  },
  {
    code: 'ck',
    zh_CN: '库克群岛',
    name: 'Cook Islands',
  },
  {
    code: 'cl',
    zh_CN: '智利',
    name: 'Chile',
  },
  {
    code: 'cm',
    zh_CN: '喀麦隆',
    name: 'Cameroon',
  },
  {
    code: 'cn',
    zh_CN: '中国',
    name: 'China',
  },
  {
    code: 'co',
    zh_CN: '哥伦比亚',
    name: 'Colombia',
  },
  {
    code: 'cp',
    zh_CN: '克利伯顿岛',
    name: 'Clipperton Island',
  },
  {
    code: 'cr',
    zh_CN: '哥斯达黎加',
    name: 'Costa Rica',
  },
  {
    code: 'cu',
    zh_CN: '古巴',
    name: 'Cuba',
  },
  {
    code: 'cv',
    zh_CN: '佛得角',
    name: 'Cabo Verde',
  },
  {
    code: 'cx',
    zh_CN: '圣诞岛',
    name: 'Christmas Island',
  },
  {
    code: 'cy',
    zh_CN: '塞浦路斯',
    name: 'Cyprus',
  },
  {
    code: 'cz',
    zh_CN: '捷克',
    name: 'Czech Republic',
  },
  {
    code: 'de',
    zh_CN: '德国',
    name: 'Germany',
  },
  {
    code: 'dg',
    zh_CN: '迪戈加西亚岛',
    name: 'Diego Garcia',
  },
  {
    code: 'dj',
    zh_CN: '吉布提',
    name: 'Djibouti',
  },
  {
    code: 'dk',
    zh_CN: '丹麦',
    name: 'Denmark',
  },
  {
    code: 'dm',
    zh_CN: '多米尼克',
    name: 'Dominica',
  },
  {
    code: 'do',
    zh_CN: '多米尼加共和国',
    name: 'Dominican Republic',
  },
  {
    code: 'dz',
    zh_CN: '阿尔及利亚',
    name: 'Algeria',
  },
  {
    code: 'ea',
    zh_CN: '休达和梅利利亚',
    name: 'Ceuta & Melilla',
  },
  {
    code: 'ec',
    zh_CN: '厄瓜多尔',
    name: 'Ecuador',
  },
  {
    code: 'ee',
    zh_CN: '爱沙尼亚',
    name: 'Estonia',
  },
  {
    code: 'eg',
    zh_CN: '埃及',
    name: 'Egypt',
  },
  {
    code: 'eh',
    zh_CN: '西撒哈拉',
    name: 'Western Sahara',
  },
  {
    code: 'er',
    zh_CN: '厄立特里亚',
    name: 'Eritrea',
  },
  {
    code: 'es',
    zh_CN: '西班牙',
    name: 'Spain',
  },
  {
    code: 'es-ct',
    zh_CN: '加泰罗尼亚',
    name: 'Catalonia',
  },
  {
    code: 'es-ga',
    zh_CN: '加利西亚',
    name: 'Galicia',
  },
  {
    code: 'et',
    zh_CN: '埃塞俄比亚',
    name: 'Ethiopia',
  },
  {
    code: 'eu',
    zh_CN: '欧洲',
    name: 'Europe',
  },
  {
    code: 'fi',
    zh_CN: '芬兰',
    name: 'Finland',
  },
  {
    code: 'fj',
    zh_CN: '斐济',
    name: 'Fiji',
  },
  {
    code: 'fk',
    zh_CN: '福克兰群岛',
    name: 'Falkland Islands',
  },
  {
    code: 'fm',
    zh_CN: '密克罗尼西亚联邦',
    name: 'Federated States of Micronesia',
  },
  {
    code: 'fo',
    zh_CN: '法罗群岛',
    name: 'Faroe Islands',
  },
  {
    code: 'fr',
    zh_CN: '法国',
    name: 'France',
  },
  {
    code: 'ga',
    zh_CN: '加蓬',
    name: 'Gabon',
  },
  {
    code: 'gb',
    zh_CN: '英国',
    name: 'United Kingdom',
  },
  {
    code: 'gb-eng',
    zh_CN: '英格兰',
    name: 'England',
  },
  {
    code: 'gb-nir',
    zh_CN: '北爱尔兰',
    name: 'Northern Ireland',
  },
  {
    code: 'gb-sct',
    zh_CN: '苏格兰',
    name: 'Scotland',
  },
  {
    code: 'gb-wls',
    zh_CN: '威尔士',
    name: 'Wales',
  },
  {
    code: 'gd',
    zh_CN: '格林纳达',
    name: 'Grenada',
  },
  {
    code: 'ge',
    zh_CN: '格鲁吉亚',
    name: 'Georgia',
  },
  {
    code: 'gf',
    zh_CN: '法属圭亚那',
    name: 'French Guiana',
  },
  {
    code: 'gg',
    zh_CN: '格恩西岛',
    name: 'Guernsey',
  },
  {
    code: 'gh',
    zh_CN: '加纳',
    name: 'Ghana',
  },
  {
    code: 'gi',
    zh_CN: '直布罗陀',
    name: 'Gibraltar',
  },
  {
    code: 'gl',
    zh_CN: '格陵兰岛',
    name: 'Greenland',
  },
  {
    code: 'gm',
    zh_CN: '冈比亚',
    name: 'Gambia',
  },
  {
    code: 'gn',
    zh_CN: '几内亚',
    name: 'Guinea',
  },
  {
    code: 'gp',
    zh_CN: '瓜德罗普',
    name: 'Guadeloupe',
  },
  {
    code: 'gq',
    zh_CN: '赤道几内亚',
    name: 'Equatorial Guinea',
  },
  {
    code: 'gr',
    zh_CN: '希腊',
    name: 'Greece',
  },
  {
    code: 'gs',
    zh_CN: '南格鲁吉亚岛与南桑威奇群岛',
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    code: 'gt',
    zh_CN: '危地马拉',
    name: 'Guatemala',
  },
  {
    code: 'gu',
    zh_CN: '关岛',
    name: 'Guam',
  },
  {
    code: 'gw',
    zh_CN: '几内亚比绍',
    name: 'Guinea-Bissau',
  },
  {
    code: 'gy',
    zh_CN: '圭亚那',
    name: 'Guyana',
  },
  {
    code: 'hk',
    zh_CN: '香港',
    name: 'Hong Kong',
  },
  {
    code: 'hm',
    zh_CN: '赫德岛和麦克唐纳群岛',
    name: 'Heard Island and McDonald Islands',
  },
  {
    code: 'hn',
    zh_CN: '洪都拉斯',
    name: 'Honduras',
  },
  {
    code: 'hr',
    zh_CN: '克罗地亚',
    name: 'Croatia',
  },
  {
    code: 'ht',
    zh_CN: '海地',
    name: 'Haiti',
  },
  {
    code: 'hu',
    zh_CN: '匈牙利',
    name: 'Hungary',
  },
  {
    code: 'ic',
    zh_CN: '加那利群岛',
    name: 'Canary Islands',
  },
  {
    code: 'id',
    zh_CN: '印度尼西亚',
    name: 'Indonesia',
  },
  {
    code: 'ie',
    zh_CN: '爱尔兰',
    name: 'Ireland',
  },
  {
    code: 'il',
    zh_CN: '以色列',
    name: 'Israel',
  },
  {
    code: 'im',
    zh_CN: '马恩岛',
    name: 'Isle of Man',
  },
  {
    code: 'in',
    zh_CN: '印度',
    name: 'India',
  },
  {
    code: 'iq',
    zh_CN: '伊拉克',
    name: 'Iraq',
  },
  {
    code: 'ir',
    zh_CN: '伊朗',
    name: 'Iran (Islamic Republic of)',
  },
  {
    code: 'is',
    zh_CN: '冰岛',
    name: 'Iceland',
  },
  {
    code: 'it',
    zh_CN: '意大利',
    name: 'Italy',
  },
  {
    zh_CN: '牙买加',
    code: 'jm',
    name: 'Jamaica',
  },
  {
    code: 'jo',
    zh_CN: '约旦',
    name: 'Jordan',
  },
  {
    code: 'jp',
    zh_CN: '日本',
    name: 'Japan',
  },
  {
    code: 'ke',
    zh_CN: '肯尼亚',
    name: 'Kenya',
  },
  {
    code: 'kg',
    zh_CN: '吉尔吉斯坦',
    name: 'Kyrgyzstan',
  },
  {
    code: 'kh',
    zh_CN: '柬埔寨',
    name: 'Cambodia',
  },
  {
    code: 'ki',
    zh_CN: '基里巴斯',
    name: 'Kiribati',
  },
  {
    code: 'km',
    zh_CN: '科摩罗',
    name: 'Comoros',
  },
  {
    code: 'kn',
    zh_CN: '圣基茨和尼维斯联邦',
    name: 'Saint Kitts and Nevis',
  },
  {
    code: 'kp',
    zh_CN: '朝鲜',
    name: 'North Korea',
  },
  {
    code: 'kr',
    zh_CN: '韩国',
    name: 'South Korea',
  },
  {
    code: 'kw',
    zh_CN: '科威特',
    name: 'Kuwait',
  },
  {
    code: 'ky',
    zh_CN: '开曼群岛',
    name: 'Cayman Islands',
  },
  {
    code: 'kz',
    zh_CN: '哈萨克斯坦',
    name: 'Kazakhstan',
  },
  {
    code: 'la',
    zh_CN: '老挝',
    name: 'Laos',
  },
  {
    code: 'lb',
    zh_CN: '黎巴嫩',
    name: 'Lebanon',
  },
  {
    code: 'lc',
    zh_CN: '圣卢西亚',
    name: 'Saint Lucia',
  },
  {
    code: 'li',
    zh_CN: '列支敦士登',
    name: 'Liechtenstein',
  },
  {
    code: 'lk',
    zh_CN: '斯里兰卡',
    name: 'Sri Lanka',
  },
  {
    code: 'lr',
    zh_CN: '利比里亚',
    name: 'Liberia',
  },
  {
    code: 'ls',
    zh_CN: '莱索托',
    name: 'Lesotho',
  },
  {
    code: 'lt',
    zh_CN: '立陶宛',
    name: 'Lithuania',
  },
  {
    code: 'lu',
    zh_CN: '卢森堡',
    name: 'Luxembourg',
  },
  {
    code: 'lv',
    zh_CN: '拉脱维亚',
    name: 'Latvia',
  },
  {
    code: 'ly',
    zh_CN: '利比亚',
    name: 'Libya',
  },
  {
    code: 'ma',
    zh_CN: '摩洛哥',
    name: 'Morocco',
  },
  {
    code: 'mc',
    zh_CN: '摩纳哥',
    name: 'Monaco',
  },
  {
    code: 'md',
    zh_CN: '摩尔多瓦',
    name: 'Moldova',
  },
  {
    code: 'me',
    zh_CN: '黑山',
    name: 'Montenegro',
  },
  {
    code: 'mf',
    zh_CN: '圣马丁岛',
    name: 'Saint Martin',
  },
  {
    code: 'mg',
    zh_CN: '马达加斯加',
    name: 'Madagascar',
  },
  {
    code: 'mh',
    zh_CN: '马绍尔群岛',
    name: 'Marshall Islands',
  },
  {
    code: 'mk',
    zh_CN: '北马其顿',
    name: 'North Macedonia',
  },
  {
    code: 'ml',
    zh_CN: '马里',
    name: 'Mali',
  },
  {
    code: 'mm',
    zh_CN: '缅甸',
    name: 'Myanmar',
  },
  {
    code: 'mn',
    zh_CN: '蒙古',
    name: 'Mongolia',
  },
  {
    code: 'mo',
    zh_CN: '澳门',
    name: 'Macau',
  },
  {
    code: 'mp',
    zh_CN: '北马里亚纳群岛',
    name: 'Northern Mariana Islands',
  },
  {
    code: 'mq',
    zh_CN: '马提尼克',
    name: 'Martinique',
  },
  {
    code: 'mr',
    zh_CN: '毛里塔尼亚',
    name: 'Mauritania',
  },
  {
    code: 'ms',
    zh_CN: '蒙特塞拉特岛',
    name: 'Montserrat',
  },
  {
    code: 'mt',
    zh_CN: '马耳他',
    name: 'Malta',
  },
  {
    zh_CN: '毛里求斯',
    code: 'mu',
    name: 'Mauritius',
  },
  {
    code: 'mv',
    zh_CN: '马尔代夫',
    name: 'Maldives',
  },
  {
    code: 'mw',
    zh_CN: '马拉维',
    name: 'Malawi',
  },
  {
    code: 'mx',
    zh_CN: '墨西哥',
    name: 'Mexico',
  },
  {
    code: 'my',
    zh_CN: '马来西亚',
    name: 'Malaysia',
  },
  {
    code: 'mz',
    zh_CN: '莫桑比克',
    name: 'Mozambique',
  },
  {
    code: 'na',
    zh_CN: '纳米比亚',
    name: 'Namibia',
  },
  {
    code: 'nc',
    zh_CN: '新咯里多尼亚',
    name: 'New Caledonia',
  },
  {
    code: 'ne',
    zh_CN: '尼日尔',
    name: 'Niger',
  },
  {
    code: 'nf',
    zh_CN: '诺福克岛',
    name: 'Norfolk Island',
  },
  {
    code: 'ng',
    zh_CN: '尼日利亚',
    name: 'Nigeria',
  },
  {
    code: 'ni',
    zh_CN: '尼加拉瓜',
    name: 'Nicaragua',
  },
  {
    code: 'nl',
    zh_CN: '荷兰',
    name: 'Netherlands',
  },
  {
    code: 'no',
    zh_CN: '挪威',
    name: 'Norway',
  },
  {
    code: 'np',
    zh_CN: '尼泊尔',
    name: 'Nepal',
  },
  {
    code: 'nr',
    zh_CN: '瑙鲁',
    name: 'Nauru',
  },
  {
    code: 'nu',
    zh_CN: '纽埃岛',
    name: 'Niue',
  },
  {
    code: 'nz',
    zh_CN: '新西兰',
    name: 'New Zealand',
  },
  {
    code: 'om',
    zh_CN: '阿曼',
    name: 'Oman',
  },
  {
    code: 'pa',
    zh_CN: '巴拿马',
    name: 'Panama',
  },
  {
    code: 'pe',
    zh_CN: '秘鲁',
    name: 'Peru',
  },
  {
    code: 'pf',
    zh_CN: '法属玻利尼西亚',
    name: 'French Polynesia',
  },
  {
    code: 'pg',
    zh_CN: '巴布亚新几内亚',
    name: 'Papua New Guinea',
  },
  {
    code: 'ph',
    zh_CN: '菲律宾',
    name: 'Philippines',
  },
  {
    code: 'pk',
    zh_CN: '巴基斯坦',
    name: 'Pakistan',
  },
  {
    code: 'pl',
    zh_CN: '波兰',
    name: 'Poland',
  },
  {
    code: 'pm',
    zh_CN: '圣皮埃尔岛和密克隆岛',
    name: 'Saint Pierre and Miquelon',
  },
  {
    code: 'pn',
    zh_CN: '皮特凯恩群岛',
    name: 'Pitcairn',
  },
  {
    code: 'pr',
    zh_CN: '波多黎各',
    name: 'Puerto Rico',
  },
  {
    code: 'ps',
    zh_CN: '巴勒斯坦',
    name: 'State of Palestine',
  },
  {
    code: 'pt',
    zh_CN: '葡萄牙',
    name: 'Portugal',
  },
  {
    code: 'pw',
    zh_CN: '帕劳',
    name: 'Palau',
  },
  {
    code: 'py',
    zh_CN: '巴拉圭',
    name: 'Paraguay',
  },
  {
    code: 'qa',
    zh_CN: '卡塔尔',
    name: 'Qatar',
  },
  {
    code: 'ro',
    zh_CN: '罗马尼亚',
    name: 'Romania',
  },
  {
    code: 'rs',
    zh_CN: '塞尔维亚',
    name: 'Serbia',
  },
  {
    code: 'ru',
    zh_CN: '俄罗斯',
    name: 'Russia',
  },
  {
    code: 'rw',
    zh_CN: '卢旺达',
    name: 'Rwanda',
  },
  {
    code: 'sa',
    zh_CN: '沙特阿拉伯',
    name: 'Saudi Arabia',
  },
  {
    code: 'sb',
    zh_CN: '所罗门群岛',
    name: 'Solomon Islands',
  },
  {
    code: 'sc',
    zh_CN: '塞舌尔',
    name: 'Seychelles',
  },
  {
    code: 'sd',
    zh_CN: '苏丹',
    name: 'Sudan',
  },
  {
    code: 'se',
    zh_CN: '瑞典',
    name: 'Sweden',
  },
  {
    code: 'sg',
    zh_CN: '新加坡',
    name: 'Singapore',
  },
  {
    code: 'si',
    zh_CN: '斯洛文尼亚',
    name: 'Slovenia',
  },
  {
    code: 'sk',
    zh_CN: '斯洛伐克',
    name: 'Slovakia',
  },
  {
    code: 'sl',
    zh_CN: '塞拉利昂',
    name: 'Sierra Leone',
  },
  {
    code: 'sm',
    zh_CN: '圣马力诺',
    name: 'San Marino',
  },
  {
    code: 'sn',
    zh_CN: '塞内加尔',
    name: 'Senegal',
  },
  {
    code: 'so',
    zh_CN: '索马里',
    name: 'Somalia',
  },
  {
    code: 'sr',
    zh_CN: '苏里南',
    name: 'Suriname',
  },
  {
    code: 'ss',
    zh_CN: '南苏丹',
    name: 'South Sudan',
  },
  {
    code: 'st',
    zh_CN: '圣多美和普林西比',
    name: 'Sao Tome and Principe',
  },
  {
    code: 'sv',
    zh_CN: '萨尔瓦多',
    name: 'El Salvador',
  },
  {
    code: 'sy',
    zh_CN: '叙利亚',
    name: 'Syrian Arab Republic',
  },
  {
    code: 'sz',
    zh_CN: '斯威士兰',
    name: 'Swaziland',
  },
  {
    code: 'td',
    zh_CN: '乍得',
    name: 'Chad',
  },
  {
    code: 'tg',
    zh_CN: '多哥',
    name: 'Togo',
  },
  {
    code: 'th',
    zh_CN: '泰国',
    name: 'Thailand',
  },
  {
    code: 'tj',
    zh_CN: '塔吉克斯坦',
    name: 'Tajikistan',
  },
  {
    code: 'tk',
    zh_CN: '托克劳岛',
    name: 'Tokelau',
  },
  {
    code: 'tm',
    zh_CN: '土库曼斯坦',
    name: 'Turkmenistan',
  },
  {
    code: 'tn',
    zh_CN: '突尼斯',
    name: 'Tunisia',
  },
  {
    code: 'to',
    zh_CN: '汤加',
    name: 'Tonga',
  },
  {
    code: 'tr',
    zh_CN: '土耳其',
    name: 'Turkey',
  },
  {
    code: 'tt',
    zh_CN: '特立尼达和多巴哥',
    name: 'Trinidad and Tobago',
  },
  {
    code: 'tv',
    zh_CN: '图瓦卢',
    name: 'Tuvalu',
  },
  {
    code: 'tw',
    zh_CN: '台湾省',
    name: 'Taiwan',
  },
  {
    code: 'tz',
    zh_CN: '坦桑尼亚',
    name: 'Tanzania',
  },
  {
    code: 'ua',
    zh_CN: '乌克兰',
    name: 'Ukraine',
  },
  {
    code: 'ug',
    zh_CN: '乌干达',
    name: 'Uganda',
  },
  {
    code: 'un',
    zh_CN: '联合国',
    name: 'United Nations',
  },
  {
    code: 'us',
    zh_CN: '美国',
    name: 'United States of America',
  },
  {
    code: 'uy',
    zh_CN: '乌拉圭',
    name: 'Uruguay',
  },
  {
    code: 'uz',
    zh_CN: '乌兹别克斯坦',
    name: 'Uzbekistan',
  },
  {
    code: 'vc',
    zh_CN: '圣文森特',
    name: 'Saint Vincent and the Grenadines',
  },
  {
    code: 've',
    zh_CN: '委内瑞拉',
    name: 'Venezuela (Bolivarian Republic of)',
  },
  {
    code: 'vn',
    zh_CN: '越南',
    name: 'Vietnam',
  },
  {
    code: 'vu',
    zh_CN: '瓦努阿图',
    name: 'Vanuatu',
  },
  {
    code: 'wf',
    zh_CN: '瓦利斯和富图纳',
    name: 'Wallis and Futuna',
  },
  {
    code: 'ws',
    zh_CN: '萨摩亚',
    name: 'Samoa',
  },
  {
    code: 'xk',
    zh_CN: '科索沃',
    name: 'Kosovo',
  },
  {
    code: 'ye',
    zh_CN: '也门',
    name: 'Yemen',
  },
  {
    code: 'yt',
    zh_CN: '马约特岛',
    name: 'Mayotte',
  },
  {
    code: 'za',
    zh_CN: '南非',
    name: 'South Africa',
  },
  {
    code: 'zm',
    zh_CN: '赞比亚',
    name: 'Zambia',
  },
  {
    code: 'zw',
    zh_CN: '津巴布韦',
    name: 'Zimbabwe',
  },
];

/**
 * 查询国家
 * @param code 国家代码
 * @return {Country} 国家
 */
export const queryCountry = (code: string): Country => {
  return lodash.find(COUNTRY_LIST, ['code', code]) ?? COUNTRY_LIST[0];
};
