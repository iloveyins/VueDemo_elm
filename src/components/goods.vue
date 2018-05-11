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
    <div class="">
      
    </div>
  </div>
 
</template>

<style>
  .goods{
    display: flex;
  }
  .menus{
    flex:0 0 80px;
  }
  .menus .menu-item{
    position: relative;
    display: table;
    height: 45px;
    line-height: 14px;
    width: 56px;
    padding: 0 12px;
  }
   .menus .menu-item .text{
     display: table-cell;
     vertical-align: middle;
     font-size: 12px;
     font-weight: normal;
     line-height: 14px;
   }
  .menus .menu-item::after{
    position: absolute;
    content: '';
    left: 12px;
    width: 56px;
    bottom: 0;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  }
  .iconMap{
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFW…gBAssR+pefZlMREpiECK8J+yOsR1iiRo5X8WUs7PqGAAMAbV9KOzs8mYkAAAAASUVORK5CYII=);
  }
  .wrapper{
    flex: 1;
  }
  .wrapper  h1{
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    padding-left: 12px;
    color: #93999f;
    background: #f3f5f7;
    font-size: 12px;
  }
  .foot-item .content{
    flex: 1;
    padding-left: 10px;
  }
  .foot-item{
     position: relative;
    display: flex;
    padding: 18px 0;
    margin: 0 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  }
  .foot-item .content h2{
    margin: 2px 0 8px 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    font-weight: 700;
    color: black;
  }
  .foot-item .content>.description{
      font-size: 10px;
      margin-bottom: 8px;
      line-height: 12px;
      color: #93999f;
  }
  .foot-item .icon{
    flex: 0 0 57px;
  }

  .foot-item .content .sell-info{
    font-size: 10px;
    color: #93999f;
    line-height: 10px;
  }
  .foot-item .content .price{
    font-size: 10px;
    font-weight: 700px;
    line-height: 24px;
  }
  .foot-item .content .price .newPrice{
    color: red;
    font-size: 14px;
  }
  .foot-item .content .price .newPrice .unit{
    font-size: 10px;
    font-weight: normal;
  }
  .foot-item .content .price .oldPrice{
    text-decoration: line-through;
    color: #93999f;
    padding-left: 4px;
  }
  .cartcontrol .cart-decrease i{
    font-size: 24px;
    color: #00a0dc;
  }
  .cartcontrol .cart-add i{
    font-size: 22px;
    color: #00a0dc;
  }
  .cartcontrol .cart-decrease,.cartcontrol .cart-add{
    display: inline-block;
    padding: 6px;
    transition: all 0.4s linear;
    vertical-align: top;
  }
  .cartcontrol .cart-count{
     display: inline-block;
     font-size: 10px;
     color: #93999f;
     line-height: 24px;
     text-align: center;
      vertical-align: top;
      padding: 6px 0;
  }
 
  .cartcontrol-wrapper{
    position: absolute;
    right: 0;
    bottom: 12px;
    z-index: 20px;
  }
</style>
