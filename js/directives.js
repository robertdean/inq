'use strict';

angular.module('app.directives', [])
	.directive("welcome",[ '$rootScope',function($rootScope){
		return {
					restrict: "E",					
					controller: function($rootScope){
						$scope.auth = $rootScope.auth;
					}
				};
	}	
	])
	.directive('chosen', [ '$timeout', function($timeout) {
      var CHOSEN_OPTION_WHITELIST, NG_OPTIONS_REGEXP, chosen, isEmpty, snakeCase;
      NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/;
      CHOSEN_OPTION_WHITELIST = ['noResultsText', 'allowSingleDeselect', 'disableSearchThreshold', 'disableSearch', 'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'displayDisabledOptions', 'displaySelectedOptions'];
      snakeCase = function(input) {
        return input.replace(/[A-Z]/g, function($1) {
          return "_" + ($1.toLowerCase());
        });
      };
      isEmpty = function(value) {
        var key, _i, _len;
        if (angular.isArray(value)) {
          return value.length === 0;
        } else if (angular.isObject(value)) {
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            key = value[_i];
            if (value.hasOwnProperty(key)) {
              return false;
            }
          }
        }
        return true;
      };
      return chosen = {
        restrict: 'A',
        link: function(scope, element, attr) {
          var disableWithMessage, match, options, startLoading, stopLoading, valuesExpr;
          options = scope.$eval(attr.chosen) || {};
          angular.forEach(attr, function(value, key) {
			
            if (Array.indexOf(CHOSEN_OPTION_WHITELIST, key) >= 0) {
              return options[snakeCase(key)] = scope.$eval(value);
            }
          });
          startLoading = function() {
            return element.addClass('loading').attr('disabled', true).trigger('chosen:updated');
          };
          stopLoading = function() {
            return element.removeClass('loading').attr('disabled', false).trigger('chosen:updated');
          };
          disableWithMessage = function(message) {
            return element.empty().append("<option selected>" + message + "</option>").attr('disabled', true).trigger('chosen:updated');
          };
          $timeout(function() {
            return element.chosen(options);
          });
          if (attr.ngOptions) {
            match = attr.ngOptions.match(NG_OPTIONS_REGEXP);
            valuesExpr = match[7];
            if (angular.isUndefined(scope.$eval(valuesExpr))) {
              startLoading();
            }
            return scope.$watch(valuesExpr, function(newVal, oldVal) {
              if (newVal !== oldVal) {
                stopLoading();
                if (isEmpty(newVal)) {
                  return disableWithMessage(options.no_results_text || 'No values available');
                }
              }
            });
          }
        }
      };
    }
  ])
	.directive('direction',[function(){
		
		function extractNumber(strNum) {  
		  if (strNum == undefined) return '';  		  
		  strNum = strNum +"";
		  strNum = strNum.replace(/\s\s*/, '').replace(/[^0-9\.\-]+/,'');
		  strNum = strNum.replace(/[^0-9\.\-]+/,'');
		  
		  if(isNumber(strNum)) return strNum.replace(/(^\s+|\s+$)/g, '');   
		  
		  return "";
		}

		function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}

		return {				
			restrict: "E",
			scope: {
				value: "=",				
			},
			template:'<span><span class="pull-left"></span><span class="pull-right">{{ value }} </span></span>',
			link: function(scope, element, attrs){
				if(extractNumber(scope.value) > 0){
						element.addClass("alert-success");
						element.find("span.pull-left").text("▲");
					}
				
				if(extractNumber(scope.value) < 0){
					element.addClass("alert-danger");
					element.find("span.pull-left").text("▼");
					}
			}
		};
	}])
	.directive('changed',[ function(){		
		//▲ ▼ ▴ ▾		
		return {
			restrict: "E",
			scope: {
				value: "="				
			},
			template:'<span class="pull-right" >{{ value }}</span>'
		};	
	}])
	.directive("sparkline", function() {
			return {
				restrict: "E",
				template: '<span></span>',
				scope: {
					data: "@",
					type: "="
				},
				compile: function(tElement, tAttrs, transclude) {
					var options = {
						type: 'box',
						disableHiddenCheck: true, 
						height: '20px', 
						width: '100px'
					};
					//tElement.replaceWith("<span>"+tAttrs.data+"</span>");
					return function(scope, element, attrs) {
						element.html(scope.data.replace('[','').replace(']','') );
						element.sparkline('html', options);															
					};
				}
			};
	})
    .directive('autoScroll', function ($timeout) {
        return function (scope, elements, attrs) {
            scope.$watch("messages.length", function () {
                $timeout(function () {
                    elements[0].scrollTop = elements[0].scrollHeight;
                });
            });
        };
    });
	
	