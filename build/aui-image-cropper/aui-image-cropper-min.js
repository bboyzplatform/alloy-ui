YUI.add("aui-image-cropper",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isNumber,s=n.toFloat,o=e.getClassName("image-cropper","crop"),u=e.getClassName("image-cropper","crop","outline"),a=e.getClassName("image-cropper","overlay"),f=e.getClassName("image-cropper","crop","hover"),l=e.Component.create({NAME:"image-cropper",ATTRS:{cropHeight:{validator:i,value:100},cropWidth:{validator:i,value:100},minWidth:{value:undefined},minHeight:{value:undefined},movable:{validator:r,value:!0},preserveRatio:{validator:r,value:!1},region:{getter:"_getCropRegion",value:{}},resizable:{validator:r,value:!0},x:{setter:Math.round,validator:i,value:0},y:{value:0,setter:Math.round,validator:i}},UI_ATTRS:["cropHeight","cropWidth","minWidth","minHeight","movable","resizable","x","y"],prototype:{renderUI:function(){var t=this,n=t.get("boundingBox");t.cropNode=e.Node.create('<div class="'+o+'"></div>'),t.cropNode.append(e.Node.create('<div class="'+u+'"></div>')),t.overlay=e.Node.create('<div class="'+a+'"></div>'),e.all([t.cropNode,t.overlay]).appendTo(n),t._boundingBox=n,t._renderDrag(),t._renderResize()},bindUI:function(){var t=this;t._fireCropEventTask=e.debounce(t._fireCropEvent,10,t),t.publish("crop",{defaultFn:t._defCropFn}),t.on(["drag:start","resize:start"],e.debounce(t._syncRegion,25)),t.on(["drag:drag","drag:end","resize:end","resize:resize"],e.debounce(t._constrainValues,10)),t.after(["drag:drag","resize:resize"],t._fireCropEvent,t),t.after(["xChange","yChange","cropWidthChange","cropHeightChange"],function(e){t._fireCropEventTask(e),t._syncCropNodeUI()}),t._createHover()},syncUI:function(){var e=this;e._uiSetPreserveRatio(e.get("preserveRatio")),e.syncImageUI(),e._syncCropNodeUI()},destructor:function(){var e=this;e._destroyDrag(),e._destroyResize()},syncImageUI:function(){var e=this,t=e.get("srcNode");e.cropNode.setStyle("backgroundImage","url("+t.attr("src")+")"),e.cropNode.setStyle("backgroundSize",t.width()+"px "+t.height()+"px"),e._constrainValues(),e._syncXY();var n=e._getConstraintRegion(),r=e.drag,i=e.resize;r&&r.con.set("constrain",n),i&&i.con.set("constrain",n)},_constrainValues:function(){var e=this,t=e.get("srcNode"),n=e.get("cropHeight"),r=e.get("cropWidth"),i=e.cropNode.getBorderWidth("lr"),s=e.cropNode.getBorderWidth("tb"),o=e.get("x"),u=e.get("y"),a=t.width(),f=t.height();f>0&&(u=Math.max(u,0),u+(n-s)>f&&(u=Math.max(f-n,0)),u+(n-s)>f&&(n=Math.max(f-u,0))),e.set("y",u),e.set("cropHeight",n),a>0&&(o=Math.max(o,0),o+(r-i)>a&&a&&(o=Math.max(a-r,0)),o+(r-i)>a&&a&&(r=Math.max(a-o,0))),e.set("x",o),e.set("cropWidth",r)},_createHover:function(){var e=this;e._destroyHover(),e._hoverHandles=e.cropNode.on("hover",e._hoverOverlay,e._unHoverOverlay,e)},_defCropFn:function(e){var t=this,n=e.cropType;n==="drag:drag"?t._syncXY():n==="resize:resize"&&t._syncCropSize()},_destroyDrag:function(){var e=this;e.drag&&(e.drag.destroy(),delete e.drag)},_destroyHover:function(){var e=this;e._hoverHandles&&(e._hoverHandles.detach(),e._hoverHandles=null)},_destroyResize:function(){var e=this;e.resize&&(e.resize.destroy(),delete e.resize)},_fireCropEvent:function(e){var t=this;t.fire("crop",{cropType:e.type})},_getConstraintRegion:function(e){var t=this,n=e?null:t._origRegion;if(!n){var r=t.get("srcNode"),i=t.cropNode,s=r.getXY(),o=s[0],u=s[1];n={bottom:u+r.height()+i.getBorderWidth("b"),left:o-i.getBorderWidth("l"),right:o+r.width()+i.getBorderWidth("r"),top:u-i.getBorderWidth("t")},t._origRegion||(t._origRegion=n)}return n},_getCropRegion:function(){var e=this;return{height:e.get("cropHeight"),width:e.get("cropWidth"),x:e.get("x"),y:e.get("y")}},_hoverOverlay:function(){var e=this;!e._isDragging()&&!e._isResizing()&&e._boundingBox.addClass(f)},_isDragging:function(){var e=this,t=e.drag;return t&&t.get("dragging")},_isResizing:function(){var e=this,t=e.resize;return t&&t.get("resizing")},_renderDrag:function(){var t=this,n=(new e.DD.Drag({node:t.cropNode})).plug(e.Plugin.DDConstrained,{constrain:t._getConstraintRegion()});n.addTarget(t),n.addHandle("."+u),t.drag=n},_renderResize:function(){var t=this,n=(new e.Resize({node:t.cropNode})).plug(e.Plugin.ResizeConstrained,{constrain:t._getConstraintRegion(),preserveRatio:t.get("preserveRatio"),minHeight:t.get("minHeight"),minWidth:t.get("minWidth")});n.addTarget(t),t.resize=n},_syncCropNodeUI:function(){var e=this;e.cropNode.setStyle("backgroundPosition",-e.get("x")+"px "+ -e.get("y")+"px")},_syncCropSize:function(){var e=this,t=e.cropNode;e.set("cropHeight",t.outerHeight()),e.set("cropWidth",t.outerWidth())},_syncRegion:function(){var e=this,t=e._getConstraintRegion(!0),n=e._origRegion;if(t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right||t.top!==n.top){var r=e.drag,i=e.resize;r&&r.con.set("constrain",t),i&&i.con.set("constrain",t),e._origRegion=t}},_syncXY:function(){var e=this,t=e.cropNode;e.set("x",s(t.getStyle("left"))+t.getBorderWidth("l")),e.set("y",s(t.getStyle("top"))+t.getBorderWidth("t"))},_uiSetCropHeight:function(e){var t=this;t.cropNode.height(e)},_uiSetCropWidth:function(e){var t=this;t.cropNode.width(e)},_uiSetDisabled:function(e){var t=this;l.superclass._uiSetDisabled.apply(t,arguments);var n=!e;t.cropNode.toggle(n),n?t._createHover():t._destroyHover()},_uiSetMinHeight:function(e){var t=this,n=t.resize;n&&n.con.set("minHeight",e)},_uiSetMinWidth:function(e){var t=this,n=t.resize;n&&n.con.set("minWidth",e)},_uiSetMovable:function(e){var t=this;t.drag.set("lock",!e)},_uiSetPreserveRatio:function(e){var t=this,n=t.resize;n&&n.con.set("preserveRatio",e)},_uiSetResizable:function(e){var t=this;e?t._stopResizeHandle&&t._stopResizeHandle.detach():t._stopResizeHandle||(t._stopResizeHandle=t.resize.on("resize:resize",function(e){e.halt()}))},_uiSetX:function(e){var t=this,n=t.cropNode;n.setStyle("left",e-n.getBorderWidth("l"))},_uiSetY:function(e){var t=this,n=t.cropNode;n.setStyle("top",e-n.getBorderWidth("t"))},_unHoverOverlay:function(){var e=this;!e._isDragging()&&!e._isResizing()&&e._boundingBox.removeClass(f)}}});e.ImageCropper=l},"3.0.3-deprecated.65"
,{requires:["resize-base","resize-constrain","dd-constrain","aui-node-base","aui-component"],skinnable:!0});
