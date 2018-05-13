<template>
    <div class="ratingsWrapper">
        <div class="ratings-content">
            <div class="info">
                <div class="mark">
                    <div class="num">4.2</div>
                    <div class="text">综合评分</div>
                    <div class="contrast">高于周边商家70.9%</div>
                </div>
                <div class="stars">
                    <div class="serviceScore">
                        <span class="text">服务态度</span>
                        <div class="star">
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star off"></i>
                        </div>
                        <span class="num">4.1</span>
                    </div>
                    <div class="footScore">
                        <span class="text">产品描述</span>
                        <div class="star">
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star on"></i>
                            <i class="fa fa-star off"></i>
                            <i class="fa fa-star off"></i>
                        </div>
                        <span class="num">4.1</span>
                    </div>
                    <div class="foot-time">
                        <span class="to-time">送达时间</span>
                        <span class="time">38分钟</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="evaluation">
            <div class="classify">
                <span class="item">全部</span>
                <span class="item">推荐</span>
                <span class="item">吐槽</span>
            </div>
            <div class="switch">
                <i class="fa fa-check-circle"></i>
                <span class="text">只看有内容的评价</span>
            </div>
            <div></div>
        </div>
        <div class="evel-list">
            <ul>
                <li class="evel">
                    <div class="avatar">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="content">
                        <div class="user">
                            <span class="account">3******c</span>
                            <span class="time">2018-12-01 12:23</span>
                        </div>
                        <div class="aScore">
                            <div class="star">
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star off"></i>
                            </div>
                            <span class="text">30分钟送达</span>
                        </div>
                        <div class="text">
                            不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.
                        </div>
                        <div class="recommend">
                            <i class="fa fa-thumbs-up"></i>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                        </div>
                    </div>
                </li>
                 <li class="evel">
                    <div class="avatar">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="content">
                        <div class="user">
                            <span class="account">3******c</span>
                            <span class="time">2018-12-01 12:23</span>
                        </div>
                        <div class="aScore">
                            <div class="star">
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star on"></i>
                                <i class="fa fa-star off"></i>
                            </div>
                            <span class="text">30分钟送达</span>
                        </div>
                        <div class="text">
                            不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.
                        </div>
                        <div class="recommend">
                            <i class="fa fa-thumbs-up"></i>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                            <span class="dish">南瓜粥</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.ratingsWrapper {
}
.ratings-content {
}

.ratings-content .info {
  display: flex;
}
.ratings-content .mark {
  flex: 0 0 138px;
  text-align: center;
  margin: 18px 0;
  border-right: 1px solid rgba(7, 17, 27,0.1);
}
.ratings-content .info .mark .num {
  font-size: 24px;
  color: #f90;
  line-height: 28px;
}
.ratings-content .info .mark .text {
  padding: 6px 0 8px 0;
  font-size: 12px;
  color: #07111b;
  line-height: 12px;
}
.ratings-content .info .contrast {
  font-size: 10px;
  color: #07111b;
  line-height: 10px;
  margin-bottom: 6px;
}
.serviceScore,.footScore{
    display: flex;
    margin-bottom: 8px;
}
.serviceScore .text,.footScore .text{
    font-size: 12px;
    color: #07111b;
    line-height: 18px;
    margin-right: 12px;
}
.serviceScore .num,.footScore .num{
    font-size: 12px;
    line-height: 18px;
    color: #f90;
    padding-left: 12px;
}
.ratingsWrapper .stars{
    padding: 18px 24px;
}
.ratingsWrapper .stars .star .on{
    color: #f90;
}
.ratingsWrapper .stars .star .off{
    color: #e5e3df;
}
.foot-time .to-time{
   font-size: 12px;
    color: #07111b;
    line-height: 18px;
    margin-right: 12px;
}
.foot-time .time{
    font-size: 12px;
    color: #93999f;
    line-height: 18px;
}
 .ratingsWrapper .divider{
    height: 16px;
    width: 100%;
    background: #f3f5f7;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
 }
 .classify{
     margin: 0px 18px;
     padding-bottom: 18px;
     padding: 18px 0;
     border-bottom: 1px solid rgba(7,17,27,0.1);
 }
.classify>.item{
    color: #ffffff;
    background: #00a9dc;
    display: inline-block;
    font-size: 12px;
    padding: 8px 12px;
    line-height: 16px;
    margin-right: 8px;
}
.switch{
    border-bottom: 1px solid rgba(7,17,27,0.1);
    padding: 12px 0 12px 18px;  
}
.switch>i{
    color: #00c850;
    font-size: 24px;
    vertical-align: middle;
}
.switch>.text{
    color:  #93999f;
    font-size: 12px;
}
.evel-list .evel{
    display: flex;
    margin: 0 18px;
    padding:18px 0;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.evel-list .avatar{
    margin-right:12px;
    flex: 0 0 28px;
}
.evel-list .avatar>img{
    width: 28px;
    height: 28px;
}
.evel-list .content .user{
    font-size: 12px;
    color:  #93999f;
}
.evel-list .content .user .time{
    position: absolute;
    right: 18px;
}
.aScore {
    display: flex;
}
.aScore>.text{
    font-size: 12px;
    color:  #93999f;
    line-height: 20px;
}
.aScore .star{
    margin-right: 12px;
}
.aScore .star>i{
    font-size: 10px;
    color: #f90;

}
.evel-list .content>.text{
    font-size: 12px;
        color: #07111b;
    line-height: 18px;
}
.recommend{
    padding-top:5px;
}
.recommend>i {
    color: #00a9dc;
    font-size: 10px;
}
.recommend .dish{
    border: 1px solid rgba(7,17,27,0.1);
    padding: 2px 6px;
    color: #93999f;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 6px;
    margin-top: 4px;
    display: inline-block;
    line-height: 16px;
}
</style>
