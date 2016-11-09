## 资源
* [打款](https://mp.weixin.qq.com/wxopen/wacontractorpage?action=remit_verify&lang=zh_CN&token=479859393)
* [官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/api/?t=20161102)
* [开发工具下载](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=20161107)

## 预览

## 使用
+ git clone ''
+ 在微信开发工具中添加项目
+ 选择本项目

## 文档简易API
* app.js   --> .js后缀 脚本文件
* app.json --> .json后缀 配置文件
* app.wxss --> .wxss后缀 样式表文件

### app.js
> 小程序的脚本代码。
监听并处理小程序的生命周期函数、声明全局变量。
调用框架API。

### app.json
> 整个小程序的全局配置。
配置是由哪些页面组成，窗口背景色，导航条样式，默认标题。
_注意该文件不可添加任何注释。_

##### pages: 设置页面路径 必填
> 接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。
小程序中新增/减少页面，都需要对 pages 数组进行修改。
文件名不需要写后缀，框架会自动寻找.json,.js,.wxml,.wxss文件。

    ```
    {
     "pages":[
       "pages/index/index" // 数组的第一项代表小程序的初始页面。
       "pages/logs/logs"
     ]
    }
    ```

##### window: 设置默认页面的窗口表现
> 设置小程序的状态栏、导航条、标题、窗口背景色。

    ```
    {
      "window":{
        "navigationBarBackgroundColor": "#ffffff", // 导航栏背景颜色                                        #000000
        "navigationBarTextStyle": "black",         // 导航栏标题颜色                                        white
        "navigationBarTitleText": "微信接口功能演示", // 导航栏标题文字内容                                    String
        "backgroundColor": "#eeeeee",              // 窗口的背景色                                         #ffffff
        "backgroundTextStyle": "dark",             // 下拉背景字体、loading 图的样式，仅支持 dark/light       dark
        "enablePullDownRefresh": true              // 是否开启下拉刷新                                      false
      }
    }
    ```

##### tabBar: 设置底部 tab 的表现
> list数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。

    ```
    "tabBar": {
      "color": "#dddddd",                       // tab 上的文字默认颜色
      "selectedColor": "#3cc51f",               // tab 上的文字选中时的颜色
      "backgroundColor": "white",               // tab 的背景色
      "borderStyle": "black",                   // tabbar上边框的颜色， 仅支持 black/white                 black
      "list": [{                                // tab 的列表，详见 list 属性说明，最少2个、最多5个tab
        "pagePath": "pages/index/index",        // 页面路径，必须在 pages 中先定义                          必填
        "text": "首页",                          // tab 上按钮文字                                        必填
        "iconPath": "pages/index/index",        // 图片路径，icon 大小限制为40kb                           必填
        "selectedIconPath": "pages/index/index" // 选中时的图片路径，icon 大小限制为40kb                     必填
      },{
        "pagePath": "pages/logs/logs",
        "text": "日志",
        "iconPath": "pages/index/index",
        "selectedIconPath": "pages/index/index"
      }],
      "position": "bottom"                      // 可选值 bottom、top                                    bottom
    }
    ```

##### networkTimeout: 设置各种网络请求的超时时间，单位毫秒
    ```
    "networkTimeout": {
      "request": 10000,
      "connectSocket": 10000,
      "uploadFile": 10000,
      "downloadFile": 10000
    }
    ```

##### debug
> 调试信息以 info 的形式给出，
其信息有Page的注册，页面路由，数据更新，事件触发。

### app.wxss
> 整个小程序的公共样式表。
页面组件的 class 属性上直接使用 app.wxss 中声明的样式规则。
