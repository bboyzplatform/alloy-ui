YUI.add("aui-layout-col",function(e,t){var n="col-md-",r=e.getClassName("layout","col","content"),i='<div class="col"><div class="'+r+'"></div></div>';e.LayoutCol=e.Base.create("layout-col",e.Base,[],{initializer:function(){this.after({sizeChange:this._afterSizeChange,valueChange:this._afterValueChange}),this._uiSetSize(this.get("size")),this._uiSetValue(this.get("value"))},_afterContentChange:function(){this._uiSetValue(this.get("value"))},_afterSizeChange:function(e){this.get("node").removeClass(n+e.prevVal),this._uiSetSize(this.get("size"))},_afterValueChange:function(){this._contentEventHandle&&(this._contentEventHandle.detach(),this._contentEventHandle=null),this._uiSetValue(this.get("value"))},_uiSetSize:function(e){this.get("node").addClass(n+e)},_uiSetValue:function(t){var n=this.get("node"),i=n.one("."+r);i.empty(),t&&(t.content!==undefined?i.append(t.content):(i.append(t.get("content")),this._contentEventHandle=t.after("contentChange",e.bind(this._afterContentChange,this)),this.get("value").addTarget(this)))}},{ATTRS:{maxSize:{value:12},minSize:{value:1},movableContent:{validator:e.Lang.isBoolean,value:!0},node:{setter:function(e){return e.setData("layout-col",this),e},validator:e.Lang.isNode,valueFn:function(){return e.Node.create(i)},writeOnce:"initOnly"},removable:{validator:e.Lang.isBoolean,value:!0},size:{setter:function(e){var t=this.get("maxSize"),n=this.get("minSize");return e<n?n:e>t?t:e},valueFn:function(){return this.get("minSize")}},value:{validator:function(t){return e.Lang.isObject(t)||e.Lang.isNull(t)},value:null}}})},"3.0.3-deprecated.65",{requires:["aui-classnamemanager","aui-node-base","base-build"],skinnable:!0});
