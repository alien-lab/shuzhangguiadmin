/**
 * Created by CANONYANG on 2017/5/15.
 */
(function(){
   'use strict'
   var shuzhangguiLogin = angular.module('shuzhangguiLogin',[])
      //登录注册切换
      .controller('loginController',['$scope','$location',function ($scope,$location) {
         $scope.login_panel=false;
         $scope.register_panel=true;
         $scope.isLogin=true;
         $scope.isRegister=false;
         $scope.loginBtn=function () {
            $scope.login_panel=false;
            $scope.register_panel=true;
            $scope.isLogin=true;
            $scope.isRegister=false;

         }
         $scope.registerBtn=function () {
            $scope.login_panel=true;
            $scope.register_panel=false;
            $scope.isLogin=false;
            $scope.isRegister=true;

         }

         //登录注册
         $scope.sign_in_button=function () {
            if($scope.phoneNumber == "18851193086" && $scope.password == "123456"){
               swal({
                  title: "登录成功！",
                  type: "success",
                  timer: 1500,
                  showConfirmButton: false
               });
                $scope.phoneNumber="";
                $scope.password="";
               setTimeout("window.location.href='shuzhanggui.html'",1500);
            }else {
               swal({
                  title: "登录失败！",
                  type: "error",
                  timer: 1500,
                  showConfirmButton: false
               });
            }
         }
         $scope.sign_up_button=function () {
            if($scope.nickname != null && $scope.phoneNumber != null && $scope.password != null){
               swal({
                  title: "注册成功！",
                  type: "success",
                  timer: 1500,
                  showConfirmButton: false
               },2000);
               //window.location.href = "http://localhost:63342/shuzhanggui/AngularJS%E5%AE%9E%E6%88%98%E7%AC%AC%E4%BA%8C%E7%AB%A0%E7%AC%AC%E5%9B%9B%E8%8A%82%E8%B7%AF%E7%94%B1%E6%BA%90%E4%BB%A3%E7%A0%81/app/shuzhanggui.html?_ijt=41ob9mjf3t0l0i3f0qnd1oebss#/index";
               //window.open("http://localhost:63342/shuzhanggui/AngularJS%E5%AE%9E%E6%88%98%E7%AC%AC%E4%BA%8C%E7%AB%A0%E7%AC%AC%E5%9B%9B%E8%8A%82%E8%B7%AF%E7%94%B1%E6%BA%90%E4%BB%A3%E7%A0%81/app/shuzhanggui.html?_ijt=41ob9mjf3t0l0i3f0qnd1oebss#/index", '_self');
            }else {
               swal({
                  title: "注册失败！",
                  type: "error",
                  timer: 1500,
                  showConfirmButton: false
               });
            }
         }
      }])

})()