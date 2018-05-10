# 3D-animation
基于CSS3，jQuery的3D动画项目，有6个方形，当鼠标从下方进入方形的时候，方形会向上翻转，当鼠标从左方进入方形的时候，方形会向右翻转，其他方向同理。  
## 思路：
1 创建HTML结构，及相应的CSS样式（并不是正方形有六个面，而是动态地将出现的数字面translate移至相应的一面）  
2 创建各个方向的CSS样式（transform：rotate3d()），但Class样式不加到HTML上，而是用js加上Class类，从而根据不同的鼠标进入方向有动态的样式  
## 难点：  
确认鼠标进入方向
![](http://my-first-bucket-1255365917.coscd.myqcloud.com/git/3d-animation-pic.png)
