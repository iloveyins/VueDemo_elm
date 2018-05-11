<template>
  <div id="shopCart">
      <div class="content">
          <div class="content-left">
            <div class="logo-wrapper">
                <div class="badge">3</div>
                <div class="logo-action">
                    <i class="fa fa-shopping-cart"></i>
                </div>
            </div>
            <div class="price-active">
               ￥14
            </div>
            <div class="desc">
                另需要配送费￥6元
            </div>
          </div>
          <div class="content-right">去结算</div>
      </div>
  </div>
</template>
<style>
    #shopCart{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        z-index: 50;
    }
    #shopCart>.content{
        display: flex;
        background: #141d27;
    }
    #shopCart>.content>.content-left{
        flex: 1;
        height: 48px;
    }
    #shopCart>.content>.content-right{
        flex: 0 0 105px;
        background: #2b343c;
        color: rgba(255,255,255,0.4);;
        font-size: 12px;
        font-weight: 700;
        line-height: 48px;
        text-align: center;
    }
    #shopCart>.content>.content-left>.logo-wrapper{
        display: inline-block;
        vertical-align: top;
        position: relative;
        height: 56px;
        line-height: 56px;
        border-radius: 50%;
        width: 56px;
        top: -10px;
        background: #141d27;
        margin: 0 12px;
        padding: 6px;
        box-sizing: border-box;
        text-align: center;
    }
    #shopCart>.content>.content-left>.logo-wrapper>.logo-action{
        color: #ffffff;
        width: 100%;
        height: 100%;
        background: #2b343c;
        border-radius:50%;
        line-height: 44px;
        font-size: 24px;
    }
     #shopCart>.content>.content-left>.logo-wrapper .badge{
        position: absolute;
        top: 0;
        right: 0;
        background: red;
        color: #fff;
        width:24px;
        height: 16px;
        line-height: 16px;
        font-size: 9px;
        font-weight: 700;
        border-radius: 16px;
        text-align: center;
    }
    .price-active{
        display: inline-block;
        font-size: 16px;
        margin-top: 12px;
        padding-right: 12px;
        color: #ffffff;
        font-weight: 700;
        line-height: 24px;
        border-right: 1px solid rgba(255,255,255,0.1);
        
    }
    .desc{
        position: relative;
        display: inline-block;
        margin: 12px 0 0 12px;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height: 24px;
    }
</style>

