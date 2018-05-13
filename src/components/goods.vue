<style>
.goods {
  display: flex;
}
.menus {
  flex: 0 0 80px;
}
.menus .menu-item {
  position: relative;
  display: table;
  height: 54px;
  line-height: 14px;
  width: 56px;
  padding: 0 12px;
}
.menus .menu-item .text {
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
}
.menus .menu-item::after {
  position: absolute;
  content: "";
  left: 12px;
  width: 56px;
  bottom: 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.iconMap {
  display: inline-block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE1QTdFNjU0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE1QTdFNjY0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwRTREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTVBN0U2NDREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFQatoAAAN2SURBVHjatFbNS1RRFP/d+94mmqsw5ueic8evucpfxyulrqtx0dk97lr0h7gm7b9weyesim4sqehtmine/EAjm/xoEmWmdNT33r23c+5k6djarg9c5+o77/zO+Z3fOaMwxjwE8JROAS7XonSeCAKI0KUEV2PrDJCgS+YVARy49MM7F8AYQIj0ryoF/9UrCnEAWVkJs7cHt74ecJyTXp5MfS94/x7e8+f2BQ7uDw/DGxiA3tw87UiB9OIivBcvYL5/RzA6Cp/u0PqUm5uaVTA9DTUxAb2yArezE+rzZwQfP0LNz0Pm5yer+mt6ZweysBDB3BzM79/w372D294OwX5pAaRE6NEjmK9foRYW4Ny7B5GdDXnrFmRBAURJiU0CoRCYOPPrlw0ssrIgm5shwmEgI+OCCogSp6ICTlMTQnfuwO3owGFfnw3ilJXBbW2lAgwMZW6CAHprC5qS4aRkcXHaVrGKYvSZc+qvvm+rUbOz8F+/ho5EIG/ehMjJgTk8tIe5FuRj4nGEurstkCwttUmcEEbcTQtLFPhjYwgmJ235oICsFLelxdKgPc8mEYyPQ8di0BsbCKhvzt27cNvaLqDouHnRqAUIPXgA/fMnDPXDVsTNpOAmkYBwXStRq6ZoNEkH0ZpqaQH8wUFIapbb0ABvaMgG5yoUydFQUEH0cBXi2jUIqpZlCgJ0iKJUOzMHrB41NQVZWwtBjeNsj4dOZGYi3NUF5/592w9ZVGR7wTPDEpbl5f8BoGD+yAhAmbGeUxVmP1iKXBFRI/LykoNFR5KERW7uxQDMt15ehiDFyONhITlaKm7csHd/ZgbqyxeI69cB8jPUbPZ3qGLeAmZ393wAcfs2ZHU1zI8fdkXo9XU7TIIGjRuoSZKKEjAEYI6OAD5MHVXCz4M3b5ISPq/JLEmnpgaa1BJ8+AD97Ruwv2/7wQOoP32CbGyEJD9Fe0i9fQvBy43XBCVkJ5orvUhFdiJ53EklanXVZuhSUK4i3NNj+8ppejnqqk5s1xp7gyalmu0p2/QsANPkVFXBoaCaAHglOHV1yYccnJXGfaClGO7ttZQe9fdDUbUOJ5YCwLslZk6a7xuazuQ9kTDEtTlj+/smWFr696taWzPey5dGRSKpnjHeRXHCyb6ib7S4PG+aL8nCDLB9hQA74u+/Lc/o5F12cDqP/wgwAJG54Y1udZHlAAAAAElFTkSuQmCC);
}
.wrapper {
  flex: 1;
}
.wrapper h1 {
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  padding-left: 12px;
  color: #93999f;
  background: #f3f5f7;
  font-size: 12px;
}
.foot-item .content {
  flex: 1;
  padding-left: 10px;
}
.foot-item {
  position: relative;
  display: flex;
  padding: 18px 0;
  margin: 0 18px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.foot-item .content h2 {
  margin: 2px 0 8px 0;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  font-weight: 700;
  color: black;
}
.foot-item .content > .description {
  font-size: 10px;
  margin-bottom: 8px;
  line-height: 12px;
  color: #93999f;
}
.foot-item .icon {
  flex: 0 0 57px;
}

.foot-item .content .sell-info {
  font-size: 10px;
  color: #93999f;
  line-height: 10px;
}
.foot-item .content .price {
  font-size: 10px;
  font-weight: 700px;
  line-height: 24px;
}
.foot-item .content .price .newPrice {
  color: red;
  font-size: 14px;
}
.foot-item .content .price .newPrice .unit {
  font-size: 10px;
  font-weight: normal;
}
.foot-item .content .price .oldPrice {
  text-decoration: line-through;
  color: #93999f;
  padding-left: 4px;
}
.cartcontrol .cart-decrease i {
  font-size: 24px;
  color: #00a0dc;
}
.cartcontrol .cart-add i {
  font-size: 22px;
  color: #00a0dc;
}
.cartcontrol .cart-decrease,
.cartcontrol .cart-add {
  display: inline-block;
  padding: 6px;
  transition: all 0.4s linear;
  vertical-align: top;
}
.cartcontrol .cart-count {
  display: inline-block;
  font-size: 10px;
  color: #93999f;
  line-height: 24px;
  text-align: center;
  vertical-align: top;
  padding: 6px 0;
}

.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 12px;
  z-index: 20px;
}
</style>


