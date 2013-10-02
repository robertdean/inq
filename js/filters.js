'use strict';

/* Filters */
angular.module('app.filters', [])
    .filter('percent',[function(){
		return function(text) {
			var result = text.toFixed(2);			
			if(text > 0) result= "+"+result;
			return result+" %";
		}
	}])
	.filter('fromNow', function() {
		return function(dateString) {		
			
			return moment(dateString,"M/D/YYYY h:mm:ss a").fromNow();
		};
	})	
	.filter('moment', function() {
		return function(dateString) {
			return moment(dateString);
		};
	})
	.filter('toNumber',function(){
		
		function extractNumber(strNum) {  
		  if (strNum == undefined) return null;  		  
			strNum = strNum +"";
			strNum = strNum.replace(/\s\s*/, '').replace(/[^0-9\.\-]+/,'');
			strNum = strNum.replace(/[^0-9\.\-]+/,'');
		  
		  if(isNumber(strNum)) return strNum.replace(/(^\s+|\s+$)/g, '');   
		  
		  return null;
		}		
		
		function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
		
		return function(text){
			return extractNumber(text);
		};
	})
	.filter('titleize', [function() {
        return function(text) {
            return _.str.titleize(text);
        };
    }])
	.filter('change', [function() {
        
		return function(text) {
			if(!text) return "-";
			
            if(text){
				return '<span></span>';
			}
			return '<span ></span>';
			
        };
		
		
    }]).filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});
	
	
	