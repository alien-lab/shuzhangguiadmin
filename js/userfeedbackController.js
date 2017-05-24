/**
 * Created by CANONYANG on 2017/5/21.
 */
shuzhanggui.controller('userfeedbackController',['$scope',function ($scope) {


   //-------------------->data
   var count = 1;
   var feedbackContents = [
      {
         'count':count++,
         'openid':'18851193086',
         'user':'李大牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'界面不美观',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'123546874',
         'user':'李二牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'你咋画的界面那么丑呀~',
         'resolutestate':'未解决',
         'replystate':'已回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'董大傻子',
         'phonenumber':'1885113086',
         'feedbackcontent':'太阳掉水里了',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'李大牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'界面不美观',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'123546874',
         'user':'李二牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'你咋画的界面那么丑呀~',
         'resolutestate':'未解决',
         'replystate':'已回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'董大傻子',
         'phonenumber':'1885113086',
         'feedbackcontent':'太阳掉水里了',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'李大牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'界面不美观',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'123546874',
         'user':'李二牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'你咋画的界面那么丑呀~',
         'resolutestate':'未解决',
         'replystate':'已回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'董大傻子',
         'phonenumber':'1885113086',
         'feedbackcontent':'太阳掉水里了',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'李大牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'界面不美观',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'123546874',
         'user':'李二牛',
         'phonenumber':'1885113086',
         'feedbackcontent':'你咋画的界面那么丑呀~',
         'resolutestate':'未解决',
         'replystate':'已回复',
         'time':'1995-08-29'
      },
      {
         'count':count++,
         'openid':'18851193086',
         'user':'董大傻子',
         'phonenumber':'1885113086',
         'feedbackcontent':'太阳掉水里了',
         'resolutestate':'未解决',
         'replystate':'未回复',
         'time':'1995-08-29'
      }
   ];
   $scope.feedbackContents=feedbackContents;
   console.log($scope.feedbackContents);

   //是否有内容
   $scope.showContent=true;
   $scope.showNoContent=false;
   if($scope.feedbackContents.length==0){
      $scope.showContent=!$scope.showContent;
      $scope.showNoContent=!$scope.showNoContent;
   }

   //checkbox  全选
   $scope.button_hide=false;
   $scope.checkall=false;   //默认不是全选状态
   $scope.checkAll=function (checked) {
      $scope.button_hide=!$scope.button_hide;
      $scope.checkall=!$scope.checkall;
      //循环操作数据，将每条数据里面的checked值跟全选状态的值对应起来
      angular.forEach($scope.feedbackContents,function (value,key) {
         value.checked = $scope.checkall;
      })
   }
   //单选
   $scope.sigelChecked=function (checked,index) {
      $scope.feedbackContents[index].checked = checked;
   }

   //---------------------->>>>pagination

   $scope.pageSize = 9; //每个页面最多加载10条数据
   $scope.maxSize = Math.ceil($scope.feedbackContents.length / $scope.pageSize);  //分页总数
   $scope.newPages = $scope.maxSize > 5 ? 5 : $scope.maxSize; //判断页码是否超过5
   $scope.pageList = [];//存放所有页
   $scope.selPage = 1;//当前页（默认）
   //设置表格数据源(分页)
   $scope.setData = function () {
      $scope.items = $scope.feedbackContents.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
   }
   $scope.items = $scope.feedbackContents.slice(0, $scope.pageSize);
   //分页要repeat的数组
   for (var i = 0; i < $scope.newPages; i++) {
      $scope.pageList.push(i + 1);
   }
   console.log($scope.items);
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
}]);