<template>
  <div class="goods">
     <div class="menus">
      <ul>
        <li class="menu-item">
          <span class="text">
            热销榜
          </span>
        </li>
        <li class="menu-item">
          <span class="text">
            <span data-v-1007ef1b="" class="iconMap special" ></span>
              单人精彩套餐
            </span>
        </li>
        <li class="menu-item">
          <span class="text">冰爽特饮</span>
        </li>
        <li class="menu-item">
          <span class="text">小吃主食</span>
        </li>
        <li class="menu-item">
          <span class="text">精选热菜</span>
        </li>
        <li class="menu-item">
          <span class="text">爽口凉菜</span>
        </li>
        <li class="menu-item">
          <span class="text">精彩套餐</span>
        </li>
        <li class="menu-item">
          <span class="text">果品</span>
        </li>
        <li class="menu-item">
          <span class="text">特色价位</span>
        </li>
      </ul>
      <div></div>
    </div>
    <div class="wrapper">
      <ul>
        <h1>热销榜</h1>
        <li class="foot-list">
          <ul>
            <li class="foot-item">
              <div class="icon">
                <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                 <h2>皮蛋瘦肉粥</h2>
                 <p class="description">咸粥</p>
                 <div class="sell-info">
                   <span class="sellCount">月售229份</span>
                   <span class="rating">好评率100%</span>
                 </div>
                 <div class="price">
                    <span class="newPrice">
                      <span class="unit">￥</span>
                      10
                    </span>
                    <span class="oldPrice">￥19.00</span>
                 </div>
                 <div class="cartcontrol-wrapper">
                   <div class="cartcontrol">
                     <div class="cart-decrease">
                       <i class="fa fa-minus-square-o"></i>
                     </div>
                     <div class="cart-count">1</div>
                     <div class="cart-add">
                       <i class="fa fa-plus-square"></i>
                     </div>
                   </div>
                 </div>
              </div>
            </li>
            <li class="foot-item">
              <div class="icon">
                <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                 <h2>皮蛋瘦肉粥</h2>
                 <p class="description">咸粥</p>
                 <div class="sell-info">
                   <span class="sellCount">月售229份</span>
                   <span class="rating">好评率100%</span>
                 </div>
                 <div class="price">
                    <span class="newPrice">
                      <span class="unit">￥</span>
                      10
                    </span>
                    <span class="oldPrice">￥19.00</span>
                 </div>
                 <div class="cartcontrol-wrapper">
                   <div class="cartcontrol">
                     <div class="cart-decrease">
                       <i class="fa fa-minus-square-o"></i>
                     </div>
                     <div class="cart-count">1</div>
                     <div class="cart-add">
                       <i class="fa fa-plus-square"></i>
                     </div>
                   </div>
                 </div>
              </div>
            </li>
            <li class="foot-item">
              <div class="icon">
                <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                 <h2>皮蛋瘦肉粥</h2>
                 <p class="description">咸粥</p>
                 <div class="sell-info">
                   <span class="sellCount">月售229份</span>
                   <span class="rating">好评率100%</span>
                 </div>
                 <div class="price">
                    <span class="newPrice">
                      <span class="unit">￥</span>
                      10
                    </span>
                    <span class="oldPrice">￥19.00</span>
                 </div>
                 <div class="cartcontrol-wrapper">
                   <div class="cartcontrol">
                     <div class="cart-decrease">
                       <i class="fa fa-minus-square-o"></i>
                     </div>
                     <div class="cart-count">1</div>
                     <div class="cart-add">
                       <i class="fa fa-plus-square"></i>
                     </div>
                   </div>
                 </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
   <shopCart></shopCart>
  </div>
 
</template>


<script>
import ShopCart from "@/components/shopCart";

export default {
  components: {
    shopCart: ShopCart
  }
};
</script>
