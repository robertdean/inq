'use strict';

angular.module('app.services', [])
	.factory('MarketService',['$http',function($http){
		var services  = {
			"Commodities": "https://script.google.com/macros/s/AKfycbxw0hS-rXNsc11kf5d1AtkrAJHgXng5vitieEbUEXKHXVwUEQNC/exec",
			"MarketIndexes": "https://script.google.com/macros/s/AKfycbyJqHy-oDETPezrH4Lci4wv2_3c1iMKnuZiwXRWA2ZgnZeGfn8/exec",
			"Currencies": "https://script.google.com/macros/s/AKfycbyvsSknKZqaJm-EDvV-vCNMCc1K6ll-i-brV-XO9ZGZ_h83gLQ/exec",
			"Indicators": "https://script.google.com/macros/s/AKfycbzNSdUvjxcaBIHGnCRkoyHXNolw_u3gpxvfY4AkQlWR8gvJzIJN/exec"			
		};		
		var service = {
				async: function(serviceName) {				  
					var promise = $http.get(services[serviceName])
						.then(function (response) {							
							return response.data;
						});				  
					return promise;
				}
			};
		return service;		
	}])
    .factory('CountryInfoService',['CountryCodes',function(CountryCodes){
		var selectedCountries = [];
		var countryList = CountryCodes; 
		return { 
			countryList : countryList,
			selectedCountries: selectedCountries
		};
	}])	
    .factory('localStorage', ['$log', function ($log) {
        //todo should handle booleans and integers more intelligently?
        var loc = {
            /**
            * @param {string} key
            * @param value objects are converted to json strings, undefined is converted to null (removed)
            * @returns {localStorage}
            */
            set: function (key, value) {
                // $log.debug('localStorage.set', key, value);
                var undefined;
                if (value === undefined || value === null) {
                    // storing a null value returns "null" (a string) when get is called later
                    // so to make it actually null, just remove it, which returns null
                    loc.remove(key);
                }
                else {
                    value = angular.toJson(value);
                    if (typeof (localStorage) === 'undefined') {
                        cookie(key, value);
                    }
                    else {
                        localStorage.setItem(key, value);
                    }
                }
                return loc;
            },
            /**
            * @param {string} key
            * @returns {*} the value or null if not found
            */
            get: function (key) {
                var v = null;
                if (typeof (localStorage) === 'undefined') {
                    v = cookie(key);
                }
                else {
                    //todo should reconstitute json values upon retrieval
                    v = localStorage.getItem(key);
                }
                return angular.fromJson(v);
            },
            /**
            * @param {string} key
            * @returns {localStorage}
            */
            remove: function (key) {
                // $log.debug('localStorage.remove', key);
                if (typeof (localStorage) === 'undefined') {
                    cookie(key, null);
                }
                else {
                    localStorage.removeItem(key);
                }
                return loc;
            }
        };

        //debug just a temporary tool for debugging and testing
        angular.resetLocalStorage = function () {
            $log.info('resetting localStorage values');
            _.each(['authUser', 'authProvider', 'sortBy'], loc.remove);
        };

        return loc;
    } ]);
