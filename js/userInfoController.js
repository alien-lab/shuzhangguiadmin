/**
 * Created by CANONYANG on 2017/5/20.
 */
shuzhanggui.controller('userInfoController',['$scope',function ($scope) {

   //---------------------->>>>borrow book data
   var count = 1;
   var borrowbooks=[
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'libraryName':'迦南学院藏书阁',
         'borrowNumber':'2',
         'credit':'良好'

      }
   ];
   $scope.borrowbooks=borrowbooks;
   console.log($scope.borrowbooks);

   //是否有内容
   $scope.showContent=true;
   $scope.showNoContent=false;
   if($scope.borrowbooks.length==0){
      $scope.showContent=!$scope.showContent;
      $scope.showNoContent=!$scope.showNoContent;
   }

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



   //checkbox  全选
   $scope.checkall=false;   //默认不是全选状态
   $scope.checkAll=function (checked) {
      $scope.checkall=!$scope.checkall;
      //循环操作数据，将每条数据里面的checked值跟全选状态的值对应起来
      angular.forEach($scope.borrowbooks,function (value,key) {
         value.checked = $scope.checkall;
      })
   }
   //单选
   $scope.sigelChecked=function (checked,index) {
      $scope.borrowbooks[index].checked = checked;
   }

   //---------------------->>>>pagination

   $scope.pageSize = 10; //每个页面最多加载10条数据
   $scope.maxSize = Math.ceil($scope.borrowbooks.length / $scope.pageSize);  //分页总数
   $scope.newPages = $scope.maxSize > 5 ? 5 : $scope.maxSize; //判断页码是否超过5
   $scope.pageList = [];//存放所有页
   $scope.selPage = 1;//当前页（默认）
   //设置表格数据源(分页)
   $scope.setData = function () {
      $scope.items = $scope.borrowbooks.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
   }
   $scope.items = $scope.borrowbooks.slice(0, $scope.pageSize);
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
   //loading
   $scope.toggle_model=function () {
      angular.element('#mymodel').fadeIn(500,function () {
         angular.element('#mymodel').fadeOut();
      });
   }

}]);