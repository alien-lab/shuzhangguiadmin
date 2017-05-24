/**
 * Created by CANONYANG on 2017/5/17.
 */
shuzhanggui.controller('homeController',['$scope',function ($scope) {
   /* animate */

   /*libraryInfo_down*/
   $scope.libraryInfo=false;
   $scope.up=false;
   $scope.down=true;
   $scope.main_title="全部";
   $scope.libraryInfo_down=function () {
      $scope.up=!$scope.up;
      $scope.down=!$scope.down;
      $scope.libraryInfo=!$scope.libraryInfo;
      $scope.main_title="新增";
      //默认每次下拉会清空
      $scope.xxx="";
      $scope.libraryName="";
      $scope.libraryDesc="";
      $scope.libraryNumber="";
   }
   $scope.libraryInfo_up=function () {
      $scope.up=false;
      $scope.down=true;
      $scope.libraryInfo=false;
      $scope.main_title="全部";
   }

   /*location*/
   /*$scope.p = '江苏省';
   $scope.c = '南京市';
   $scope.a = '栖霞区';
   $scope.d = '南京工业职业技术学院';*/

   /*添加图书信息*/
   //取消
   $scope.libraryInfo_cancle=function () {
      $scope.libraryInfo=false;
      $scope.up=false;
      $scope.down=true;
      $scope.main_title="全部";
   }
   //重置
   $scope.libraryInfo_reset=function () {
      $('.xxx').val('');
      $('.libraryName').val('');
      $('.libraryDesc').val('');
      $('.libraryNumber').val('');
   }
   //提交
   $scope.libraryInfo_submit=function () {
      if( $scope.xxx=="" || $scope.libraryName=="" || $scope.libraryDesc=="" || $scope.libraryNumber=="" ){
         swal("抱歉", "请将信息填写完整！", "warning");
      }/*else {
         swal("Good!", "提交成功", "success");
      }*/
   }

   var count = 1;
   var libraryInfoes=[
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'苏州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京苏州书店苏州书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'杭州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'关东书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'苏州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京苏州书店苏州书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'杭州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'关东书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'苏州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京苏州书店苏州书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'杭州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'关东书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'苏州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京苏州书店苏州书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'杭州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'关东书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'苏州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京苏州书店苏州书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'杭州书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'关东书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'先锋书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京先锋书店先锋书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'南京书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京南京书店南京书店',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'上海书店',
         'libraryDesc':'先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      },
      {
         'id':count++,
         'libraryName':'甘肃书店',
         'libraryDesc':'先锋书店是南京的著名文化名片.',
         'libraryLocation':'南京',
         'libraryNumber':'8000'
      }

   ];
   $scope.libraryInfoes=libraryInfoes;
   console.log($scope.libraryInfoes);

   //是否有内容
   $scope.showContent=true;
   $scope.showNoContent=false;
   if($scope.libraryInfoes.length==0){
      $scope.showContent=!$scope.showContent;
      $scope.showNoContent=!$scope.showNoContent;
   }

   //删除 图书馆信息
   $scope.delete_library=function (id,index) {
      swal({
         title: "您确定要删除吗？",
         text: "您确定要删除这条数据？",
         type: "warning",
         showCancelButton: true,
         closeOnConfirm: false,
         confirmButtonText: "是的，我要删除",
         confirmButtonColor: "#ec6c62"
      }, function () {
         alert(id);
         swal({
            title: "操作成功!",
            type: "success"
         });
         //$scope.libraryInfoes.splice(index, 1);
      });

   }


   //修改 图书馆信息
   $scope.modify_library=function (id,index) {
      $scope.up=!$scope.up;
      $scope.down=!$scope.down;
      $scope.libraryInfo=!$scope.libraryInfo;
      $scope.main_title="新增";

      //alert(id);
      $scope.libraryName=id+"号先锋书店";
      $scope.libraryDesc="先锋书店是南京的著名文化名片，也是江苏最大的人文社科专业书店，是南京人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是南京人民的精神品格和思想品质。南京先锋书店被南京市民评为十二张文化名片之一，被誉为“中国最美的书店”，荣获“中国2009年度最美的书店奖”，附近南京大学的学生亲切地称她为“南大第二图书馆”。";


   }
   
   //---------------------->>>>pagination

   $scope.pageSize = 5; //每个页面最多加载10条数据
   $scope.maxSize = Math.ceil($scope.libraryInfoes.length / $scope.pageSize);  //分页总数
   $scope.newPages = $scope.maxSize > 5 ? 5 : $scope.maxSize; //判断页码是否超过5
   $scope.pageList = [];//存放所有页
   $scope.selPage = 1;//当前页（默认）
   //设置表格数据源(分页)
   $scope.setData = function () {
      $scope.items = $scope.libraryInfoes.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
   }
   $scope.items = $scope.libraryInfoes.slice(0, $scope.pageSize);
   //分页要repeat的数组
   for (var i = 0; i < $scope.newPages; i++) {
      $scope.pageList.push(i + 1);
   }
   //打印当前选中页索引
   $scope.selectPage = function (page) {
      //不能小于1大于最大
      if (page < 1 || page > $scope.maxSize) return;
      //最多显示分页数5
      if (page > 2) {
         //因为只显示5个页数，大于2页开始分页转换
         var newpageList = [];
         for (var i = (page - 3) ; i < ((page + 2) > $scope.maxSize ? $scope.maxSize : (page + 2)) ; i++) {
            newpageList.push(i + 1);
         }
         $scope.pageList = newpageList;
      }
      $scope.selPage = page;
      $scope.setData();
      $scope.isActivePage(page);
      console.log("选择的页：" + page);
   };
   //设置当前选中页样式
   $scope.isActivePage = function (page) {
      return $scope.selPage == page;
   };
   //上一页
   $scope.Previous = function () {
      $scope.selectPage($scope.selPage - 1);
   }
   //下一页
   $scope.Next = function () {
      $scope.selectPage($scope.selPage + 1);
   };
}])

