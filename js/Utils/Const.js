

//首页
var HDHM01_URL = 'http://api.hoto.cn/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&format=json&sessionid=1404277925&vc=25&vn=v3.5.2&loguid=&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7CFFDD5AB8-D715-4007-9E15-DF103EB9DD01%7C825300FA-E7F0-4E82-9181-E914E3EBEEA0&channel=appstore&uuid=8332A3FB-D4DF-416D-AA3D-443277ECAD26&method=Suggest.recipeV3'
//分类
var HDCG01_URL = 'http://api.hoto.cn/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&format=json&sessionid=1404959036&vc=25&vn=v3.5.2&loguid=&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7CFFDD5AB8-D715-4007-9E15-DF103EB9DD01%7C825300FA-E7F0-4E82-9181-E914E3EBEEA0&channel=appstore&uuid=8332A3FB-D4DF-416D-AA3D-443277ECAD26&method=Search.getCateListV3'
//逛逛
var HDGG01_URL = 'http://api.hoto.cn/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&format=json&sessionid=1404961808&vc=25&vn=v3.5.2&loguid=&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7CFFDD5AB8-D715-4007-9E15-DF103EB9DD01%7C825300FA-E7F0-4E82-9181-E914E3EBEEA0&channel=appstore&uuid=8332A3FB-D4DF-416D-AA3D-443277ECAD26&method=Guang.getList'
//动态
var HDDY01_URL = 'http://api.haodou.com/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&appsign=e746a91c3454fce7470904efc64a06c3&channel=appstore&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7C65E9FB11-64B3-4B5C-A62C-4B53FD796AC4%7C97F90A81-F659-474D-B27E-BE58CDFF30C0&format=json&loguid=8752979&method=UserFeed.getFollowUserFeed&nonce=1458377095&sessionid=1458376760&signmethod=md5&timestamp=1458377095&uuid=7408f5dd81db1165cd1896e8175a75e4&v=2&vc=46&vn=v6.0.3'
//全部宝典
var HDDY02_URL = 'http://api.hoto.cn/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&format=json&sessionid=1404979448&vc=25&vn=v3.5.2&loguid=&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7CFFDD5AB8-D715-4007-9E15-DF103EB9DD01%7C825300FA-E7F0-4E82-9181-E914E3EBEEA0&channel=appstore&uuid=8332A3FB-D4DF-416D-AA3D-443277ECAD26&method=Wiki.getListByType'
//tag详情列表
var HDHM04_URL = 'http://api.hoto.cn/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&format=json&sessionid=1404903331&vc=25&vn=v3.5.2&loguid=&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7CFFDD5AB8-D715-4007-9E15-DF103EB9DD01%7C825300FA-E7F0-4E82-9181-E914E3EBEEA0&channel=appstore&uuid=8332A3FB-D4DF-416D-AA3D-443277ECAD26&method=Search.getListV3'

var TabNames   = ['首页','逛逛','分类','动态','我'];

var LoadingKey = '加载中...'

module.exports = {
	TabNames,
	LoadingKey,
	HDHM01_URL,
	HDCG01_URL,
	HDGG01_URL,
	HDDY01_URL,
	HDDY02_URL,
	HDHM04_URL
}