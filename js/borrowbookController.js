/**
 * Created by CANONYANG on 2017/5/18.
 */
shuzhanggui.controller('borrowbookController', ['$scope','$log',function ($scope,$log) {


   //---------------------->>>>now time
   function nowtime() {
      var mydate = new Date();
      var xingqi = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
      $scope.nowTime=mydate.getFullYear()+"年"+(mydate.getMonth()+1)+"月"+mydate.getDate()+"日"+xingqi[mydate.getDay()];
      console.log($scope.nowTime);
   }
   nowtime();

   //---------------------->>>>borrow book data
   var count = 1;
   var borrowbooks=[
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社',
         'premoney':'888',
         'beginTime':'2017-05-18',
         'borrowStatus':'已还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'000',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'999',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'888',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'777',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'666',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'555',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社',
         'premoney':'888',
         'beginTime':'2017-05-18',
         'borrowStatus':'已还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'444',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'333',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'222',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'111',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社',
         'premoney':'888',
         'beginTime':'2017-05-18',
         'borrowStatus':'已还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'000',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'999',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'888',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'777',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'666',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'555',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社',
         'premoney':'888',
         'beginTime':'2017-05-18',
         'borrowStatus':'已还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'444',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'333',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'222',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'111',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'张三',
         'borrowBookName':'追疯子的人',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'李四',
         'borrowBookName':'哈，追疯子',
         'ISBN':'7854796317468',
         'publisher':'上海大众出版社',
         'premoney':'999',
         'beginTime':'2017-05-18',
         'borrowStatus':'还了'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'王麻子',
         'borrowBookName':'疯子，有人追你！',
         'ISBN':'7854796317468',
         'publisher':'南京新街口出版社',
         'premoney':'1111',
         'beginTime':'2017-05-18',
         'borrowStatus':'你猜'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'狗子',
         'borrowBookName':'王麻子说有人追疯子',
         'ISBN':'7854796317468',
         'publisher':'幼儿出版社',
         'premoney':'5',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'啥，谁追我！',
         'ISBN':'7854796317468',
         'publisher':'疯子出版社',
         'premoney':'7878',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子二大爷',
         'borrowBookName':'疯子快点跑！',
         'ISBN':'7854796317468',
         'publisher':'二大爷出版社',
         'premoney':'888',
         'beginTime':'2017-05-18',
         'borrowStatus':'已还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他爹',
         'borrowBookName':'咱家疯子终于有人追了',
         'ISBN':'7854796317468',
         'publisher':'他爹出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他妈',
         'borrowBookName':'孩儿他爹，疯子咋啦？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子他媳妇',
         'borrowBookName':'谁追我家疯子？',
         'ISBN':'7854796317468',
         'publisher':'青岛出版社',
         'premoney':'135',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
      },
      {
         'count':count++,
         'Openid':18851193086,
         'borrowUserName':'疯子',
         'borrowBookName':'疯子之终结篇',
         'ISBN':'7854796317468',
         'publisher':'终结者出版社',
         'premoney':'555555',
         'beginTime':'2017-05-18',
         'borrowStatus':'未还'
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
         'library_name':'南京工业职业技术学院书店'
      },
      {
         'library_name':'珈蓝学院藏经阁'
      },
      {
         'library_name':'先锋书店'
      },
      {
         'library_name':'上海书店'
      },
      {
         'library_name':'甘肃仙林大道书店'
      },
      {
         'library_name':'北京北海道小书店'
      },
      {
         'library_name':'不知道哪里小噶哒的大书店'
      },
      {
         'library_name':'光明教后勤仓库'
      },
      {
         'library_name':'少林寺藏书阁'
      },
      {
         'library_name':'不知道哪里小噶哒的大书店'
      },
      {
         'library_name':'光明教后勤仓库'
      },
      {
         'library_name':'少林寺藏书阁'
      },
      {
         'library_name':'不知道哪里小噶哒的大书店'
      },
      {
         'library_name':'光明教后勤仓库'
      },
      {
         'library_name':'少林寺藏书阁'
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
         $scope.delete_all=function () {
            if(value.checked){
               swal({
                  title: "您确定要全部删除吗？",
                  type: "warning",
                  showCancelButton: true,
                  closeOnConfirm: false,
                  confirmButtonText: "是的，我要删除",
                  confirmButtonColor: "#ec6c62"
               }, function () {
                  swal({
                     title: "操作成功!",
                     type: "success"
                  });
               });
            }
         }
      })
   }
   //单选
   $scope.sigelChecked=function (checked,index) {
      $scope.borrowbooks[index].checked = checked;
      $scope.delete_all=function () {
         if($scope.borrowbooks[index].checked){
            swal({
               title: "操作成功!",
               type: "success"
            });
         }
      }
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


}])

/*
shuzhanggui.directive("edit",function($document){
   return{
      restrict: 'AE',
      require: 'ngModel',
      link: function(scope,element,attrs,ngModel){
         element.bind("click",function(){
            var id = "txt_name_" +ngModel.$modelValue.id;
            scope.$apply(function(){
               angular.copy(ngModel.$modelValue,scope.master);
               //console.log(scope.master);
            })
            //console.log(id);
            var obj = $("#"+id);
            obj.removeClass("inactive");
            obj.addClass("active");
            obj.removeAttr("readOnly");
            scope.$apply(function(){
               scope.showEdit = false;
            })
         });
      }
   }
});*/
