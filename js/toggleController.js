/**
 * Created by CANONYANG on 2017/5/16.
 */
shuzhanggui.controller('toggleController',['$scope',function ($scope) {

   //$rootScope.value = "";
   /* animate */

   /*菜单栏*/
   $scope.togglepanel=true;
   $scope.glyphicon_list=true;
   $scope.glyphicon_left=false;
   $scope.toggle_hide=function () {
      $scope.glyphicon_left=!$scope.glyphicon_left;
      $scope.glyphicon_list=!$scope.glyphicon_list;
      $scope.togglepanel=!$scope.togglepanel;

   }
   $scope.toggle_show=function () {
      $scope.togglepanel=true;
      $scope.glyphicon_list=true;
      $scope.glyphicon_left=false;
   }
   /*user_li*/
   $scope.user_plus=true;
   $scope.user_minus=false;
   $scope.toggle_user_li=function () {
      $scope.user_plus=!$scope.user_plus;
      $scope.user_minus=!$scope.user_minus;
      $scope.user_li_panel=!$scope.user_li_panel;
   }
   /*book_li*/
   $scope.book_minus=false;
   $scope.book_plus=true;
   $scope.toggle_book_li=function () {
      $scope.book_minus=!$scope.book_minus;
      $scope.book_plus=!$scope.book_plus;
      $scope.book_li_panel=!$scope.book_li_panel;
   }
   /*search*/
   $scope.search_panel=false;
   $scope.toggle_search=function () {
      $scope.search_panel=!$scope.search_panel;
   }
   $scope.searchPanelBack=function () {
      $scope.search_panel=false;
   }

   //注销
   $scope.exit_library=function () {
      swal({
         title: "您确定要注销吗？",
         type: "warning",
         showCancelButton: true,
         closeOnConfirm: false,
         confirmButtonText: "是的，我要注销",
         confirmButtonColor: "#ec6c62"
      }, function() {
         swal({
            title: "操作成功!", 
            type: "success",
            timer:'1500'
         },function () {
            $('#myModal').modal('show');
            setTimeout("window.location.href='login.html'",1600);
         });
      });
   }


   //$('#myModal').modal('show')


}])
