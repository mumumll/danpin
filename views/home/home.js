var modules = require( '../../views/modules/modules.js' ),
	utils = require( '../../common/utils/utils' ),
	handle,
	_fn;

handle = {
	render : function( callerPage ) {
		_fn.init( callerPage );
		// 请求数据，渲染数据

    wx.request({
      url: "https://danpin.woaizhuangbi.com/test/home/data.json",
      method: 'get',
      success: function (res) {
        callerPage.setData({
          currentView: 'home',
          currentData: res.data.data
        });
      },
      fail: function (res) {

      }
    });
		// callerPage.setData( {
		// 	currentView : 'home',
		// 	currentData : data.data
		// } );
	}
}

_fn = {
	init : function( callerPage ) {
		if ( callerPage.initedHome ) {
			return;
		}
		//utils.mix( callerPage, events );
		utils.mix( callerPage, modules.events );
	}
}

module.exports = handle;