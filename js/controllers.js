'use strict';
/* Controllers */
angular.module('app.controllers', [])
	.controller('CommoditiesCtrl',['$scope', '$q', '$filter', 'MarketService', 'CountryInfoService', 
		function($scope, $q, $filter, MarketService,CountryInfoService){
			$scope.countryInfoService = CountryInfoService;
			$scope.sortingOrder  = 'name';
			$scope.pagedItems = [];
			$scope.currentPage = 0;
			$scope.filteredItems = [];
			$scope.itemsPerPage = 10;
			$scope.reverse = false;			
			$scope.items = $scope.commodities;			
			$scope.filteredItems=$scope.items;	
			
			if ($scope.sortingOrder !== '') {
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
			}				
						
			var searchMatch = function (haystack, needle) {				
				if (!needle) {
					return true;
				}
				haystack = haystack+"";
				return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
			};

			$scope.search = function(){
				$scope.filteredItems = $filter('filter')($scope.items, function (item) {
					for (var attr in item) {						
						if (searchMatch(item[attr], $scope.query)) return true;
					}
					return false;
				});
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}
				
				$scope.currentPage = 0;
				
				$scope.groupToPages();
			};
			
			$scope.sort_by = function (newSortingOrder) {
				
				if ($scope.sortingOrder == newSortingOrder) {
					$scope.reverse = !$scope.reverse;				
				}
				
				$scope.sortingOrder = newSortingOrder;
				
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				
				$scope.groupToPages();
			};
			
			$scope.groupToPages = function () {
				$scope.pagedItems = [];				
				for (var i = 0; i < $scope.filteredItems.length; i++) {
					if (i % $scope.itemsPerPage === 0) {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
					} else {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
					}
				}
			};
			
			$scope.range = function (start, end) {
				var ret = [];
				if (!end) {
					end = start;
					start = 0;
				}
				for (var i = start; i < end; i++) {
					ret.push(i);
				}
				return ret;
			};
				
			$scope.prevPage = function () {
				if ($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			};

			$scope.nextPage = function () {
				if ($scope.currentPage < $scope.pagedItems.length - 1) {
					$scope.currentPage++;
				}
			};

			$scope.setPage = function () {
				$scope.currentPage = this.n;
			};
			
	}])	
	.controller('IndexCtrl',['$scope', '$q', '$filter', 'MarketService', 'CountryInfoService', 
		function($scope, $q, $filter, MarketService,CountryInfoService){
			$scope.countryInfoService = CountryInfoService;
			$scope.sortingOrder  = 'name';
			$scope.pagedItems = [];
			$scope.currentPage = 0;
			$scope.filteredItems = [];
			$scope.itemsPerPage = 10;
			$scope.reverse = false;
			$scope.items = [];
			MarketService.async('MarketIndexes').then(function(data){ 				
				
				angular.forEach(data,function(item){							
				
					var chg = (item["% Change"] || "0").replace("%","").replace("+","") * 1;
					var boxPlotArray =[];						
					if( 
						item["Day Range"]
						&& item["Day Range"].split(' - ').length > 1 
						&& item["52 Week Range"] 
						&& item["52 Week Range"].split(' - ').length > 1  							
						) {					
						boxPlotArray = [
							Number(item["52 Week Range"].split(' - ')[0].replace(/[^0-9\.]+/g,"")),
							Number(item["Day Range"].split(' - ')[0].replace(/[^0-9\.]+/g,"")),
							Number(item["Value"].replace(',','').replace(/[^0-9\.]+/g,"")),
							Number(item["Day Range"].split(' - ')[1].replace(/[^0-9\.]+/g,"")),
							Number(item["52 Week Range"].split(' - ')[1].replace(/[^0-9\.]+/g,""))
							];							
					}
					
					$scope.items.push({
						name: item["Index Name"].replace("Index","").replace("Stock Exchange","").split("(")[0],
						absChange: Math.abs(chg),
						date: item["Date/Time"],
						change: item["% Change"] ,
						dayRange: item["Day Range"],
						oneYearChange: item["One Year"],
						absOneYearChange: Math.abs((item["One Year"] || "0").replace("%","").replace("+","") * 1),
						fiftyTwoWeekRange:item["52 Week Range"],
						yearToDateChange: item["Year To Date"],
						boxPlotData: boxPlotArray,
						value: item["Value"],
						timeStamp: item["DateGathered"]
					})				
				});
				
				$scope.filteredItems=$scope.items;		
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}				
				
				$scope.groupToPages();
				
			});
			
			var searchMatch = function (haystack, needle) {				
				if (!needle) {
					return true;
				}
				haystack = haystack+"";
				return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
			};

			$scope.search = function(){
				$scope.filteredItems = $filter('filter')($scope.items, function (item) {
					for (var attr in item) {						
						if (searchMatch(item[attr], $scope.query)) return true;
					}
					return false;
				});
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}
				
				$scope.currentPage = 0;
				
				$scope.groupToPages();
			};
			
			$scope.sort_by = function (newSortingOrder) {
				
				if ($scope.sortingOrder == newSortingOrder) {
					$scope.reverse = !$scope.reverse;				
				}
				
				$scope.sortingOrder = newSortingOrder;
				
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				
				$scope.groupToPages();
			};
			
			$scope.groupToPages = function () {
				$scope.pagedItems = [];				
				for (var i = 0; i < $scope.filteredItems.length; i++) {
					if (i % $scope.itemsPerPage === 0) {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
					} else {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
					}
				}
			};
			
			$scope.range = function (start, end) {
				var ret = [];
				if (!end) {
					end = start;
					start = 0;
				}
				for (var i = start; i < end; i++) {
					ret.push(i);
				}
				return ret;
			};
				
			$scope.prevPage = function () {
				if ($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			};

			$scope.nextPage = function () {
				if ($scope.currentPage < $scope.pagedItems.length - 1) {
					$scope.currentPage++;
				}
			};

			$scope.setPage = function () {
				$scope.currentPage = this.n;
			};
			
	}])
	.controller('IndicatorsCtrl', ['$scope', '$q', '$filter', 'MarketService', 'CountryInfoService', 
		function($scope, $q, $filter, MarketService,CountryInfoService){
			$scope.countryInfoService = CountryInfoService;
			$scope.sortingOrder  = 'name';
			$scope.pagedItems = [];
			$scope.currentPage = 0;
			$scope.filteredItems = [];
			$scope.itemsPerPage = 10;
			$scope.reverse = false;
			$scope.items = [];
			MarketService.async('Indicators').then(function(data){ 				
				
				angular.forEach(data,function(item){							
					var mc = undefined;
					var mcr = undefined;						

					if( item['ActNum'] && item['ConsNum'] ){
						mc = item['ConsNum'] != item['ActNum'];
					}
					if( item['ActNum'] && item['ConsRangeMin'] ){
						mcr = item['ConsRangeMin']  > item['ActNum'] && item['ConsRangeMax']  < item['ActNum'] ;
					}
						
					var releasedDate =moment( item["Dated"].replace('Released On','').split('For')[0],"M/D/YYYY h:mm:ss a" )
					var releasedFor = item["Dated"].replace('Released On','').split('For')[1];						
						
					$scope.items.push({
							name: item['Indicator'],							
							country: item['Country'],
							measure: item['Measure'],
							dated: item['Dated'],
							actual: item['Actual'],
							prior: item['Prior'],
							priorRev: item['Prior Revised'],
							consensus: item['Consensus'],
							consensusRange: item['Consensus Range'],
							actualNum: item['ActNum'],
							consensusNum: item['ConsNum'],
							consensusRangeMin: item['ConsRangeMin'],
							consensusRangeMax: item['ConsRangeMax'],
							priorNum: item['PriNum'],
							priorRevisedNum: item['PriRevNum'],
							timeStamp: item['DateParsed'],
							missedConsensusRange: mcr,
							missedConsensus: mc,
							releasedOnDate: releasedDate,
							releasedForPeriod: releasedFor							
						});				
				});
				
				$scope.filteredItems=$scope.items;		
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}				
				
				$scope.groupToPages();
				
			});
			
			var searchMatch = function (haystack, needle) {				
				if (!needle) {
					return true;
				}
				haystack = haystack+"";
				return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
			};

			$scope.search = function(){
				$scope.filteredItems = $filter('filter')($scope.items, function (item) {
					for (var attr in item) {						
						if (searchMatch(item[attr], $scope.query)) return true;
					}
					return false;
				});
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}
				
				$scope.currentPage = 0;
				
				$scope.groupToPages();
			};
			
			$scope.sort_by = function (newSortingOrder) {
				
				if ($scope.sortingOrder == newSortingOrder) {
					$scope.reverse = !$scope.reverse;				
				}
				
				$scope.sortingOrder = newSortingOrder;
				
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				
				$scope.groupToPages();
			};
			
			$scope.groupToPages = function () {
				$scope.pagedItems = [];				
				for (var i = 0; i < $scope.filteredItems.length; i++) {
					if (i % $scope.itemsPerPage === 0) {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
					} else {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
					}
				}
			};
			
			$scope.range = function (start, end) {
				var ret = [];
				if (!end) {
					end = start;
					start = 0;
				}
				for (var i = start; i < end; i++) {
					ret.push(i);
				}
				return ret;
			};
				
			$scope.prevPage = function () {
				if ($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			};

			$scope.nextPage = function () {
				if ($scope.currentPage < $scope.pagedItems.length - 1) {
					$scope.currentPage++;
				}
			};

			$scope.setPage = function () {
				$scope.currentPage = this.n;
			};
			
			$scope.$watch('countryInfoService.selectedCountries',function(){
				var result = true;
				
				if($scope.countryInfoService.selectedCountries.length > 0){
					$scope.filteredItems = $filter('filter')($scope.filteredItems, function(item){
						var itemCountry = item.country.toLowerCase();				
						for(var i=0;i < $scope.countryInfoService.selectedCountries.length; i++){
							if($scope.countryInfoService.selectedCountries[i].CountryName.toLowerCase().trim()===itemCountry.trim()) {
								return  true;
							}
						}						
						return false;
					});
				} else { 
					$scope.filteredItems=$scope.items;	
				}				
				$scope.groupToPages();				
			});
			
			
	}])
	.controller('CurrenciesCtrl', ['$scope', '$q', '$filter', 'MarketService',  'CountryInfoService',
		function($scope, $q, $filter, MarketService, CountryInfoService){
			$scope.countryInfoService = CountryInfoService;
			$scope.sortingOrder  = 'name';
			$scope.pagedItems = [];
			$scope.currentPage = 0;
			$scope.filteredItems = [];
			$scope.itemsPerPage = 10;
			$scope.reverse = false;
			$scope.items = [];
			MarketService.async('Currencies').then(function(data){ 
				
				angular.forEach(data,function(item){							
					var chg =  (item["% Change"] || "0").replace("%","").replace("+","") * 1;
					var currencies = item['Name'].match(/\(\w+\)/g);
					var name = item['Name'].replace('Exchange Rate','');
					var currency = name.indexOf('to US DOLLAR (USD)') > 0 ? "USD": "";
					name = name.replace('to US DOLLAR (USD)','USD').replace('US DOLLAR (USD) to','');	
							
					var boxPlotArray =[];
					boxPlotArray = [
						Number(item["52-WK Low"].replace(/[^0-9\.]+/g,"")),
						Number(item["Value"].replace(/[^0-9\.]+/g,"")),
						Number(item["52-WK High"].replace(/[^0-9\.]+/g,""))
					];						

					$scope.items.push({
						name: name,
						change:chg,
						currency: currencies,
						currentValue: item.Value,
						boxPlotData: boxPlotArray,
						absChange:Math.abs(chg),
						timeStamp:item['DateGathered']
					});
				});					
				
				$scope.filteredItems=$scope.items;		
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}				
				
				$scope.groupToPages();
				
				
			});
			
			$scope.$watch('countryInfoService.selectedCountries',function(){
				var result = true;
				$scope.filteredItems = $scope.items;
				if($scope.countryInfoService.selectedCountries.length > 0){
					$scope.filteredItems = $filter('filter')($scope.filteredItems, function(item){
						var itemCurrencyCode = item.currency[1].replace(/\(|\)/g,'').toLowerCase();						
						for(var i=0;i < $scope.countryInfoService.selectedCountries.length; i++){
							var currencyToCompare  = $scope.countryInfoService.selectedCountries[i].CurrencyCode.toLowerCase().trim();
							var firstItemCurrency = item.currency[0].replace(/\(|\)/g,'').toLowerCase().trim();						
							var secondItemCurrency = item.currency[1].replace(/\(|\)/g,'').toLowerCase().trim();						
							if(currencyToCompare === firstItemCurrency || currencyToCompare === secondItemCurrency ) {								
								return  true;											
							}
						}
						return false;
					});
				} else { 
					$scope.filteredItems=$scope.items;	
				}				
				$scope.groupToPages();				
			});
			
			var searchMatch = function (haystack, needle) {				
				if (!needle) {
					return true;
				}
				haystack = haystack+"";
				return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
			};
			
			$scope.search = function(){
				$scope.filteredItems = $filter('filter')($scope.items, function (item) {
					for (var attr in item) {						
						if (searchMatch(item[attr], $scope.query)) return true;
					}
					return false;
				});
				
				if ($scope.sortingOrder !== '') {
					$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				}
				
				$scope.currentPage = 0;
				
				$scope.groupToPages();
			};
			
			$scope.sort_by = function (newSortingOrder) {
				
				if ($scope.sortingOrder == newSortingOrder) {
					$scope.reverse = !$scope.reverse;				
				}
				
				$scope.sortingOrder = newSortingOrder;
				
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
				
				$scope.groupToPages();
			};
			
			$scope.groupToPages = function () {
				$scope.pagedItems = [];				
				for (var i = 0; i < $scope.filteredItems.length; i++) {
					if (i % $scope.itemsPerPage === 0) {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
					} else {
						$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
					}
				}
			};
			
			$scope.range = function (start, end) {
				var ret = [];
				if (!end) {
					end = start;
					start = 0;
				}
				for (var i = start; i < end; i++) {
					ret.push(i);
				}
				return ret;
			};
				
			$scope.prevPage = function () {
				if ($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			};

			$scope.nextPage = function () {
				if ($scope.currentPage < $scope.pagedItems.length - 1) {
					$scope.currentPage++;
				}
			};

			$scope.setPage = function () {
				$scope.currentPage = this.n;
			};
			
	}])
	.controller('MarketsCtrl', [
		'$scope', '$q', '$filter',  'MarketService','CountryInfoService',
		function ($scope, $q, $filter,  MarketService, CountryInfoService) {        							 			 		 						
		
			$scope.change=function(a,b){
				a = a.replace(',','');
				b = b.replace(',','');
				return (b-a) / a;				
			};
			
			$scope.countryInfoService = CountryInfoService;
			
			
				
				MarketService.async('Commodities').then(function(data){ 
					var metalsData = [];
					angular.forEach(data[3].items,function(item){
						var chg = ($scope.change(item.PrevClose,item.Price)*100).toFixed(2);						
						metalsData.push({
							name: item.Name.split('-')[0],
							current: item['Price'].replace(',',''),
							currencySymbol: $scope.currencySymbol[ item.Name.split('-')[1].replace(' Exchange Rate','') ],							
							change: chg + ' %',
							absChange: Math.abs(chg)
						});
					});
					
					$scope.metals = metalsData;
					
					var commoditiesData = []
					angular.forEach(data[0].items,function(item){				
						var chg = item['Change %'].replace("%","").replace("+","") * 1;
						commoditiesData.push({
							name:item.Name,
							price:item.Price,
							date: item.Date,
							unit: item.Unit,
							change:chg,
							timeStamp: item.DateGathered,
							absChange: Math.abs(chg)
						});
					});
					
					$scope.commodities = commoditiesData;
					
					$scope.consumerRates = data[1].items;
					$scope.fedRates = data[2].items;
					$scope.muniRates = data[4].items;
					$scope.treasuryYields = data[8].items;
					$scope.usBondIndexes = data[7].items;
					
					var gasolinePriceData  = [];
					angular.forEach(data[6].items,function(item){
						gasolinePriceData.push({
							region:item['Name'].split('(')[0],
							current:item['Current'],
							lastWeek:item['Change From Last Week'],
							lastYear:item['Change From Last Year'],
							timeStamp: item['DateGathered']
						});
					});
					
					$scope.gasolinePrices = gasolinePriceData;
						
				}),		
			
			$scope.currencySymbol = {			
						"USD": "$",
						"USd": "$",
						"US DOLLAR": "$",
						"CAD": "CA $",
						"JPY": "¥",
						"JAPANESE YEN": "¥",
						"GBP": "£",
						"BRITISH POUND": "£",
						"EUR": "€",
						"EURO": "€",
						"INR":"₨",
						"INDIAN RUPEE":"Rs"
					};
					
		}]);