const app = angular.module('real', []);

  app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.message = "hi, I am from the controller"
  this.houses = [];
  this.URL = 'https://mypropertymanager.herokuapp.com/houses'
  $http({
        method: 'GET',
        url: this.URL,
      }).then(response => {
        console.log(response.data.houses);
        this.houses = response.data.houses
    })
      .catch(err => console.log(err));
      this.processForm = () => {
        console.log('testing')
        console.log(this.formdata)
        $http({
          method: 'POST',
          url: this.URL,
          data: this.formdata
        }).then(response => {
          console.log(response);
          this.houses.unshift(response.data)
        })
        .catch(err => console.log(err))
        //end form function
      },

        this.deleteHouse = function(house){
        $http({
          method: 'DELETE',
          url: this.URL + house.id //house._id in mean app
        }).then(
          function(res){
            // this.processForm();
          },
          function(err){
            console.log(err);
          }
        );
      }


//end
    }]);
