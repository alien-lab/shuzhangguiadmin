/**
 * Created by CANONYANG on 2017/5/20.
 */
shuzhanggui.controller('bookentryController',['$scope',function ($scope) {



   //----------------->data
   var count = 1;
   var borrowbooks=[
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'000',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'999',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'888',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'777',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'666',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'555',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'444',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'333',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'222',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'111',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'000',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'999',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'888',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'777',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'666',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'555',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'444',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'333',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'222',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'111',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社'
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


   //通过api isbn查到的图书
   var newbooks = [
      {
         'id':'1',
         'img':'https://img3.doubanio.com/lpic/s29408611.jpg',
         'title':'七杀简史',
         'author':'[牙买加] 马龙·詹姆斯',
         'publisher':'江苏凤凰文艺出版社',
         'translator':'姚向辉',
         'pubdate':'2017-4',
         'pages':'752',
         'price':'128',
         'binding':'精装',
         'ISBN':'9787559400239'

      }
   ];
   $scope.newbooks=newbooks;
   console.log($scope.newbooks);

   //图书上架
   $scope.book_entryPanel=false;
   $scope.book_entryPanel_btn=function () {
      if($scope.libraryName!=null){
         $scope.book_entryPanel=true;
      }
   }

   //确认上架
   $scope.confirm_entryBook=function () {
      $scope.book_entryPanel=false;
   }
   //取消上架
   $scope.canel_entryBook=function () {
      $scope.book_entryPanel=false;
   }

   //checkbox  全选
   $scope.button_hide=false;
   $scope.checkall=false;   //默认不是全选状态
   $scope.checkAll=function (checked) {
      $scope.button_hide=!$scope.button_hide;
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

   $scope.pageSize = 9; //每个页面最多加载9条数据
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