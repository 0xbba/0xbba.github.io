/*
 * name : Future
 * edition : 2.0.2
 * message : 前端美化样式由星环[Future]提供，程序由Alist创始者友情提供
 * technical support : https://www.xhto.cn/
 */

var x = true;
var conarr = ["星环博客-云盘美化包","https://www.xhto.cn/"];

$("html").click(function() {
    if (x) {
        var title = document.title,
            // 个人信息编写区域+星环博客提供技术支持+ —————— ON

            // 头像链接地址
            headimg = "https://s2.loli.net/2022/07/24/DhRJVS8O1iQNmWM.jpg",
            // 博主铭言句子
            motto = "瑶瑶，嘿嘿嘿，我的瑶瑶🤤",
            // 配置 - 导航内容及链接【注：名称和链接需要一一对应，用英文逗号隔开】
            linkname = ["首页", "OMV", "qBittoren", "容器", "Jellyfin", "AriaNG", "路由器"],
            link = ["/", "http://192.168.123.220/", "http://192.168.123.220:9092", "http://192.168.123.220:9000", "http://192.168.123.220:8096", "http://192.168.123.220:6880", "http://192.168.123.1"],
            code = "";

        // 个人信息编写区域+星环博客提供技术支持+ —————— END

        // 程序化代码
        code += '<h3>'+title+'</h3>';
        code += '<div id="uxhdimg"><img src="'+headimg+'" alt="['+title+']" /></div>';
        code += '<p>'+motto+'</p>';
        code += '<ul>';
        for (vo in linkname) {
            code += '<li><a href="'+link[vo]+'">'+linkname[vo]+'</a></li>';
        }
        code += '</ul>';

        // 代码写入视觉程序
        $(".header").append(code);
        // 判断是否写入
        x = false;
        console.log('%c '+conarr[0]+' %c '+conarr[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#66ccff); border-radius: 0px 2px 2px 0px;');
    }
})

// 支持样式代码
$(document).on('click', '.buttons>span:eq(1) svg', function() {
    var $viwe = $(this).attr('viewBox');
})

// 检测是否数据添加上
window.onload = function(){
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 200);
    
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 500);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 1000);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 2000);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 5000);
}
