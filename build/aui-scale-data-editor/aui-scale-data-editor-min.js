YUI.add("aui-scale-data-editor",function(e,t){var n=e.getClassName("scale","data","editor"),r=e.getClassName("scale","data","editor","higher","value"),i=e.getClassName("scale","data","editor","lower","value");e.ScaleDataEditor=e.Base.create("scale-data-editor",e.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+n+' form-inline row">'+'<input type="text" class="'+i+' form-control"></input> - '+'<input type="text" class="'+r+' form-control"></input></div>',initializer:function(){var t=this.get("node");this.lowerInput_=t.one("."+i),this.lowerInput_.after("valuechange",e.bind(this._onLowerValueChange,this)),this.higherInput_=t.one("."+r),this.higherInput_.after("valuechange",e.bind(this._onHigherValueChange,this)),this.after("editedValueChange",this._afterEditedValueChange),this._uiSetEditedValue(this.get("editedValue"))},isEmpty:function(){return!this.get("editedValue")[0]||!this.get("editedValue")[1]},isValid:function(){return e.ScaleDataEditor.superclass.isValid.call(this)?this._filterInt(this.get("editedValue")[0])<this._filterInt(this.get("editedValue")[1]):!1},_afterEditedValueChange:function(){this._uiSetEditedValue(this.get("editedValue"))},_filterInt:function(e){return/^(\-|\+)?([0-9]+|Infinity)$/.test(e)?Number(e):NaN},_onHigherValueChange:function(){var e=this.get("editedValue");e[1]=this.higherInput_.get("value"),this.set("editedValue",e)},_onLowerValueChange:function(){var e=this.get("editedValue");e[0]=this.lowerInput_.get("value"),this.set("editedValue",e)},_setRangeValue:function(e){return e.length===0?e.push("",""):e.length===1&&e.push(""),e},_uiSetEditedValue:function(e){this.lowerInput_.set("value",e[0]),this.higherInput_.set("value",e[1])}},{ATTRS:{editedValue:{setter:"_setRangeValue",validator:e.Lang.isArray,value:[]},originalValue:{setter:"_setRangeValue",validator:e.Lang.isArray,value:[]}}})},"3.0.3-deprecated.65",{requires:["aui-classnamemanager","aui-data-editor","event-valuechange"]});
