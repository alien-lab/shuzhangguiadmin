/**
 * Created by CANONYANG on 2017/5/20.
 */
shuzhanggui.controller('userdetailsController',['$scope',function ($scope) {

   //------------->>>data
   var users = [
      {
         'id':'1',
         'name':'李大牛',
         'Openid':'741741741',
         'credit':'杠杠的'
      }
   ];
   $scope.users=users;
   console.log($scope.users);



   var library_names=[
      {
         'libraryName':'南京工业职业技术学院书店'
      },
      {
         'libraryName':'珈蓝学院藏经阁'
      },
      {
         'libraryName':'先锋书店'
      },
      {
         'libraryName':'上海书店'
      },
      {
         'libraryName':'甘肃仙林大道书店'
      },
      {
         'libraryName':'北京北海道小书店'
      },
      {
         'libraryName':'不知道哪里小噶哒的大书店'
      },
      {
         'libraryName':'光明教后勤仓库'
      },
      {
         'libraryName':'少林寺藏书阁'
      },
      {
         'libraryName':'不知道哪里小噶哒的大书店'
      },
      {
         'libraryName':'光明教后勤仓库'
      },
      {
         'libraryName':'少林寺藏书阁'
      },
      {
         'libraryName':'不知道哪里小噶哒的大书店'
      },
      {
         'libraryName':'光明教后勤仓库'
      },
      {
         'libraryName':'少林寺藏书阁'
      }
   ];

   $scope.library_names=library_names;
   console.log($scope.library_names);

   var bookhistory=[
      /*{
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      },
      {
         'beginTime':'2017-05-20',
         'endTime':'2017-06-20',
         'bookName':'追疯子的人',
         'libraryName':'在别处图文馆'
      }*/
   ];
   $scope.bookhistory=bookhistory;
   console.log($scope.bookhistory);

   //是否有内容
   $scope.showContent=true;
   $scope.showNoContent=false;
   if($scope.bookhistory.length==0){
      $scope.showContent=!$scope.showContent;
      $scope.showNoContent=!$scope.showNoContent;
   }

}]);