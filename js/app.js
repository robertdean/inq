'use strict';
var isAuthenticated = false;
var app = angular.module('app',
    ['ngRoute', 'ngAnimate', 'ui', 'ui.bootstrap', 'app.filters', 'app.services', 'app.directives', 'app.controllers'])
    .constant('version', '0.1')    
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider.when('/', { templateUrl: 'partials/markets.html', controller: 'MarketsCtrl' });
        $routeProvider.otherwise({ redirectTo: '/' });
		
    } ])
.constant('CountryCodes', [
  {
    "CountryName":"Afghanistan ",
    "Alpha2Code":"AF ",
    "Alpha3Code":"AFG ",
    "NumericCode":4,
    "CurrencyName":"Afghani",
    "CurrencyCode":"AFN",
    "Symbol":"؋"
  },
  {
    "CountryName":"Åland Islands ",
    "Alpha2Code":"AX ",
    "Alpha3Code":"ALA ",
    "NumericCode":248,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Albania ",
    "Alpha2Code":"AL ",
    "Alpha3Code":"ALB ",
    "NumericCode":8,
    "CurrencyName":"Lek",
    "CurrencyCode":"ALL",
    "Symbol":"Lek"
  },
  {
    "CountryName":"Algeria ",
    "Alpha2Code":"DZ ",
    "Alpha3Code":"DZA ",
    "NumericCode":12,
    "CurrencyName":"Algerian Dinar",
    "CurrencyCode":"DZD",
    "Symbol":""
  },
  {
    "CountryName":"American Samoa ",
    "Alpha2Code":"AS ",
    "Alpha3Code":"ASM ",
    "NumericCode":16,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Andorra ",
    "Alpha2Code":"AD ",
    "Alpha3Code":"AND ",
    "NumericCode":20,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Angola ",
    "Alpha2Code":"AO ",
    "Alpha3Code":"AGO ",
    "NumericCode":24,
    "CurrencyName":"Kwanza",
    "CurrencyCode":"AOA",
    "Symbol":""
  },
  {
    "CountryName":"Anguilla ",
    "Alpha2Code":"AI ",
    "Alpha3Code":"AIA ",
    "NumericCode":660,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Antarctica ",
    "Alpha2Code":"AQ ",
    "Alpha3Code":"ATA ",
    "NumericCode":10,
    "CurrencyName":"",
    "CurrencyCode":"",
    "Symbol":""
  },
  {
    "CountryName":"Antigua and Barbuda ",
    "Alpha2Code":"AG ",
    "Alpha3Code":"ATG ",
    "NumericCode":28,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Argentina ",
    "Alpha2Code":"AR ",
    "Alpha3Code":"ARG ",
    "NumericCode":32,
    "CurrencyName":"Argentine Peso",
    "CurrencyCode":"ARS",
    "Symbol":"$"
  },
  {
    "CountryName":"Armenia ",
    "Alpha2Code":"AM ",
    "Alpha3Code":"ARM ",
    "NumericCode":51,
    "CurrencyName":"Armenian Dram",
    "CurrencyCode":"AMD",
    "Symbol":""
  },
  {
    "CountryName":"Aruba ",
    "Alpha2Code":"AW ",
    "Alpha3Code":"ABW ",
    "NumericCode":533,
    "CurrencyName":"Aruban Florin",
    "CurrencyCode":"AWG",
    "Symbol":"ƒ"
  },
  {
    "CountryName":"Australia ",
    "Alpha2Code":"AU ",
    "Alpha3Code":"AUS ",
    "NumericCode":36,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Austria ",
    "Alpha2Code":"AT ",
    "Alpha3Code":"AUT ",
    "NumericCode":40,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Azerbaijan ",
    "Alpha2Code":"AZ ",
    "Alpha3Code":"AZE ",
    "NumericCode":31,
    "CurrencyName":"Azerbaijanian Manat",
    "CurrencyCode":"AZN",
    "Symbol":"ман"
  },
  {
    "CountryName":"Bahamas ",
    "Alpha2Code":"BS ",
    "Alpha3Code":"BHS ",
    "NumericCode":44,
    "CurrencyName":"Bahamian Dollar",
    "CurrencyCode":"BSD",
    "Symbol":"$"
  },
  {
    "CountryName":"Bahrain ",
    "Alpha2Code":"BH ",
    "Alpha3Code":"BHR ",
    "NumericCode":48,
    "CurrencyName":"Bahraini Dinar",
    "CurrencyCode":"BHD",
    "Symbol":""
  },
  {
    "CountryName":"Bangladesh ",
    "Alpha2Code":"BD ",
    "Alpha3Code":"BGD ",
    "NumericCode":50,
    "CurrencyName":"Taka",
    "CurrencyCode":"BDT",
    "Symbol":""
  },
  {
    "CountryName":"Barbados ",
    "Alpha2Code":"BB ",
    "Alpha3Code":"BRB ",
    "NumericCode":52,
    "CurrencyName":"Barbados Dollar",
    "CurrencyCode":"BBD",
    "Symbol":"$"
  },
  {
    "CountryName":"Belarus ",
    "Alpha2Code":"BY ",
    "Alpha3Code":"BLR ",
    "NumericCode":112,
    "CurrencyName":"Belarussian Ruble",
    "CurrencyCode":"BYR",
    "Symbol":"p."
  },
  {
    "CountryName":"Belgium ",
    "Alpha2Code":"BE ",
    "Alpha3Code":"BEL ",
    "NumericCode":56,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Belize ",
    "Alpha2Code":"BZ ",
    "Alpha3Code":"BLZ ",
    "NumericCode":84,
    "CurrencyName":"Belize Dollar",
    "CurrencyCode":"BZD",
    "Symbol":"BZ$"
  },
  {
    "CountryName":"Benin ",
    "Alpha2Code":"BJ ",
    "Alpha3Code":"BEN ",
    "NumericCode":204,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Bermuda ",
    "Alpha2Code":"BM ",
    "Alpha3Code":"BMU ",
    "NumericCode":60,
    "CurrencyName":"Bermudian Dollar",
    "CurrencyCode":"BMD",
    "Symbol":"$"
  },
  {
    "CountryName":"Bhutan ",
    "Alpha2Code":"BT ",
    "Alpha3Code":"BTN ",
    "NumericCode":64,
    "CurrencyName":"Ngultrum",
    "CurrencyCode":"BTN",
    "Symbol":""
  },
  {
    "CountryName":"Bolivia, Plurinational State of ",
    "Alpha2Code":"BO ",
    "Alpha3Code":"BOL ",
    "NumericCode":68,
    "CurrencyName":"Boliviano",
    "CurrencyCode":"BOB",
    "Symbol":"$b"
  },
  {
    "CountryName":"Bonaire, Sint Eustatius and Saba ",
    "Alpha2Code":"BQ ",
    "Alpha3Code":"BES ",
    "NumericCode":535,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Bosnia and Herzegovina ",
    "Alpha2Code":"BA ",
    "Alpha3Code":"BIH ",
    "NumericCode":70,
    "CurrencyName":"Convertible Mark",
    "CurrencyCode":"BAM",
    "Symbol":"KM"
  },
  {
    "CountryName":"Botswana ",
    "Alpha2Code":"BW ",
    "Alpha3Code":"BWA ",
    "NumericCode":72,
    "CurrencyName":"Pula",
    "CurrencyCode":"BWP",
    "Symbol":"P"
  },
  {
    "CountryName":"Bouvet Island ",
    "Alpha2Code":"BV ",
    "Alpha3Code":"BVT ",
    "NumericCode":74,
    "CurrencyName":"Norwegian Krone",
    "CurrencyCode":"NOK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Brazil ",
    "Alpha2Code":"BR ",
    "Alpha3Code":"BRA ",
    "NumericCode":76,
    "CurrencyName":"Brazilian Real",
    "CurrencyCode":"BRL",
    "Symbol":"R$"
  },
  {
    "CountryName":"British Indian Ocean Territory ",
    "Alpha2Code":"IO ",
    "Alpha3Code":"IOT ",
    "NumericCode":86,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Brunei Darussalam ",
    "Alpha2Code":"BN ",
    "Alpha3Code":"BRN ",
    "NumericCode":96,
    "CurrencyName":"Brunei Dollar",
    "CurrencyCode":"BND",
    "Symbol":"$"
  },
  {
    "CountryName":"Bulgaria ",
    "Alpha2Code":"BG ",
    "Alpha3Code":"BGR ",
    "NumericCode":100,
    "CurrencyName":"Bulgarian Lev",
    "CurrencyCode":"BGN",
    "Symbol":"лв"
  },
  {
    "CountryName":"Burkina Faso ",
    "Alpha2Code":"BF ",
    "Alpha3Code":"BFA ",
    "NumericCode":854,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Burundi ",
    "Alpha2Code":"BI ",
    "Alpha3Code":"BDI ",
    "NumericCode":108,
    "CurrencyName":"Burundi Franc",
    "CurrencyCode":"BIF",
    "Symbol":""
  },
  {
    "CountryName":"Cambodia ",
    "Alpha2Code":"KH ",
    "Alpha3Code":"KHM ",
    "NumericCode":116,
    "CurrencyName":"Riel",
    "CurrencyCode":"KHR",
    "Symbol":"៛"
  },
  {
    "CountryName":"Cameroon ",
    "Alpha2Code":"CM ",
    "Alpha3Code":"CMR ",
    "NumericCode":120,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Canada ",
    "Alpha2Code":"CA ",
    "Alpha3Code":"CAN ",
    "NumericCode":124,
    "CurrencyName":"Canadian Dollar",
    "CurrencyCode":"CAD",
    "Symbol":"$"
  },
  {
    "CountryName":"Cape Verde ",
    "Alpha2Code":"CV ",
    "Alpha3Code":"CPV ",
    "NumericCode":132,
    "CurrencyName":"Cape Verde Escudo",
    "CurrencyCode":"CVE",
    "Symbol":""
  },
  {
    "CountryName":"Cayman Islands ",
    "Alpha2Code":"KY ",
    "Alpha3Code":"CYM ",
    "NumericCode":136,
    "CurrencyName":"Cayman Islands Dollar",
    "CurrencyCode":"KYD",
    "Symbol":"$"
  },
  {
    "CountryName":"Central African Republic ",
    "Alpha2Code":"CF ",
    "Alpha3Code":"CAF ",
    "NumericCode":140,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Chad ",
    "Alpha2Code":"TD ",
    "Alpha3Code":"TCD ",
    "NumericCode":148,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Chile ",
    "Alpha2Code":"CL ",
    "Alpha3Code":"CHL ",
    "NumericCode":152,
    "CurrencyName":"Chilean Peso",
    "CurrencyCode":"CLP",
    "Symbol":"$"
  },
  {
    "CountryName":"China ",
    "Alpha2Code":"CN ",
    "Alpha3Code":"CHN ",
    "NumericCode":156,
    "CurrencyName":"Yuan Renminbi",
    "CurrencyCode":"CNY",
    "Symbol":"¥"
  },
  {
    "CountryName":"Christmas Island ",
    "Alpha2Code":"CX ",
    "Alpha3Code":"CXR ",
    "NumericCode":162,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Cocos (Keeling) Islands ",
    "Alpha2Code":"CC ",
    "Alpha3Code":"CCK ",
    "NumericCode":166,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Colombia ",
    "Alpha2Code":"CO ",
    "Alpha3Code":"COL ",
    "NumericCode":170,
    "CurrencyName":"Colombian Peso",
    "CurrencyCode":"COP",
    "Symbol":"$"
  },
  {
    "CountryName":"Comoros ",
    "Alpha2Code":"KM ",
    "Alpha3Code":"COM ",
    "NumericCode":174,
    "CurrencyName":"Comoro Franc",
    "CurrencyCode":"KMF",
    "Symbol":""
  },
  {
    "CountryName":"Congo ",
    "Alpha2Code":"CG ",
    "Alpha3Code":"COG ",
    "NumericCode":178,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Congo, the Democratic Republic of the ",
    "Alpha2Code":"CD ",
    "Alpha3Code":"COD ",
    "NumericCode":180,
    "CurrencyName":"Congolese Franc",
    "CurrencyCode":"CDF",
    "Symbol":""
  },
  {
    "CountryName":"Cook Islands ",
    "Alpha2Code":"CK ",
    "Alpha3Code":"COK ",
    "NumericCode":184,
    "CurrencyName":"New Zealand Dollar",
    "CurrencyCode":"NZD",
    "Symbol":"$"
  },
  {
    "CountryName":"Costa Rica ",
    "Alpha2Code":"CR ",
    "Alpha3Code":"CRI ",
    "NumericCode":188,
    "CurrencyName":"Costa Rican Colon",
    "CurrencyCode":"CRC",
    "Symbol":"₡"
  },
  {
    "CountryName":"Côte d'Ivoire ",
    "Alpha2Code":"CI ",
    "Alpha3Code":"CIV ",
    "NumericCode":384,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Croatia ",
    "Alpha2Code":"HR ",
    "Alpha3Code":"HRV ",
    "NumericCode":191,
    "CurrencyName":"Croatian Kuna",
    "CurrencyCode":"HRK",
    "Symbol":"kn"
  },
  {
    "CountryName":"Cuba ",
    "Alpha2Code":"CU ",
    "Alpha3Code":"CUB ",
    "NumericCode":192,
    "CurrencyName":"Cuban Peso",
    "CurrencyCode":"CUP",
    "Symbol":"₱"
  },
  {
    "CountryName":"Curaçao ",
    "Alpha2Code":"CW ",
    "Alpha3Code":"CUW ",
    "NumericCode":531,
    "CurrencyName":"Netherlands Antillean Guilder",
    "CurrencyCode":"ANG",
    "Symbol":"ƒ"
  },
  {
    "CountryName":"Cyprus ",
    "Alpha2Code":"CY ",
    "Alpha3Code":"CYP ",
    "NumericCode":196,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Czech Republic ",
    "Alpha2Code":"CZ ",
    "Alpha3Code":"CZE ",
    "NumericCode":203,
    "CurrencyName":"Czech Koruna",
    "CurrencyCode":"CZK",
    "Symbol":"Kč"
  },
  {
    "CountryName":"Denmark ",
    "Alpha2Code":"DK ",
    "Alpha3Code":"DNK ",
    "NumericCode":208,
    "CurrencyName":"Danish Krone",
    "CurrencyCode":"DKK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Djibouti ",
    "Alpha2Code":"DJ ",
    "Alpha3Code":"DJI ",
    "NumericCode":262,
    "CurrencyName":"Djibouti Franc",
    "CurrencyCode":"DJF",
    "Symbol":""
  },
  {
    "CountryName":"Dominica ",
    "Alpha2Code":"DM ",
    "Alpha3Code":"DMA ",
    "NumericCode":212,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Dominican Republic ",
    "Alpha2Code":"DO ",
    "Alpha3Code":"DOM ",
    "NumericCode":214,
    "CurrencyName":"Dominican Peso",
    "CurrencyCode":"DOP",
    "Symbol":"RD$"
  },
  {
    "CountryName":"Ecuador ",
    "Alpha2Code":"EC ",
    "Alpha3Code":"ECU ",
    "NumericCode":218,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Egypt ",
    "Alpha2Code":"EG ",
    "Alpha3Code":"EGY ",
    "NumericCode":818,
    "CurrencyName":"Egyptian Pound",
    "CurrencyCode":"EGP",
    "Symbol":"£"
  },
  {
    "CountryName":"El Salvador ",
    "Alpha2Code":"SV ",
    "Alpha3Code":"SLV ",
    "NumericCode":222,
    "CurrencyName":"El Salvador Colon",
    "CurrencyCode":"SVC",
    "Symbol":"$"
  },
  {
    "CountryName":"Equatorial Guinea ",
    "Alpha2Code":"GQ ",
    "Alpha3Code":"GNQ ",
    "NumericCode":226,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Eritrea ",
    "Alpha2Code":"ER ",
    "Alpha3Code":"ERI ",
    "NumericCode":232,
    "CurrencyName":"Nakfa",
    "CurrencyCode":"ERN",
    "Symbol":""
  },
  {
    "CountryName":"Estonia ",
    "Alpha2Code":"EE ",
    "Alpha3Code":"EST ",
    "NumericCode":233,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Ethiopia ",
    "Alpha2Code":"ET ",
    "Alpha3Code":"ETH ",
    "NumericCode":231,
    "CurrencyName":"Ethiopian Birr",
    "CurrencyCode":"ETB",
    "Symbol":""
  },
  {
    "CountryName":"European Union",
    "Alpha2Code":"EU",
    "Alpha3Code":"EUR",
    "NumericCode":null,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Falkland Islands (Malvinas) ",
    "Alpha2Code":"FK ",
    "Alpha3Code":"FLK ",
    "NumericCode":238,
    "CurrencyName":"Falkland Islands Pound",
    "CurrencyCode":"FKP",
    "Symbol":"£"
  },
  {
    "CountryName":"Faroe Islands ",
    "Alpha2Code":"FO ",
    "Alpha3Code":"FRO ",
    "NumericCode":234,
    "CurrencyName":"Danish Krone",
    "CurrencyCode":"DKK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Fiji ",
    "Alpha2Code":"FJ ",
    "Alpha3Code":"FJI ",
    "NumericCode":242,
    "CurrencyName":"Fiji Dollar",
    "CurrencyCode":"FJD",
    "Symbol":"$"
  },
  {
    "CountryName":"Finland ",
    "Alpha2Code":"FI ",
    "Alpha3Code":"FIN ",
    "NumericCode":246,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"France ",
    "Alpha2Code":"FR ",
    "Alpha3Code":"FRA ",
    "NumericCode":250,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"French Guiana ",
    "Alpha2Code":"GF ",
    "Alpha3Code":"GUF ",
    "NumericCode":254,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"French Polynesia ",
    "Alpha2Code":"PF ",
    "Alpha3Code":"PYF ",
    "NumericCode":258,
    "CurrencyName":"CFP Franc",
    "CurrencyCode":"XPF",
    "Symbol":""
  },
  {
    "CountryName":"French Southern Territories ",
    "Alpha2Code":"TF ",
    "Alpha3Code":"ATF ",
    "NumericCode":260,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Gabon ",
    "Alpha2Code":"GA ",
    "Alpha3Code":"GAB ",
    "NumericCode":266,
    "CurrencyName":"CFA Franc BEAC",
    "CurrencyCode":"XAF",
    "Symbol":""
  },
  {
    "CountryName":"Gambia ",
    "Alpha2Code":"GM ",
    "Alpha3Code":"GMB ",
    "NumericCode":270,
    "CurrencyName":"Dalasi",
    "CurrencyCode":"GMD",
    "Symbol":""
  },
  {
    "CountryName":"Georgia ",
    "Alpha2Code":"GE ",
    "Alpha3Code":"GEO ",
    "NumericCode":268,
    "CurrencyName":"Lari",
    "CurrencyCode":"GEL",
    "Symbol":""
  },
  {
    "CountryName":"Germany ",
    "Alpha2Code":"DE ",
    "Alpha3Code":"DEU ",
    "NumericCode":276,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Ghana ",
    "Alpha2Code":"GH ",
    "Alpha3Code":"GHA ",
    "NumericCode":288,
    "CurrencyName":"Ghana Cedi",
    "CurrencyCode":"GHS",
    "Symbol":""
  },
  {
    "CountryName":"Gibraltar ",
    "Alpha2Code":"GI ",
    "Alpha3Code":"GIB ",
    "NumericCode":292,
    "CurrencyName":"Gibraltar Pound",
    "CurrencyCode":"GIP",
    "Symbol":"£"
  },
  {
    "CountryName":"Greece ",
    "Alpha2Code":"GR ",
    "Alpha3Code":"GRC ",
    "NumericCode":300,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Greenland ",
    "Alpha2Code":"GL ",
    "Alpha3Code":"GRL ",
    "NumericCode":304,
    "CurrencyName":"Danish Krone",
    "CurrencyCode":"DKK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Grenada ",
    "Alpha2Code":"GD ",
    "Alpha3Code":"GRD ",
    "NumericCode":308,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Guadeloupe ",
    "Alpha2Code":"GP ",
    "Alpha3Code":"GLP ",
    "NumericCode":312,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Guam ",
    "Alpha2Code":"GU ",
    "Alpha3Code":"GUM ",
    "NumericCode":316,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Guatemala ",
    "Alpha2Code":"GT ",
    "Alpha3Code":"GTM ",
    "NumericCode":320,
    "CurrencyName":"Quetzal",
    "CurrencyCode":"GTQ",
    "Symbol":"Q"
  },
  {
    "CountryName":"Guernsey ",
    "Alpha2Code":"GG ",
    "Alpha3Code":"GGY ",
    "NumericCode":831,
    "CurrencyName":"Pound Sterling",
    "CurrencyCode":"GBP",
    "Symbol":"£"
  },
  {
    "CountryName":"Guinea ",
    "Alpha2Code":"GN ",
    "Alpha3Code":"GIN ",
    "NumericCode":324,
    "CurrencyName":"Guinea Franc",
    "CurrencyCode":"GNF",
    "Symbol":""
  },
  {
    "CountryName":"Guinea-Bissau ",
    "Alpha2Code":"GW ",
    "Alpha3Code":"GNB ",
    "NumericCode":624,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Guyana ",
    "Alpha2Code":"GY ",
    "Alpha3Code":"GUY ",
    "NumericCode":328,
    "CurrencyName":"Guyana Dollar",
    "CurrencyCode":"GYD",
    "Symbol":"$"
  },
  {
    "CountryName":"Haiti ",
    "Alpha2Code":"HT ",
    "Alpha3Code":"HTI ",
    "NumericCode":332,
    "CurrencyName":"Gourde",
    "CurrencyCode":"HTG",
    "Symbol":""
  },
  {
    "CountryName":"Heard Island and McDonald Islands ",
    "Alpha2Code":"HM ",
    "Alpha3Code":"HMD ",
    "NumericCode":334,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Holy See (Vatican City State) ",
    "Alpha2Code":"VA ",
    "Alpha3Code":"VAT ",
    "NumericCode":336,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Honduras ",
    "Alpha2Code":"HN ",
    "Alpha3Code":"HND ",
    "NumericCode":340,
    "CurrencyName":"Lempira",
    "CurrencyCode":"HNL",
    "Symbol":"L"
  },
  {
    "CountryName":"Hong Kong ",
    "Alpha2Code":"HK ",
    "Alpha3Code":"HKG ",
    "NumericCode":344,
    "CurrencyName":"Hong Kong Dollar",
    "CurrencyCode":"HKD",
    "Symbol":"$"
  },
  {
    "CountryName":"Hungary ",
    "Alpha2Code":"HU ",
    "Alpha3Code":"HUN ",
    "NumericCode":348,
    "CurrencyName":"Forint",
    "CurrencyCode":"HUF",
    "Symbol":"Ft"
  },
  {
    "CountryName":"Iceland ",
    "Alpha2Code":"IS ",
    "Alpha3Code":"ISL ",
    "NumericCode":352,
    "CurrencyName":"Iceland Krona",
    "CurrencyCode":"ISK",
    "Symbol":"kr"
  },
  {
    "CountryName":"India ",
    "Alpha2Code":"IN ",
    "Alpha3Code":"IND ",
    "NumericCode":356,
    "CurrencyName":"Indian Rupee",
    "CurrencyCode":"INR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Indonesia ",
    "Alpha2Code":"ID ",
    "Alpha3Code":"IDN ",
    "NumericCode":360,
    "CurrencyName":"Rupiah",
    "CurrencyCode":"IDR",
    "Symbol":"Rp"
  },
  {
    "CountryName":"Iran, Islamic Republic of ",
    "Alpha2Code":"IR ",
    "Alpha3Code":"IRN ",
    "NumericCode":364,
    "CurrencyName":"Iranian Rial",
    "CurrencyCode":"IRR",
    "Symbol":"﷼"
  },
  {
    "CountryName":"Iraq ",
    "Alpha2Code":"IQ ",
    "Alpha3Code":"IRQ ",
    "NumericCode":368,
    "CurrencyName":"Iraqi Dinar",
    "CurrencyCode":"IQD",
    "Symbol":""
  },
  {
    "CountryName":"Ireland ",
    "Alpha2Code":"IE ",
    "Alpha3Code":"IRL ",
    "NumericCode":372,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Isle of Man ",
    "Alpha2Code":"IM ",
    "Alpha3Code":"IMN ",
    "NumericCode":833,
    "CurrencyName":"Pound Sterling",
    "CurrencyCode":"GBP",
    "Symbol":"£"
  },
  {
    "CountryName":"Israel ",
    "Alpha2Code":"IL ",
    "Alpha3Code":"ISR ",
    "NumericCode":376,
    "CurrencyName":"New Israeli Sheqel",
    "CurrencyCode":"ILS",
    "Symbol":"₪"
  },
  {
    "CountryName":"Italy ",
    "Alpha2Code":"IT ",
    "Alpha3Code":"ITA ",
    "NumericCode":380,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Jamaica ",
    "Alpha2Code":"JM ",
    "Alpha3Code":"JAM ",
    "NumericCode":388,
    "CurrencyName":"Jamaican Dollar",
    "CurrencyCode":"JMD",
    "Symbol":"J$"
  },
  {
    "CountryName":"Japan ",
    "Alpha2Code":"JP ",
    "Alpha3Code":"JPN ",
    "NumericCode":392,
    "CurrencyName":"Yen",
    "CurrencyCode":"JPY",
    "Symbol":"¥"
  },
  {
    "CountryName":"Jersey ",
    "Alpha2Code":"JE ",
    "Alpha3Code":"JEY ",
    "NumericCode":832,
    "CurrencyName":"Pound Sterling",
    "CurrencyCode":"GBP",
    "Symbol":"£"
  },
  {
    "CountryName":"Jordan ",
    "Alpha2Code":"JO ",
    "Alpha3Code":"JOR ",
    "NumericCode":400,
    "CurrencyName":"Jordanian Dinar",
    "CurrencyCode":"JOD",
    "Symbol":""
  },
  {
    "CountryName":"Kazakhstan ",
    "Alpha2Code":"KZ ",
    "Alpha3Code":"KAZ ",
    "NumericCode":398,
    "CurrencyName":"Tenge",
    "CurrencyCode":"KZT",
    "Symbol":"лв"
  },
  {
    "CountryName":"Kenya ",
    "Alpha2Code":"KE ",
    "Alpha3Code":"KEN ",
    "NumericCode":404,
    "CurrencyName":"Kenyan Shilling",
    "CurrencyCode":"KES",
    "Symbol":""
  },
  {
    "CountryName":"Kiribati ",
    "Alpha2Code":"KI ",
    "Alpha3Code":"KIR ",
    "NumericCode":296,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Korea, Democratic People's Republic of ",
    "Alpha2Code":"KP ",
    "Alpha3Code":"PRK ",
    "NumericCode":408,
    "CurrencyName":"North Korean Won",
    "CurrencyCode":"KPW",
    "Symbol":"₩"
  },
  {
    "CountryName":"Korea, Republic of ",
    "Alpha2Code":"KR ",
    "Alpha3Code":"KOR ",
    "NumericCode":410,
    "CurrencyName":"Won",
    "CurrencyCode":"KRW",
    "Symbol":"₩"
  },
  {
    "CountryName":"Kuwait ",
    "Alpha2Code":"KW ",
    "Alpha3Code":"KWT ",
    "NumericCode":414,
    "CurrencyName":"Kuwaiti Dinar",
    "CurrencyCode":"KWD",
    "Symbol":""
  },
  {
    "CountryName":"Kyrgyzstan ",
    "Alpha2Code":"KG ",
    "Alpha3Code":"KGZ ",
    "NumericCode":417,
    "CurrencyName":"Som",
    "CurrencyCode":"KGS",
    "Symbol":"лв"
  },
  {
    "CountryName":"Lao People's Democratic Republic ",
    "Alpha2Code":"LA ",
    "Alpha3Code":"LAO ",
    "NumericCode":418,
    "CurrencyName":"Kip",
    "CurrencyCode":"LAK",
    "Symbol":"₭"
  },
  {
    "CountryName":"Latvia ",
    "Alpha2Code":"LV ",
    "Alpha3Code":"LVA ",
    "NumericCode":428,
    "CurrencyName":"Latvian Lats",
    "CurrencyCode":"LVL",
    "Symbol":"Ls"
  },
  {
    "CountryName":"Lebanon ",
    "Alpha2Code":"LB ",
    "Alpha3Code":"LBN ",
    "NumericCode":422,
    "CurrencyName":"Lebanese Pound",
    "CurrencyCode":"LBP",
    "Symbol":"£"
  },
  {
    "CountryName":"Lesotho ",
    "Alpha2Code":"LS ",
    "Alpha3Code":"LSO ",
    "NumericCode":426,
    "CurrencyName":"Loti",
    "CurrencyCode":"LSL",
    "Symbol":""
  },
  {
    "CountryName":"Liberia ",
    "Alpha2Code":"LR ",
    "Alpha3Code":"LBR ",
    "NumericCode":430,
    "CurrencyName":"Liberian Dollar",
    "CurrencyCode":"LRD",
    "Symbol":"$"
  },
  {
    "CountryName":"Libya ",
    "Alpha2Code":"LY ",
    "Alpha3Code":"LBY ",
    "NumericCode":434,
    "CurrencyName":"Libyan Dinar",
    "CurrencyCode":"LYD",
    "Symbol":""
  },
  {
    "CountryName":"Liechtenstein ",
    "Alpha2Code":"LI ",
    "Alpha3Code":"LIE ",
    "NumericCode":438,
    "CurrencyName":"Swiss Franc",
    "CurrencyCode":"CHF",
    "Symbol":"CHF"
  },
  {
    "CountryName":"Lithuania ",
    "Alpha2Code":"LT ",
    "Alpha3Code":"LTU ",
    "NumericCode":440,
    "CurrencyName":"Lithuanian Litas",
    "CurrencyCode":"LTL",
    "Symbol":"Lt"
  },
  {
    "CountryName":"Luxembourg ",
    "Alpha2Code":"LU ",
    "Alpha3Code":"LUX ",
    "NumericCode":442,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Macao ",
    "Alpha2Code":"MO ",
    "Alpha3Code":"MAC ",
    "NumericCode":446,
    "CurrencyName":"Pataca",
    "CurrencyCode":"MOP",
    "Symbol":""
  },
  {
    "CountryName":"Macedonia, The Former Yugoslav Republic of ",
    "Alpha2Code":"MK ",
    "Alpha3Code":"MKD ",
    "NumericCode":807,
    "CurrencyName":"Denar",
    "CurrencyCode":"MKD",
    "Symbol":"ден"
  },
  {
    "CountryName":"Madagascar ",
    "Alpha2Code":"MG ",
    "Alpha3Code":"MDG ",
    "NumericCode":450,
    "CurrencyName":"Malagasy Ariary",
    "CurrencyCode":"MGA",
    "Symbol":""
  },
  {
    "CountryName":"Malawi ",
    "Alpha2Code":"MW ",
    "Alpha3Code":"MWI ",
    "NumericCode":454,
    "CurrencyName":"Kwacha",
    "CurrencyCode":"MWK",
    "Symbol":""
  },
  {
    "CountryName":"Malaysia ",
    "Alpha2Code":"MY ",
    "Alpha3Code":"MYS ",
    "NumericCode":458,
    "CurrencyName":"Malaysian Ringgit",
    "CurrencyCode":"MYR",
    "Symbol":"RM"
  },
  {
    "CountryName":"Maldives ",
    "Alpha2Code":"MV ",
    "Alpha3Code":"MDV ",
    "NumericCode":462,
    "CurrencyName":"Rufiyaa",
    "CurrencyCode":"MVR",
    "Symbol":""
  },
  {
    "CountryName":"Mali ",
    "Alpha2Code":"ML ",
    "Alpha3Code":"MLI ",
    "NumericCode":466,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Malta ",
    "Alpha2Code":"MT ",
    "Alpha3Code":"MLT ",
    "NumericCode":470,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Marshall Islands ",
    "Alpha2Code":"MH ",
    "Alpha3Code":"MHL ",
    "NumericCode":584,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Martinique ",
    "Alpha2Code":"MQ ",
    "Alpha3Code":"MTQ ",
    "NumericCode":474,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Mauritania ",
    "Alpha2Code":"MR ",
    "Alpha3Code":"MRT ",
    "NumericCode":478,
    "CurrencyName":"Ouguiya",
    "CurrencyCode":"MRO",
    "Symbol":""
  },
  {
    "CountryName":"Mauritius ",
    "Alpha2Code":"MU ",
    "Alpha3Code":"MUS ",
    "NumericCode":480,
    "CurrencyName":"Mauritius Rupee",
    "CurrencyCode":"MUR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Mayotte ",
    "Alpha2Code":"YT ",
    "Alpha3Code":"MYT ",
    "NumericCode":175,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Mexico ",
    "Alpha2Code":"MX ",
    "Alpha3Code":"MEX ",
    "NumericCode":484,
    "CurrencyName":"Mexican Peso",
    "CurrencyCode":"MXN",
    "Symbol":"$"
  },
  {
    "CountryName":"Micronesia, Federated States of ",
    "Alpha2Code":"FM ",
    "Alpha3Code":"FSM ",
    "NumericCode":583,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Moldova, Republic of ",
    "Alpha2Code":"MD ",
    "Alpha3Code":"MDA ",
    "NumericCode":498,
    "CurrencyName":"Moldovan Leu",
    "CurrencyCode":"MDL",
    "Symbol":""
  },
  {
    "CountryName":"Monaco ",
    "Alpha2Code":"MC ",
    "Alpha3Code":"MCO ",
    "NumericCode":492,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Mongolia ",
    "Alpha2Code":"MN ",
    "Alpha3Code":"MNG ",
    "NumericCode":496,
    "CurrencyName":"Tugrik",
    "CurrencyCode":"MNT",
    "Symbol":"₮"
  },
  {
    "CountryName":"Montenegro ",
    "Alpha2Code":"ME ",
    "Alpha3Code":"MNE ",
    "NumericCode":499,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Montserrat ",
    "Alpha2Code":"MS ",
    "Alpha3Code":"MSR ",
    "NumericCode":500,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Morocco ",
    "Alpha2Code":"MA ",
    "Alpha3Code":"MAR ",
    "NumericCode":504,
    "CurrencyName":"Moroccan Dirham",
    "CurrencyCode":"MAD",
    "Symbol":""
  },
  {
    "CountryName":"Mozambique ",
    "Alpha2Code":"MZ ",
    "Alpha3Code":"MOZ ",
    "NumericCode":508,
    "CurrencyName":"Mozambique Metical",
    "CurrencyCode":"MZN",
    "Symbol":"MT"
  },
  {
    "CountryName":"Myanmar ",
    "Alpha2Code":"MM ",
    "Alpha3Code":"MMR ",
    "NumericCode":104,
    "CurrencyName":"Kyat",
    "CurrencyCode":"MMK",
    "Symbol":""
  },
  {
    "CountryName":"Namibia ",
    "Alpha2Code":"NA ",
    "Alpha3Code":"NAM ",
    "NumericCode":516,
    "CurrencyName":"Namibia Dollar",
    "CurrencyCode":"NAD",
    "Symbol":"$"
  },
  {
    "CountryName":"Nauru ",
    "Alpha2Code":"NR ",
    "Alpha3Code":"NRU ",
    "NumericCode":520,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Nepal ",
    "Alpha2Code":"NP ",
    "Alpha3Code":"NPL ",
    "NumericCode":524,
    "CurrencyName":"Nepalese Rupee",
    "CurrencyCode":"NPR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Netherlands ",
    "Alpha2Code":"NL ",
    "Alpha3Code":"NLD ",
    "NumericCode":528,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"New Caledonia ",
    "Alpha2Code":"NC ",
    "Alpha3Code":"NCL ",
    "NumericCode":540,
    "CurrencyName":"CFP Franc",
    "CurrencyCode":"XPF",
    "Symbol":""
  },
  {
    "CountryName":"New Zealand ",
    "Alpha2Code":"NZ ",
    "Alpha3Code":"NZL ",
    "NumericCode":554,
    "CurrencyName":"New Zealand Dollar",
    "CurrencyCode":"NZD",
    "Symbol":"$"
  },
  {
    "CountryName":"Nicaragua ",
    "Alpha2Code":"NI ",
    "Alpha3Code":"NIC ",
    "NumericCode":558,
    "CurrencyName":"Cordoba Oro",
    "CurrencyCode":"NIO",
    "Symbol":"C$"
  },
  {
    "CountryName":"Niger ",
    "Alpha2Code":"NE ",
    "Alpha3Code":"NER ",
    "NumericCode":562,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Nigeria ",
    "Alpha2Code":"NG ",
    "Alpha3Code":"NGA ",
    "NumericCode":566,
    "CurrencyName":"Naira",
    "CurrencyCode":"NGN",
    "Symbol":"₦"
  },
  {
    "CountryName":"Niue ",
    "Alpha2Code":"NU ",
    "Alpha3Code":"NIU ",
    "NumericCode":570,
    "CurrencyName":"New Zealand Dollar",
    "CurrencyCode":"NZD",
    "Symbol":"$"
  },
  {
    "CountryName":"Norfolk Island ",
    "Alpha2Code":"NF ",
    "Alpha3Code":"NFK ",
    "NumericCode":574,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Northern Mariana Islands ",
    "Alpha2Code":"MP ",
    "Alpha3Code":"MNP ",
    "NumericCode":580,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Norway ",
    "Alpha2Code":"NO ",
    "Alpha3Code":"NOR ",
    "NumericCode":578,
    "CurrencyName":"Norwegian Krone",
    "CurrencyCode":"NOK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Oman ",
    "Alpha2Code":"OM ",
    "Alpha3Code":"OMN ",
    "NumericCode":512,
    "CurrencyName":"Rial Omani",
    "CurrencyCode":"OMR",
    "Symbol":"﷼"
  },
  {
    "CountryName":"Pakistan ",
    "Alpha2Code":"PK ",
    "Alpha3Code":"PAK ",
    "NumericCode":586,
    "CurrencyName":"Pakistan Rupee",
    "CurrencyCode":"PKR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Palau ",
    "Alpha2Code":"PW ",
    "Alpha3Code":"PLW ",
    "NumericCode":585,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Palestine, State of ",
    "Alpha2Code":"PS ",
    "Alpha3Code":"PSE ",
    "NumericCode":275,
    "CurrencyName":"",
    "CurrencyCode":"",
    "Symbol":""
  },
  {
    "CountryName":"Panama ",
    "Alpha2Code":"PA ",
    "Alpha3Code":"PAN ",
    "NumericCode":591,
    "CurrencyName":"Balboa",
    "CurrencyCode":"PAB",
    "Symbol":"B/."
  },
  {
    "CountryName":"Papua New Guinea ",
    "Alpha2Code":"PG ",
    "Alpha3Code":"PNG ",
    "NumericCode":598,
    "CurrencyName":"Kina",
    "CurrencyCode":"PGK",
    "Symbol":""
  },
  {
    "CountryName":"Paraguay ",
    "Alpha2Code":"PY ",
    "Alpha3Code":"PRY ",
    "NumericCode":600,
    "CurrencyName":"Guarani",
    "CurrencyCode":"PYG",
    "Symbol":"Gs"
  },
  {
    "CountryName":"Peru ",
    "Alpha2Code":"PE ",
    "Alpha3Code":"PER ",
    "NumericCode":604,
    "CurrencyName":"Nuevo Sol",
    "CurrencyCode":"PEN",
    "Symbol":"S/."
  },
  {
    "CountryName":"Philippines ",
    "Alpha2Code":"PH ",
    "Alpha3Code":"PHL ",
    "NumericCode":608,
    "CurrencyName":"Philippine Peso",
    "CurrencyCode":"PHP",
    "Symbol":"₱"
  },
  {
    "CountryName":"Pitcairn ",
    "Alpha2Code":"PN ",
    "Alpha3Code":"PCN ",
    "NumericCode":612,
    "CurrencyName":"New Zealand Dollar",
    "CurrencyCode":"NZD",
    "Symbol":"$"
  },
  {
    "CountryName":"Poland ",
    "Alpha2Code":"PL ",
    "Alpha3Code":"POL ",
    "NumericCode":616,
    "CurrencyName":"Zloty",
    "CurrencyCode":"PLN",
    "Symbol":"zł"
  },
  {
    "CountryName":"Portugal ",
    "Alpha2Code":"PT ",
    "Alpha3Code":"PRT ",
    "NumericCode":620,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Puerto Rico ",
    "Alpha2Code":"PR ",
    "Alpha3Code":"PRI ",
    "NumericCode":630,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Qatar ",
    "Alpha2Code":"QA ",
    "Alpha3Code":"QAT ",
    "NumericCode":634,
    "CurrencyName":"Qatari Rial",
    "CurrencyCode":"QAR",
    "Symbol":"﷼"
  },
  {
    "CountryName":"Réunion ",
    "Alpha2Code":"RE ",
    "Alpha3Code":"REU ",
    "NumericCode":638,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Romania ",
    "Alpha2Code":"RO ",
    "Alpha3Code":"ROU ",
    "NumericCode":642,
    "CurrencyName":"New Romanian Leu",
    "CurrencyCode":"RON",
    "Symbol":"lei"
  },
  {
    "CountryName":"Russian Federation ",
    "Alpha2Code":"RU ",
    "Alpha3Code":"RUS ",
    "NumericCode":643,
    "CurrencyName":"Russian Ruble",
    "CurrencyCode":"RUB",
    "Symbol":"руб"
  },
  {
    "CountryName":"Rwanda ",
    "Alpha2Code":"RW ",
    "Alpha3Code":"RWA ",
    "NumericCode":646,
    "CurrencyName":"Rwanda Franc",
    "CurrencyCode":"RWF",
    "Symbol":""
  },
  {
    "CountryName":"Saint Barthélemy ",
    "Alpha2Code":"BL ",
    "Alpha3Code":"BLM ",
    "NumericCode":652,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Saint Helena, Ascension and Tristan da Cunha ",
    "Alpha2Code":"SH ",
    "Alpha3Code":"SHN ",
    "NumericCode":654,
    "CurrencyName":"Saint Helena Pound",
    "CurrencyCode":"SHP",
    "Symbol":"£"
  },
  {
    "CountryName":"Saint Kitts and Nevis ",
    "Alpha2Code":"KN ",
    "Alpha3Code":"KNA ",
    "NumericCode":659,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Saint Lucia ",
    "Alpha2Code":"LC ",
    "Alpha3Code":"LCA ",
    "NumericCode":662,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Saint Martin (French part) ",
    "Alpha2Code":"MF ",
    "Alpha3Code":"MAF ",
    "NumericCode":663,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Saint Pierre and Miquelon ",
    "Alpha2Code":"PM ",
    "Alpha3Code":"SPM ",
    "NumericCode":666,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Saint Vincent and the Grenadines ",
    "Alpha2Code":"VC ",
    "Alpha3Code":"VCT ",
    "NumericCode":670,
    "CurrencyName":"East Caribbean Dollar",
    "CurrencyCode":"XCD",
    "Symbol":"$"
  },
  {
    "CountryName":"Samoa ",
    "Alpha2Code":"WS ",
    "Alpha3Code":"WSM ",
    "NumericCode":882,
    "CurrencyName":"Tala",
    "CurrencyCode":"WST",
    "Symbol":""
  },
  {
    "CountryName":"San Marino ",
    "Alpha2Code":"SM ",
    "Alpha3Code":"SMR ",
    "NumericCode":674,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Sao Tome and Principe ",
    "Alpha2Code":"ST ",
    "Alpha3Code":"STP ",
    "NumericCode":678,
    "CurrencyName":"Dobra",
    "CurrencyCode":"STD",
    "Symbol":""
  },
  {
    "CountryName":"Saudi Arabia ",
    "Alpha2Code":"SA ",
    "Alpha3Code":"SAU ",
    "NumericCode":682,
    "CurrencyName":"Saudi Riyal",
    "CurrencyCode":"SAR",
    "Symbol":"﷼"
  },
  {
    "CountryName":"Senegal ",
    "Alpha2Code":"SN ",
    "Alpha3Code":"SEN ",
    "NumericCode":686,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Serbia ",
    "Alpha2Code":"RS ",
    "Alpha3Code":"SRB ",
    "NumericCode":688,
    "CurrencyName":"Serbian Dinar",
    "CurrencyCode":"RSD",
    "Symbol":"Дин."
  },
  {
    "CountryName":"Seychelles ",
    "Alpha2Code":"SC ",
    "Alpha3Code":"SYC ",
    "NumericCode":690,
    "CurrencyName":"Seychelles Rupee",
    "CurrencyCode":"SCR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Sierra Leone ",
    "Alpha2Code":"SL ",
    "Alpha3Code":"SLE ",
    "NumericCode":694,
    "CurrencyName":"Leone",
    "CurrencyCode":"SLL",
    "Symbol":""
  },
  {
    "CountryName":"Singapore ",
    "Alpha2Code":"SG ",
    "Alpha3Code":"SGP ",
    "NumericCode":702,
    "CurrencyName":"Singapore Dollar",
    "CurrencyCode":"SGD",
    "Symbol":"$"
  },
  {
    "CountryName":"Sint Maarten (Dutch part) ",
    "Alpha2Code":"SX ",
    "Alpha3Code":"SXM ",
    "NumericCode":534,
    "CurrencyName":"Netherlands Antillean Guilder",
    "CurrencyCode":"ANG",
    "Symbol":"ƒ"
  },
  {
    "CountryName":"Slovakia ",
    "Alpha2Code":"SK ",
    "Alpha3Code":"SVK ",
    "NumericCode":703,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Slovenia ",
    "Alpha2Code":"SI ",
    "Alpha3Code":"SVN ",
    "NumericCode":705,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Solomon Islands ",
    "Alpha2Code":"SB ",
    "Alpha3Code":"SLB ",
    "NumericCode":90,
    "CurrencyName":"Solomon Islands Dollar",
    "CurrencyCode":"SBD",
    "Symbol":"$"
  },
  {
    "CountryName":"Somalia ",
    "Alpha2Code":"SO ",
    "Alpha3Code":"SOM ",
    "NumericCode":706,
    "CurrencyName":"Somali Shilling",
    "CurrencyCode":"SOS",
    "Symbol":"S"
  },
  {
    "CountryName":"South Africa ",
    "Alpha2Code":"ZA ",
    "Alpha3Code":"ZAF ",
    "NumericCode":710,
    "CurrencyName":"Rand",
    "CurrencyCode":"ZAR",
    "Symbol":"R"
  },
  {
    "CountryName":"South Georgia and the South Sandwich Islands ",
    "Alpha2Code":"GS ",
    "Alpha3Code":"SGS ",
    "NumericCode":239,
    "CurrencyName":"No universal currency",
    "CurrencyCode":"",
    "Symbol":""
  },
  {
    "CountryName":"South Sudan ",
    "Alpha2Code":"SS ",
    "Alpha3Code":"SSD ",
    "NumericCode":728,
    "CurrencyName":"South Sudanese Pound",
    "CurrencyCode":"SSP",
    "Symbol":""
  },
  {
    "CountryName":"Spain ",
    "Alpha2Code":"ES ",
    "Alpha3Code":"ESP ",
    "NumericCode":724,
    "CurrencyName":"Euro",
    "CurrencyCode":"EUR",
    "Symbol":"€"
  },
  {
    "CountryName":"Sri Lanka ",
    "Alpha2Code":"LK ",
    "Alpha3Code":"LKA ",
    "NumericCode":144,
    "CurrencyName":"Sri Lanka Rupee",
    "CurrencyCode":"LKR",
    "Symbol":"₨"
  },
  {
    "CountryName":"Sudan ",
    "Alpha2Code":"SD ",
    "Alpha3Code":"SDN ",
    "NumericCode":729,
    "CurrencyName":"Sudanese Pound",
    "CurrencyCode":"SDG",
    "Symbol":""
  },
  {
    "CountryName":"Suriname ",
    "Alpha2Code":"SR ",
    "Alpha3Code":"SUR ",
    "NumericCode":740,
    "CurrencyName":"Surinam Dollar",
    "CurrencyCode":"SRD",
    "Symbol":"$"
  },
  {
    "CountryName":"Svalbard and Jan Mayen ",
    "Alpha2Code":"SJ ",
    "Alpha3Code":"SJM ",
    "NumericCode":744,
    "CurrencyName":"Norwegian Krone",
    "CurrencyCode":"NOK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Swaziland ",
    "Alpha2Code":"SZ ",
    "Alpha3Code":"SWZ ",
    "NumericCode":748,
    "CurrencyName":"Lilangeni",
    "CurrencyCode":"SZL",
    "Symbol":""
  },
  {
    "CountryName":"Sweden ",
    "Alpha2Code":"SE ",
    "Alpha3Code":"SWE ",
    "NumericCode":752,
    "CurrencyName":"Swedish Krona",
    "CurrencyCode":"SEK",
    "Symbol":"kr"
  },
  {
    "CountryName":"Switzerland ",
    "Alpha2Code":"CH ",
    "Alpha3Code":"CHE ",
    "NumericCode":756,
    "CurrencyName":"Swiss Franc",
    "CurrencyCode":"CHF",
    "Symbol":"CHF"
  },
  {
    "CountryName":"Syrian Arab Republic ",
    "Alpha2Code":"SY ",
    "Alpha3Code":"SYR ",
    "NumericCode":760,
    "CurrencyName":"Syrian Pound",
    "CurrencyCode":"SYP",
    "Symbol":"£"
  },
  {
    "CountryName":"Taiwan, Province of China ",
    "Alpha2Code":"TW ",
    "Alpha3Code":"TWN ",
    "NumericCode":158,
    "CurrencyName":"New Taiwan Dollar",
    "CurrencyCode":"TWD",
    "Symbol":"NT$"
  },
  {
    "CountryName":"Tajikistan ",
    "Alpha2Code":"TJ ",
    "Alpha3Code":"TJK ",
    "NumericCode":762,
    "CurrencyName":"Somoni",
    "CurrencyCode":"TJS",
    "Symbol":""
  },
  {
    "CountryName":"Tanzania, United Republic of ",
    "Alpha2Code":"TZ ",
    "Alpha3Code":"TZA ",
    "NumericCode":834,
    "CurrencyName":"Tanzanian Shilling",
    "CurrencyCode":"TZS",
    "Symbol":""
  },
  {
    "CountryName":"Thailand ",
    "Alpha2Code":"TH ",
    "Alpha3Code":"THA ",
    "NumericCode":764,
    "CurrencyName":"Baht",
    "CurrencyCode":"THB",
    "Symbol":"฿"
  },
  {
    "CountryName":"Timor-Leste ",
    "Alpha2Code":"TL ",
    "Alpha3Code":"TLS ",
    "NumericCode":626,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Togo ",
    "Alpha2Code":"TG ",
    "Alpha3Code":"TGO ",
    "NumericCode":768,
    "CurrencyName":"CFA Franc BCEAO",
    "CurrencyCode":"XOF",
    "Symbol":""
  },
  {
    "CountryName":"Tokelau ",
    "Alpha2Code":"TK ",
    "Alpha3Code":"TKL ",
    "NumericCode":772,
    "CurrencyName":"New Zealand Dollar",
    "CurrencyCode":"NZD",
    "Symbol":"$"
  },
  {
    "CountryName":"Tonga ",
    "Alpha2Code":"TO ",
    "Alpha3Code":"TON ",
    "NumericCode":776,
    "CurrencyName":"Pa’anga",
    "CurrencyCode":"TOP",
    "Symbol":""
  },
  {
    "CountryName":"Trinidad and Tobago ",
    "Alpha2Code":"TT ",
    "Alpha3Code":"TTO ",
    "NumericCode":780,
    "CurrencyName":"Trinidad and Tobago Dollar",
    "CurrencyCode":"TTD",
    "Symbol":"TT$"
  },
  {
    "CountryName":"Tunisia ",
    "Alpha2Code":"TN ",
    "Alpha3Code":"TUN ",
    "NumericCode":788,
    "CurrencyName":"Tunisian Dinar",
    "CurrencyCode":"TND",
    "Symbol":""
  },
  {
    "CountryName":"Turkey ",
    "Alpha2Code":"TR ",
    "Alpha3Code":"TUR ",
    "NumericCode":792,
    "CurrencyName":"Turkish Lira",
    "CurrencyCode":"TRY",
    "Symbol":"₤"
  },
  {
    "CountryName":"Turkmenistan ",
    "Alpha2Code":"TM ",
    "Alpha3Code":"TKM ",
    "NumericCode":795,
    "CurrencyName":"Turkmenistan New Manat",
    "CurrencyCode":"TMT",
    "Symbol":""
  },
  {
    "CountryName":"Turks and Caicos Islands ",
    "Alpha2Code":"TC ",
    "Alpha3Code":"TCA ",
    "NumericCode":796,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Tuvalu ",
    "Alpha2Code":"TV ",
    "Alpha3Code":"TUV ",
    "NumericCode":798,
    "CurrencyName":"Australian Dollar",
    "CurrencyCode":"AUD",
    "Symbol":"$"
  },
  {
    "CountryName":"Uganda ",
    "Alpha2Code":"UG ",
    "Alpha3Code":"UGA ",
    "NumericCode":800,
    "CurrencyName":"Uganda Shilling",
    "CurrencyCode":"UGX",
    "Symbol":""
  },
  {
    "CountryName":"Ukraine ",
    "Alpha2Code":"UA ",
    "Alpha3Code":"UKR ",
    "NumericCode":804,
    "CurrencyName":"Hryvnia",
    "CurrencyCode":"UAH",
    "Symbol":"₴"
  },
  {
    "CountryName":"United Arab Emirates ",
    "Alpha2Code":"AE ",
    "Alpha3Code":"ARE ",
    "NumericCode":784,
    "CurrencyName":"UAE Dirham",
    "CurrencyCode":"AED",
    "Symbol":""
  },
  {
    "CountryName":"United Kingdom ",
    "Alpha2Code":"GB ",
    "Alpha3Code":"GBR ",
    "NumericCode":826,
    "CurrencyName":"Pound Sterling",
    "CurrencyCode":"GBP",
    "Symbol":"£"
  },
  {
    "CountryName":"United States ",
    "Alpha2Code":"US ",
    "Alpha3Code":"USA ",
    "NumericCode":840,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"United States Minor Outlying Islands ",
    "Alpha2Code":"UM ",
    "Alpha3Code":"UMI ",
    "NumericCode":581,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Uruguay ",
    "Alpha2Code":"UY ",
    "Alpha3Code":"URY ",
    "NumericCode":858,
    "CurrencyName":"Peso Uruguayo",
    "CurrencyCode":"UYU",
    "Symbol":"$U"
  },
  {
    "CountryName":"Uzbekistan ",
    "Alpha2Code":"UZ ",
    "Alpha3Code":"UZB ",
    "NumericCode":860,
    "CurrencyName":"Uzbekistan Sum",
    "CurrencyCode":"UZS",
    "Symbol":"лв"
  },
  {
    "CountryName":"Vanuatu ",
    "Alpha2Code":"VU ",
    "Alpha3Code":"VUT ",
    "NumericCode":548,
    "CurrencyName":"Vatu",
    "CurrencyCode":"VUV",
    "Symbol":""
  },
  {
    "CountryName":"Venezuela, Bolivarian Republic of ",
    "Alpha2Code":"VE ",
    "Alpha3Code":"VEN ",
    "NumericCode":862,
    "CurrencyName":"Bolivar",
    "CurrencyCode":"VEF",
    "Symbol":"Bs"
  },
  {
    "CountryName":"Viet Nam ",
    "Alpha2Code":"VN ",
    "Alpha3Code":"VNM ",
    "NumericCode":704,
    "CurrencyName":"Dong",
    "CurrencyCode":"VND",
    "Symbol":"₫"
  },
  {
    "CountryName":"Virgin Islands, British ",
    "Alpha2Code":"VG ",
    "Alpha3Code":"VGB ",
    "NumericCode":92,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Virgin Islands, U.S. ",
    "Alpha2Code":"VI ",
    "Alpha3Code":"VIR ",
    "NumericCode":850,
    "CurrencyName":"US Dollar",
    "CurrencyCode":"USD",
    "Symbol":"$"
  },
  {
    "CountryName":"Wallis and Futuna ",
    "Alpha2Code":"WF ",
    "Alpha3Code":"WLF ",
    "NumericCode":876,
    "CurrencyName":"CFP Franc",
    "CurrencyCode":"XPF",
    "Symbol":""
  },
  {
    "CountryName":"Western Sahara ",
    "Alpha2Code":"EH ",
    "Alpha3Code":"ESH ",
    "NumericCode":732,
    "CurrencyName":"Moroccan Dirham",
    "CurrencyCode":"MAD",
    "Symbol":""
  },
  {
    "CountryName":"Yemen ",
    "Alpha2Code":"YE ",
    "Alpha3Code":"YEM ",
    "NumericCode":887,
    "CurrencyName":"Yemeni Rial",
    "CurrencyCode":"YER",
    "Symbol":"﷼"
  },
  {
    "CountryName":"Zambia ",
    "Alpha2Code":"ZM ",
    "Alpha3Code":"ZMB ",
    "NumericCode":894,
    "CurrencyName":"Zambian Kwacha",
    "CurrencyCode":"ZMW",
    "Symbol":""
  },
  {
    "CountryName":"Zimbabwe ",
    "Alpha2Code":"ZW ",
    "Alpha3Code":"ZWE ",
    "NumericCode":716,
    "CurrencyName":"Zimbabwe Dollar",
    "CurrencyCode":"ZWL",
    "Symbol":""
  } 
  ]);
