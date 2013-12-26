'use strict';

(function () {

   var employees = [
            {"id": 1, "firstName": "Simple wedding Garlands", "lastName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "$130.00", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "SWG001.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Rich wedding Garlands", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "$180.00", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "RWG001.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Rose petals Garlands", "lastName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "$260.00", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "RPG001.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Kunjam", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "$45.00", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "KUN001.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Hand Bouquets", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "$60.00", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "string.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Jadai", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "$130.00", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "JAD001.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Kondai malai", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "$20.00", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "B-Rose-Orange.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
        ],
		
		 /*	var categories = [
            {"id": 1, "name": "Garlands", "parentCategoryId": 0, "parentCategoryName": "", "products": 4,},
            {"id": 2, "name": "Strings", "parentCategoryId": 0, "parentCategoryName": "", "products": 8,},
            {"id": 3, "name": "Loose Flowers", "parentCategoryId": 0, "parentCategoryName": "", "products": 2,},
            {"id": 4, "name": "Pooja Packs", "parentCategoryId": 0, "parentCategoryName": "", "products": 18},
            {"id": 5, "name": "Special Products", "parentCategoryId": 0, "parentCategoryName": "", "products": 21,},
            {"id": 6, "name": "Packages", "parentCategoryId": 0, "parentCategoryName": "", "products": 50,},
           
        ],
		
		*/

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }])
			.factory('Category', [
            function () {
                return {
                    query: function () {
                        return categories;
                    },
                    get: function (categories) {
                        return findById(parseInt(categories.categoryId));
                    }
                }

            }])
            .factory('SubCategory', [
            function () {
                return {
                    query: function (category) {
                    	 return findByCategory(parseInt(employee.employeeId));
                    },
                    get: function (categories) {
                        return findById(parseInt(category.categoryId));
                    }
                }

            }]);

}());