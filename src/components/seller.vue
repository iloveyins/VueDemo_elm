<template>
  <div class="seller">
      <div class="seller-content">
          <div class="info">
              <div class="title">
                  <div class="name">粥品香坊(石坝村)</div>
                  <div class="stars">
                       <div class="star">
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star off"></i>
                        </div>
                       <span class="num">(24)</span>
                       <span class="outNum">月售90单</span>
                  </div>
                  <div class="collect">
                      <i class="fa fa-heart"></i>
                      <span class="text">收藏</span>
                  </div>
              </div>
              <div class="remark">
                <div class="block">
                    <span class="title">起送价</span>
                    <div class="content">
                        <span class="remark-big">20</span>
                        元
                    </div>
                </div>
                <div class="block">
                    <span class="title">商家配送</span>
                    <div class="content">
                        <span class="remark-big">4</span>
                        元
                    </div>
                </div>
                <div class="block">
                    <span class="title">平均配送时间</span>
                    <div class="content">
                        <span class="remark-big">20</span>
                        分钟
                    </div>
                </div>
              </div>
          </div>
      </div>
       <div class="divider"></div>
       <div class="activities">
           <div class="bulletin">
               <h1>公告与活动</h1>
               <div class="content">
          粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
               </div>
           </div>
       </div>
       <div class="supports">
           <ul>
               <li>
                   <span class="icon"></span>
                   <span class="text">在线支付满28减5</span>
               </li>
               <li>
                   <span class="icon"></span>
                   <span class="text">在线支付满28减5</span>
               </li>
               <li>
                   <span class="icon"></span>
                   <span class="text">在线支付满28减5</span>
               </li>
               <li>
                   <span class="icon"></span>
                   <span class="text">在线支付满28减5</span>
               </li>
           </ul>
       </div>
  </div>
</template>
<style>
.seller .seller-content .info {
  padding: 18px 0;
  margin: 0 18px;
}
.seller .seller-content .info .name {
  line-height: 14px;
  font-size: 14px;
  color: #07111b;
}
.seller .seller-content .info .stars {
  display: flex;
  margin-top: 8px;
}
.seller .seller-content .info .star {
  color: #f90;
  font-size: 14px;
  margin-right: 5px;
}
.seller .seller-content .info .stars > .num,
.seller .seller-content .info .stars > .outNum {
  font-size: 10px;
  padding: 0 12px 0 8px;
  line-height: 14px;
}
.seller .seller-content > .info > .title {
  position: relative;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.seller .seller-content .collect {
  position: absolute;
  right: 5px;
  bottom: 20px;
  text-align: center;
}
.seller .seller-content .collect > i {
  color: #d4d6d9;
  font-size: 20px;
  margin-bottom: 6px;
}
.seller .seller-content .collect > .text {
  display: block;
  font-size: 10px;
}
.remark {
  display: flex;
}
.remark > .block {
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  margin-top: 18px;
}
.remark > .block:last-child {
  border: none;
}
.remark > .block > .title {
  font-size: 10px;
  color: #93999f;
  line-height: 10px;
  margin-bottom: 4px;
  display: inline-block;
}
.remark > .block > .content {
  font-size: 10px;
  color: #93999f;
}
.remark > .block > .content > .remark-big {
  font-size: 24px;
  color: #07111b;
}
.activities {
  padding-top: 18px;
}
.bulletin {
  margin: 0px 18px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.bulletin > h1 {
  font-size: 14px;
  color: #07111b;
  line-height: 14px;
}
.bulletin > .content {
  padding: 8px 12px 16px 12px;
  font-size: 12px;
  font-weight: 200;
  color: #f01414;
  line-height: 24px;
}
.supports {
  margin: 0 18px;
}
.supports ul li {
  padding: 16px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.supports ul li > .icon {
  width: 20px;
  height: 20px;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE1QTdFNjU0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE1QTdFNjY0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwRTREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTVBN0U2NDREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFQatoAAAN2SURBVHjatFbNS1RRFP/d+94mmqsw5ueic8evucpfxyulrqtx0dk97lr0h7gm7b9weyesim4sqehtmine/EAjm/xoEmWmdNT33r23c+5k6djarg9c5+o77/zO+Z3fOaMwxjwE8JROAS7XonSeCAKI0KUEV2PrDJCgS+YVARy49MM7F8AYQIj0ryoF/9UrCnEAWVkJs7cHt74ecJyTXp5MfS94/x7e8+f2BQ7uDw/DGxiA3tw87UiB9OIivBcvYL5/RzA6Cp/u0PqUm5uaVTA9DTUxAb2yArezE+rzZwQfP0LNz0Pm5yer+mt6ZweysBDB3BzM79/w372D294OwX5pAaRE6NEjmK9foRYW4Ny7B5GdDXnrFmRBAURJiU0CoRCYOPPrlw0ssrIgm5shwmEgI+OCCogSp6ICTlMTQnfuwO3owGFfnw3ilJXBbW2lAgwMZW6CAHprC5qS4aRkcXHaVrGKYvSZc+qvvm+rUbOz8F+/ho5EIG/ehMjJgTk8tIe5FuRj4nGEurstkCwttUmcEEbcTQtLFPhjYwgmJ235oICsFLelxdKgPc8mEYyPQ8di0BsbCKhvzt27cNvaLqDouHnRqAUIPXgA/fMnDPXDVsTNpOAmkYBwXStRq6ZoNEkH0ZpqaQH8wUFIapbb0ABvaMgG5yoUydFQUEH0cBXi2jUIqpZlCgJ0iKJUOzMHrB41NQVZWwtBjeNsj4dOZGYi3NUF5/592w9ZVGR7wTPDEpbl5f8BoGD+yAhAmbGeUxVmP1iKXBFRI/LykoNFR5KERW7uxQDMt15ehiDFyONhITlaKm7csHd/ZgbqyxeI69cB8jPUbPZ3qGLeAmZ393wAcfs2ZHU1zI8fdkXo9XU7TIIGjRuoSZKKEjAEYI6OAD5MHVXCz4M3b5ISPq/JLEmnpgaa1BJ8+AD97Ruwv2/7wQOoP32CbGyEJD9Fe0i9fQvBy43XBCVkJ5orvUhFdiJ53EklanXVZuhSUK4i3NNj+8ppejnqqk5s1xp7gyalmu0p2/QsANPkVFXBoaCaAHglOHV1yYccnJXGfaClGO7ttZQe9fdDUbUOJ5YCwLslZk6a7xuazuQ9kTDEtTlj+/smWFr696taWzPey5dGRSKpnjHeRXHCyb6ib7S4PG+aL8nCDLB9hQA74u+/Lc/o5F12cDqP/wgwAJG54Y1udZHlAAAAAElFTkSuQmCC);
}
.supports ul li > .text {
  font-size: 12px;
  font-weight: 200;
  color: #07111b;
  line-height: 18px;
}
</style>
