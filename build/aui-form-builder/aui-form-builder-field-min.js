AUI.add("aui-form-builder-field",function(b1){var bS=b1.Lang,aV=bS.isArray,bO=bS.isString,h="acceptChildren",e="bodyContent",aP="boundingBox",ca="builder",cg="button",I="buttons",x="buttonsNode",aF="checkbox",J="checked",o="children",cc="clearfix",aQ="close",aR="component",cl="contentBox",aJ="container",cr="dataType",cd="default",aW="delete",bD="disabled",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",b2="dropNode",bo="dropZone",a1="dropZoneNode",aD="duplicate",P="edit",bE="",bn="field",g="fields",bJ="for",q="form",bc="formBuilder",aE="form-builder-field",s="help",n="helper",at="hidden",r="icon",cb="id",ah="label",bX="labelNode",bz="lightbulb",be="metadata",aA="name",cs="node",b="panel",a8="portalLayout",aM="predefinedValue",bp="proxy",b9="readOnlyAttributes",an="required",a6="requiredFlagNode",bC="state",bl="select",aY="settings",aq="settingsFormNode",V="showLabel",au="size",W=" ",bN="string",bU="strings",ab="templateNode",bG="text",ap="textarea",u="tip",bs="tipIconNode",X="type",aC="unique",bP="zone",bh="widget",z=b1.getClassName,bk=z(aR),aI=z(bn,ah),p=z(n,cc),ad=z(n,at),bL=z(bC,cd),d=z(bn),bq=z(bn,bG),B=z(q,ca,cg),bH=z(q,ca,cg,aW),a3=z(q,ca,cg,aD),T=z(q,ca,cg,P),a2=z(q,ca,ay,cs),al=z(q,ca,ay,bP),cq=z(q,ca,r),j=z(q,ca,r,aW),w=z(q,ca,r,aD),aj=z(q,ca,r,P),E=z(q,ca,r,u),bI=z(q,ca,bn),bw=z(q,ca,bn,I),cp=z(q,ca,an),bB=z(q,ca,aC),G=z(bh),bY='<li class="'+[G,bk,bI].join(W)+'"></li>',a='<div class="'+[bw,ad].join(W)+'">'+'<a class="'+[B,T].join(W)+'" href="javascript:;" title="Edit">'+'<div class="'+[cq,aj].join(W)+'"></div>'+"</a>"+'<a class="'+[B,a3].join(W)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[cq,w].join(W)+'"></div>'+"</a>"+'<a class="'+[B,bH].join(W)+'" href="javascript:;" title="Delete">'+'<div class="'+[cq,j].join(W)+'"></div>'+"</a>"+"</div>",C='<div class="'+p+'"></div>',aa='<ul class="'+al+'"></ul>',ai='<span class="'+[d,bq].join(W)+'"></span>',a5='<label class="'+aI+'"></label>',ax='<span class="'+cp+'">*</span>',co="<p></p>",bi='<a href="javascript:;" class="'+E+'"></a>';var t=b1.Component.create({NAME:aE,ATTRS:{acceptChildren:{value:true},dataType:{value:bN},disabled:{value:false},key:{value:bE},formBuilder:{value:undefined},id:{value:bE},icon:{value:bE},label:{value:bE},name:{valueFn:function(){var A=this;return A.get(X)+(++b1.Env._uidx);}},parent:{value:null},predefinedValue:{value:bE},readOnlyAttributes:{value:[],validator:aV},required:{setter:b1.DataType.Boolean.parse,value:false},selected:{setter:b1.DataType.Boolean.parse,value:false},showLabel:{setter:b1.DataType.Boolean.parse,value:true},template:{value:bE},tip:{value:bE},type:{value:bE},unique:{setter:b1.DataType.Boolean.parse,value:false},buttonsNode:{valueFn:function(){return b1.Node.create(a);}},dropZoneNode:{valueFn:function(){return b1.Node.create(aa);}},labelNode:{valueFn:function(){return b1.Node.create(a5);}},requiredFlagNode:{valueFn:function(){return b1.Node.create(ax);}},templateNode:{valueFn:"getNode"},tipIconNode:{valueFn:function(){return b1.Node.create(bi);}}},AUGMENTS:[b1.FormBuilderFieldSupport],UI_ATTRS:[h,bD,ah,aA,aM,an,V,u,aC],HTML_PARSER:{buttonsNode:bK+bw,dropZoneNode:bK+al,labelNode:ah+bK+aI,requiredFlagNode:bK+cp,tipIconNode:bK+E},prototype:{BOUNDING_TEMPLATE:bY,initializer:function(){var A=this;A.get(aP).setData(bn,A);A.toolTip=new b1.Tooltip({trigger:A.get(bs),hideDelay:100});},bindUI:function(){var A=this;},renderUI:function(){var A=this;var cw=A.get(aP);var cz=A.get(x);var L=A.get(cl);var cv=A.get(bX);var cy=A.get(a6);var cx=A.get(ab);var cu=A.get(bs);L.addClass(p);cw.prepend(cz);L.append(cv);L.append(cy);L.append(cu);L.append(cx);A.toolTip.render();},settingsNodesMap:{},saveSettings:function(){var A=this;var L=A.get(bc);var cu=L.get(aq);b1.Array.each(b1.io._serialize(cu._node).split("&"),function(cw){var cv=cw.split("=");A.set(cv[0],decodeURIComponent(cv[1]));});},renderSettings:function(){var cC=this;var cy=cC.get(bc);var A=cy.get(aq);var cD=cy.get(bU);var cv=cC.settingsNodesMap;if(!cC.fieldSettingsNode){cC.fieldSettingsNode=b1.Node.create(C);var cA=b1.Node.create(C);var cw=b1.Node.create(ai);var L=b1.Node.create(a5);var cB=b1.Node.create(co);L.setContent(cD[X]);cB.setContent(cC.get(cr)||cC.get(X));cw.append(L);cw.append(cB);cw.appendTo(cA);cC._renderSettingsFields([{type:"text",name:ah,labelText:"Label",value:cC.get(ah)},{type:"checkbox",name:V,labelText:"Show label",labelAlign:"left",value:cC.get(V)},{type:"text",name:aA,labelText:"Name",value:cC.get(aA)},{type:"checkbox",name:an,labelText:"Required",labelAlign:"left",value:an},{type:"text",name:aM,labelText:"Default value",value:cC.get(aM)},{type:"textarea",name:u,labelText:"Tip",value:cC.get(u)}],cA);var cx=cv.labelSettingNode;cx.on({input:b1.bind(cC._onLabelInput,cC)});var cz=cv.showLabelSettingNode;cz.set(J,cC.get(V));cz.on({change:b1.bind(cC._onSettingsFieldChange,cC)});var cu=cv.requiredSettingNode;cu.set(J,cC.get(an));cu.on({change:b1.bind(cC._onSettingsFieldChange,cC)});cC.propertiesPanel=new b1.Panel({bodyContent:cA,collapsible:true,title:"Properties"}).render();cC.fieldSettingsNode.append(cC.propertiesPanel.get(aP));}A.setContent(cC.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelInput:function(L){var A=this;var cv=L.target;var cu=cv.val();A.set(ah,cu);},_onSettingsFieldChange:function(L){var A=this;var cv=L.target;var cu=cv.val();if(cv.get(X)===aF){cu=cv.get(J);}A.set(cv.get(aA),cu);},_renderSettingsFields:function(L,cv){var A=this;var cu=A.get(b9);b1.each(L,function(cx){var cy;if(b1.Array.indexOf(cu,cx.name)>-1){cx.disabled=true;}if(cx.type===bl){cy=new b1.Select(cx);}else{if(cx.type===ap){cy=new b1.Textarea(cx);}else{cy=new b1.Field(cx);}}cy.render(cv);var cw=cy.get(cs);if(cx.type===aF){cw.set(J,cx.value);}A.settingsNodesMap[cx.name+"SettingNode"]=cw;});},_uiSetAcceptChildren:function(cw){var A=this;var L=A.get(aP);var cv=A.get(a1);var cu=L.one(bK+al);if(cw&&!cu){L.append(cv);}else{if(!cw&&cu){cu.remove();
}else{if(cw&&cu){A.set(a1,cu);}}}},_uiSetDisabled:function(cu){var A=this;var L=A.get(ab);if(cu){L.setAttribute(bD,cu);}else{L.removeAttribute(bD);}},_uiSetLabel:function(cu){var A=this;var L=A.get(bX);L.setContent(cu);},_uiSetName:function(cu){var A=this;var L=A.get(ab);L.set(aA,cu);},_uiSetPredefinedValue:function(cu){var A=this;var L=A.get(ab);L.val(cu);},_uiSetRequired:function(cu){var A=this;var L=A.get(a6);L.toggleClass(ad,!cu);},_uiSetShowLabel:function(cu){var A=this;var L=A.get(bX);L.toggleClass(ad,!cu);},_uiSetTip:function(cu){var A=this;var L=A.get(bs);L.toggleClass(ad,!cu);A.toolTip.set(e,cu);},_uiSetUnique:function(cu){var A=this;var L=A.get(aP);var cv=A.get(x);L.toggleClass(bB,cu);cv.one(bK+a3).toggleClass(ad,cu);}}});b1.FormBuilderField=t;b1.FormBuilder.types["field"]=b1.FormBuilderField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);},a4=function(A){return(A instanceof b1.NodeList);},a7=b1.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aP="boundingBox",cg="button",ce="buttonType",cl="contentBox",aJ="container",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",bQ="form-builder-button-field",cb="id",r="icon",aZ="input",ah="label",aA="name",cs="node",Q="option",ac="options",a8="portalLayout",aM="predefinedValue",bp="proxy",bM="reset",bd="selected",bT="selectedIndex",aw="submit",W=" ",bU="strings",aG="template",ab="templateNode",bG="text",X="type",m="value",z=b1.getClassName,br=z(bn,aZ),O=z(bn,aZ,bG),bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),bF='<input id="{id}" class="'+[b4,br].join(W)+'" name="{name}" type="{type}" value="{value}" />',ct=[aw,bM,cg];var b3=b1.Component.create({NAME:bQ,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:aw,validator:function(A){return b1.Array(ct).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:a7(aw)},showLabel:{value:false},template:{valueFn:function(){return bF;}}},UI_ATTRS:b1.FormBuilderField.UI_ATTRS.concat([ce]),CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{getHTML:function(){var A=this;var cw=A.get(aG);var cy=A.get(cb);var cv=A.get(ah);var cu=A.get(aA);var L=A.get(ce);var cx=A.get(aM);return b1.substitute(cw,{id:cy,label:cv,name:cu,type:L,value:cx});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var cA=this;var cx=cA.get(bc);var A=cx.get(aq);var cw=cA.get(ce);var cB=cx.get(bU);var cv=cA.settingsNodesMap;b1.FormBuilderButtonField.superclass.renderSettings.apply(cA,arguments);if(!cA._renderedButtonSettings){cA._renderedButtonSettings=true;var L=cA.propertiesPanel.get(e);var cz=[];b1.each(ct,function(cC){cz.push({labelText:cB[cC],value:cC});});cA._renderSettingsFields([{labelText:"Button type",name:ce,options:cz,type:"select"}],L.item(0));var cy=cv["buttonTypeSettingNode"];cy.on({change:b1.bind(cA._onButtonTypeChange,cA)});var cu=b1.Array(ct).indexOf(cw);cy.all(Q).item(cu).set(bd,true);}},_onButtonTypeChange:function(L){var A=this;var cu=L.target;A.set(ce,cu.get(m));},_uiSetButtonType:function(cu){var A=this;var L=A.get(ab);L.setAttribute(X,cu);}}});b1.FormBuilderButtonField=b3;b1.FormBuilder.types["button"]=b1.FormBuilderButtonField;var bS=b1.Lang,aV=bS.isArray,aX=bS.isBoolean,az=bS.isNumber,bO=bS.isString,aT="boolean",aP="boundingBox",e="bodyContent",aF="checkbox",J="checked",av="choice",cl="contentBox",aJ="container",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",ci="form-builder-checkbox-field",cb="id",r="icon",bg="inline",ah="label",c="labels",aA="name",cs="node",R="parentNode",a8="portalLayout",aM="predefinedValue",bp="proxy",au="size",W=" ",aG="template",ab="templateNode",m="value",z=b1.getClassName,d=z(bn),am=z(bn,aF),bZ=z(bn,av),bI=z(aE),cj=z(aE,aF),b4=z(aE,cs),bL=z(bC,cd),bV=z(bn,c,bg),bY='<li class="'+[G,bk,bI,cj].join(W)+'"></li>',aS='<input id="{id}" class="'+[b4,d,am,bZ].join(W)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var Z=b1.Component.create({NAME:ci,ATTRS:{dataType:{value:aT},predefinedValue:{setter:b1.DataType.Boolean.parse,value:false},template:{valueFn:function(){return aS;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{BOUNDING_TEMPLATE:bY,bindUI:function(){var A=this;b1.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.get(ab);L.on({"change":b1.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.get(cl);var cv=A.get(ab);var cu=A.get(bX);b1.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);cu.insert(cv,cu,"before");},getHTML:function(){var A=this;var cv=A.get(aG);var cw=A.get(J);var cy=A.get(cb);var cu=A.get(ah);var L=A.get(aA);var cx=A.get(aM);return b1.substitute(cv,{checked:cw?'checked="checked"':bE,id:cy,label:cu,name:L,value:cx});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(bc);var cv=L.get(aq);var cw=A.settingsNodesMap;b1.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedCheckboxSettings){A._renderedCheckboxSettings=true;cw.predefinedValueSettingNode.get(R).remove();var cu=A.propertiesPanel.get(e);A._renderSettingsFields([{type:"checkbox",name:aM,labelText:"Checked",labelAlign:"left"}],cu.item(0));var cx=cw.predefinedValueSettingNode;cx.on({change:b1.bind(A._onValueChange,A)});cx.set(J,A.get(aM));}},_onValueChange:function(L){var A=this;var cu=L.target;A.set(aM,cu.get(J));},_uiSetPredefinedValue:function(cw){var A=this;var L=A.get(ab);var cu=A.settingsNodesMap;var cv=cu.predefinedValueSettingNode;if(cv){cv.set(J,cw);}L.set(J,cw);}}});b1.FormBuilderCheckBoxField=Z;b1.FormBuilder.types["checkbox"]=b1.FormBuilderCheckBoxField;
var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);},a4=function(A){return(A instanceof b1.NodeList);},aP="boundingBox",cl="contentBox",aJ="container",cr="dataType",bK=".",ay="drop",bE="",bn="field",g="fields",aE="form-builder-field",F="form-builder-fieldset-field",cb="id",r="icon",ah="label",aA="name",cs="node",aM="predefinedValue",W=" ",bU="strings",aG="template",ab="templateNode",bG="text",X="type",m="value",bP="zone",z=b1.getClassName,bI=z(aE),b4=z(aE,cs),al=z(q,ca,ay,bP),aL='<fieldset id="{id}" class="'+[b4].join(W)+'"></fieldset>',k='<legend class="'+aI+'"></legend>';var y=b1.Component.create({NAME:F,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},template:{valueFn:function(){return aL;}},labelNode:{valueFn:function(){return b1.Node.create(k);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[h,ah,V],CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{CONTENT_TEMPLATE:aL,renderUI:function(){var A=this;var cv=A.get(aP);var cx=A.get(x);var L=A.get(cl);var cu=A.get(bX);var cw=A.get(ab);if(!cv.contains(cx)){cv.prepend(cx);}if(!L.contains(cu)){L.append(cu);}},getHTML:function(){var A=this;var L=A.get(aG);var cu=A.get(cb);return b1.substitute(L,{id:cu});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var cB=this;var cx=cB.get(bc);var A=cx.get(aq);var cC=cx.get(bU);var cu=cB.settingsNodesMap;if(!cB._renderedFieldsetSettings){cB._renderedFieldsetSettings=true;cB.fieldSettingsNode=b1.Node.create(C);var cz=b1.Node.create(C);var cv=b1.Node.create(ai);var L=b1.Node.create(a5);var cA=b1.Node.create(co);L.setContent(cC[X]);cA.setContent(cB.get(cr)||cB.get(X));cv.append(L);cv.append(cA);cv.appendTo(cz);cB._renderSettingsFields([{type:"text",name:ah,labelText:"Label",value:cB.get(ah)},{type:"checkbox",name:V,labelText:"Show label",labelAlign:"left",value:cB.get(V)}],cz);var cw=cu["labelSettingNode"];cw.on({input:b1.bind(cB._onLabelInput,cB)});var cy=cu["showLabelSettingNode"];cy.set(J,cB.get(V));cy.on({change:b1.bind(cB._onSettingsFieldChange,cB)});cB.propertiesPanel=new b1.Panel({bodyContent:cz,collapsible:true,title:"Properties"}).render();cB.fieldSettingsNode.append(cB.propertiesPanel.get(aP));}A.setContent(cB.fieldSettingsNode);},_uiSetAcceptChildren:function(cw){var A=this;var L=A.get(cl);var cv=A.get(a1);var cu=L.one(bK+al);if(cw&&!cu){L.append(cv);}else{if(!cw&&cu){cu.remove();}else{if(cw&&cu){A.set(a1,cu);}}}}}});b1.FormBuilderFieldsetField=y;b1.FormBuilder.types["fieldset"]=b1.FormBuilderFieldsetField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);},a4=function(A){return(A instanceof b1.NodeList);},aP="boundingBox",cl="contentBox",aJ="container",cr="dataType",bK=".",bE="",bn="field",g="fields",aE="form-builder-field",ck="form-builder-file-upload-field",cb="id",r="icon",ah="label",aA="name",cs="node",aM="predefinedValue",W=" ",bU="strings",aG="template",ab="templateNode",bG="text",X="type",m="value",z=b1.getClassName,bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),by='<input id="{id}" class="'+[b4].join(W)+'" name="{name}" type="file" value="{value}" />';var K=b1.Component.create({NAME:ck,ATTRS:{template:{valueFn:function(){return by;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{getHTML:function(){var A=this;var cw=A.get(aG);var cy=A.get(cb);var cu=A.get(ah);var L=A.get(aA);var cv=A.get(au);var cx=A.get(aM);return b1.substitute(cw,{id:cy,label:cu,name:L,value:cx});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var cC=this;var cy=cC.get(bc);var A=cy.get(aq);var cD=cy.get(bU);var cv=cC.settingsNodesMap;if(!cC._renderedFileUploadSettings){cC._renderedFileUploadSettings=true;cC.fieldSettingsNode=b1.Node.create(C);var cA=b1.Node.create(C);var cw=b1.Node.create(ai);var L=b1.Node.create(a5);var cB=b1.Node.create(co);L.setContent(cD[X]);cB.setContent(cC.get(cr)||cC.get(X));cw.append(L);cw.append(cB);cw.appendTo(cA);cC._renderSettingsFields([{type:"text",name:ah,labelText:"Label",value:cC.get(ah)},{type:"checkbox",name:V,labelText:"Show label",labelAlign:"left",value:cC.get(V)},{type:"text",name:aA,labelText:"Name",value:cC.get(aA)},{type:"checkbox",name:an,labelText:"Required",labelAlign:"left",value:cC.get(an)},{type:"textarea",name:u,labelText:"Tip",value:cC.get(u)}],cA);var cx=cv.labelSettingNode;cx.on({input:b1.bind(cC._onLabelInput,cC)});var cz=cv.showLabelSettingNode;cz.set(J,cC.get(V));cz.on({change:b1.bind(cC._onSettingsFieldChange,cC)});var cu=cv.requiredSettingNode;cu.set(J,cC.get(an));cu.on({change:b1.bind(cC._onSettingsFieldChange,cC)});cC.propertiesPanel=new b1.Panel({bodyContent:cA,collapsible:true,title:"Properties"}).render();cC.fieldSettingsNode.append(cC.propertiesPanel.get(aP));}A.setContent(cC.fieldSettingsNode);}}});b1.FormBuilderFileUploadField=K;b1.FormBuilder.types["fileupload"]=b1.FormBuilderFileUploadField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);},a4=function(A){return(A instanceof b1.NodeList);},a7=b1.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),S="add",bR="addNode",aP="boundingBox",cg="button",ce="buttonType",cl="contentBox",aJ="container",cd="default",ar="defaultLabel",cm="defaultOptions",D="defaultValue",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",M="form-builder-multiple-choice-field",r="icon",cb="id",aZ="input",ag="item",ah="label",cf="multiple",aA="name",cs="node",Q="option",bx="optionTemplate",ac="options",aM="predefinedValue",bp="proxy",cn="remove",bM="reset",aw="submit",W=" ",aG="template",ab="templateNode",bG="text",X="type",m="value",z=b1.getClassName,br=z(bn,aZ),O=z(bn,aZ,bG),l=z(bn,ac,S),b7=z(bn,ac,ag),b6=z(bn,ac,ag,aZ),aN=z(bn,ac,ag,aZ,ah),ae=z(bn,ac,ag,aZ,m),a9=z(bn,ac,ag,cn),bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),ao='<div class="'+[b7,bV,p].join(W)+'">'+'<input type="text" class="'+[b6,aN,br,O].join(W)+'" value="{label}" />'+'<input type="text" class="'+[b6,ae,br,O].join(W)+'" value="{value}" />'+'<a href="javascript:;" class="'+a9+'">&nbsp;</a>'+"</div>";
TPL_ADD='<a class="'+l+'" href="javascript:;">Add an option</a>',ENTER="ENTER";var bj=b1.Component.create({NAME:ac,ATTRS:{allowClear:{value:false},defaultLabel:{value:bE},defaultValue:{value:bE},disabled:{value:false,validator:aX},options:{value:[],getter:"_getOptions",validator:aV},addNode:{valueFn:function(){return b1.Node.create(TPL_ADD);}}},HTML_PARSER:{addNode:bK+l},UI_ATTRS:[ac,bD],EXTENDS:b1.Widget,prototype:{renderUI:function(){var A=this;var L=A.get(aP);var cu=A.get(bR);if(!cu.inDoc()){L.append(cu);}},bindUI:function(){var A=this;var L=A.get(aP);var cu=A.get(bR);cu.on("click",b1.bind(A._onClickAdd,A));L.delegate("click",b1.bind(A._onClickOptionRemove,A),bK+a9);L.delegate("keypress",b1.bind(A._onKeyPressOption,A),bK+b6);},add:function(cu){var A=this;var L=A.get(ac);L.push(cu);A.set(ac,L);},clear:function(){var A=this;if(A.get(ALLOW_CLEAR)){A.set(ac,[]);}},remove:function(cu){var A=this;var L=A.get(cl);var cv=A._getOptionNode(cu);if(A.get(bD)){return false;}if(cv){cv.remove();}A.items=L.all(bK+b7);},_addNewOption:function(){var L=this;var cu=L.get(cl);if(L.get(bD)){return false;}var cv=L._createOption({label:L.get(ar),value:L.get(D)});cv=b1.Node.create(cv);cu.append(cv);var A=cv.one(aZ);A.focus();A.select();L.items=cu.all(bK+b7);return cv;},_createOption:function(L){var A=this;return b1.substitute(ao,L);},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(cu){var A=this;var L=[];if(A.items){b1.each(A.items,function(cv){var cx=cv.one(bK+aN);var cw=cv.one(bK+ae);L.push({label:cx.val(),value:cw.val()});});}else{L=cu;}return L;},_indexOfTarget:function(cu){var A=this;var L=cu.ancestor(bK+b7);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(cv){var A=this;var cu=A.get(ac);var L=A._indexOfTarget(cv.target);A.remove(L);},_onKeyPressOption:function(cw){var A=this;var cv=A.get(ac);var cx=cw.currentTarget;var L=A.items;if(cw.isKey(ENTER)){var cu=A._indexOfTarget(cx);var cy=cx.hasClass(ae);if((cu==L.size()-1)&&cy){A._addNewOption();}}},_uiSetDisabled:function(cv){var A=this;var cu=A.get(bR);var L=A.get(aP);cu.toggleClass(ad,cv);L.all(bK+a9).toggleClass(ad,cv);if(cv){L.all(aZ).setAttribute(bD,cv);}else{L.all(aZ).removeAttribute(bD);}},_uiSetOptions:function(cv){var A=this;var cu=[];var L=A.get(cl);L.empty();b1.each(cv,function(cw){L.append(A._createOption(cw));});A.items=L.all(bK+b7);}}});var f=b1.Component.create({NAME:M,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'}},UI_ATTRS:[h,aM,ah,aA,ac,V],CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{getNode:function(){var A=this;return b1.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;var L=A.get(b9);b1.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var cv=b1.Node.create(C);A.optionsPanel=new b1.Panel({bodyContent:cv,collapsible:true,title:"Options"}).render();var cu=b1.Array.indexOf(L,ac)>-1;A.options=new bj({disabled:cu,options:A.get(ac)}).render(cv);A.fieldSettingsNode.append(A.optionsPanel.get(aP));}},saveSettings:function(){var A=this;b1.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(ac,A.options.get(ac));},_uiSetOptions:function(cu){var A=this;var L=A.get(ab);L.empty();b1.each(cu,function(cv){L.append(b1.substitute(A.get(bx),cv));});}}});b1.FormBuilderMultipleChoiceField=f;b1.FormBuilder.types["multiple-choice"]=b1.FormBuilderMultipleChoiceField;var bS=b1.Lang,aV=bS.isArray,aX=bS.isBoolean,az=bS.isNumber,bO=bS.isString,aP="boundingBox",e="bodyContent",J="checked",av="choice",cl="contentBox",aJ="container",bK=".",bE="",bn="field",g="fields",aE="form-builder-field",ba="form-builder-radio-field",cb="id",r="icon",bg="inline",ah="label",c="labels",aA="name",cs="node",H="optionsContainerNode",aM="predefinedValue",U="radio",au="size",W=" ",aG="template",ab="templateNode",m="value",z=b1.getClassName,d=z(bn),bZ=z(bn,av),bI=z(aE),aO=z(aE,U),b4=z(aE,cs),b5=z(aE,ac,aJ),bL=z(bC,cd),bV=z(bn,c,bg),bY='<li class="'+[G,bk,bI,aO].join(W)+'"></li>',Y='<div class="'+b5+'"></div>',aU='<input id="{id}" class="'+[b4,d,bZ].join(W)+'" name="{name}" type="radio" value="{value}" {checked} />',b8='<input type="hidden" />';var i=b1.Component.create({NAME:ba,ATTRS:{name:{value:U},optionTemplate:{value:aU},template:{valueFn:function(){return aU;}},optionsContainerNode:{valueFn:function(){return b1.Node.create(Y);}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bI,HTML_PARSER:{optionsContainerNode:bK+b5,templateNode:bK+b4},EXTENDS:b1.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:bY,renderUI:function(){var A=this;var L=A.get(cl);var cu=A.get(H);b1.FormBuilderRadioField.superclass.renderUI.apply(A,arguments);L.append(cu);},getNode:function(){var A=this;return b1.Node.create(b8);},_onFieldChange:function(L){var A=this;var cu=L.target;A.set(aM,cu.val());},_uiSetDisabled:function(cu){var A=this;var L=A.get(H);L.all(aZ).each(function(cv){if(cu){cv.setAttribute(bD,cu);}else{cv.removeAttribute(bD);}});},_uiSetOptions:function(cw){var A=this;var L=A.get(cl);var cv=A.get(H);var cu=A.get(ab);cv.empty();b1.each(cw,function(cz){var cy=new b1.Field({type:U,disabled:A.get(bD),name:A.get(aA),labelText:cz.label,labelAlign:"left",value:cz.value}).render(cv);var cx=cy.get(cs);if(cz.value==A.get(aM)){cx.set(J,true);}if(A.get(bD)){cx.setAttribute(bD,cw);}else{cx.removeAttribute(bD);}cx.on({change:b1.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(cw){var A=this;var L=A.get(bc);var cu=L.get(aq);var cv=cu.one("input[name=predefinedValue]");if(cv){cv.val(cw);}}}});b1.FormBuilderRadioField=i;b1.FormBuilder.types["radio"]=b1.FormBuilderRadioField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);
},a4=function(A){return(A instanceof b1.NodeList);},a7=b1.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aP="boundingBox",cg="button",ce="buttonType",cl="contentBox",aJ="container",cm="defaultOptions",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",b0="form-builder-select-field",cb="id",r="icon",aZ="input",ah="label",cf="multiple",aA="name",cs="node",Q="option",ac="options",a8="portalLayout",aM="predefinedValue",bp="proxy",bM="reset",bT="selectedIndex",aw="submit",W=" ",aG="template",ab="templateNode",bG="text",X="type",m="value",z=b1.getClassName,br=z(bn,aZ),O=z(bn,aZ,bG),bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),bA='<select id="{id}" class="'+[b4].join(W)+'" name="{name}" value="{value}"></select>';var af=b1.Component.create({NAME:b0,ATTRS:{multiple:{setter:b1.DataType.Boolean.parse,value:false},template:{valueFn:function(){return bA;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:b1.FormBuilderField.UI_ATTRS.concat([cf]),CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var cv=A.get(aG);var cx=A.get(cb);var cu=A.get(ah);var L=A.get(aA);var cw=A.get(aM);return b1.substitute(cv,{id:cx,label:cu,name:L,value:cw});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cu=L.get(bc);var cw=cu.get(aq);var cx=L.settingsNodesMap;b1.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var cv=L.propertiesPanel.get(e);L._renderSettingsFields([{type:"checkbox",name:cf,labelText:"Multiple",labelAlign:"left"}],cv.item(0));var A=cx["multipleSettingNode"];A.on({change:b1.bind(L._onSettingsFieldChange,L)});A.set(J,L.get(cf));}},_uiSetMultiple:function(cu){var A=this;var L=A.get(ab);if(cu){L.setAttribute(cf,cf);}else{L.removeAttribute(cf);}}}});b1.FormBuilderSelectField=af;b1.FormBuilder.types["select"]=b1.FormBuilderSelectField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,bt=function(A){return(A instanceof b1.Node);},a4=function(A){return(A instanceof b1.NodeList);},aP="boundingBox",cl="contentBox",aJ="container",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",a0="form-builder-input-field",cb="id",r="icon",aZ="input",ah="label",aA="name",cs="node",a8="portalLayout",aM="predefinedValue",bp="proxy",W=" ",aG="template",ab="templateNode",bG="text",m="value",bv="width",z=b1.getClassName,br=z(bn,aZ),O=z(bn,aZ,bG),bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),bF='<input id="{id}" class="'+[b4,br,O].join(W)+'" name="{name}" type="text" value="{value}" />',aH={small:25,medium:50,large:100};var bu=b1.Component.create({NAME:a0,ATTRS:{template:{valueFn:function(){return bF;}},templateNode:{valueFn:"getNode"},width:{setter:b1.DataType.String.evaluate,value:25}},CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderField,prototype:{bindUI:function(){var A=this;b1.FormBuilderTextField.superclass.bindUI.apply(A,arguments);var L=A.get(ab);L.on({input:b1.bind(A._onValueInput,A)});},getHTML:function(){var A=this;var cw=A.get(aG);var cy=A.get(cb);var cu=A.get(ah);var L=A.get(aA);var cx=A.get(aM);var cv=A.get(bv);return b1.substitute(cw,{id:cy,label:cu,name:L,value:cx,width:cv});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());},renderSettings:function(){var cA=this;var cz=cA.get(bc);var cu=cz.get(aq);var cy=cA.settingsNodesMap;var cB=cz.get(bU);b1.FormBuilderTextField.superclass.renderSettings.apply(cA,arguments);if(!cA._renderedInputSettings){cA._renderedInputSettings=true;var cw=cA.propertiesPanel.get(e);var A=0;var cx=-1;var cv=[];b1.each(aH,function(cE,cD){if(cE==cA.get(bv)){cx=A;}cv.push({labelText:cB[cD],value:cE});A++;});cA._renderSettingsFields([{labelText:"Width",name:bv,options:cv,type:"select",value:cA.get(bv)}],cw.item(0));var L=cy["predefinedValueSettingNode"];L.on({input:b1.bind(cA._onValueInput,cA)});var cC=cy["widthSettingNode"];cC.on({change:b1.bind(cA._onWidthChange,cA)});cC.all(Q).item(cx).set(bd,true);}},_onValueInput:function(L){var A=this;var cu=L.target;A.set(aM,cu.val());},_onWidthChange:function(L){var A=this;var cu=L.target;A.set(bv,cu.val());},_uiSetWidth:function(cu){var A=this;var L=A.get(ab);L.addClass(z("w"+cu));L.removeClass(z("w"+A.prevWidth));A.prevWidth=cu;}}});b1.FormBuilderTextField=bu;b1.FormBuilder.types["text"]=b1.FormBuilderTextField;var bS=b1.Lang,aV=bS.isArray,az=bS.isNumber,bO=bS.isString,aP="boundingBox",cl="contentBox",aJ="container",bK=".",bb="drag",aB="dragContainer",v="dragContainerNode",bW="dragNodesList",ay="drop",bf="dropContainer",bm="dropContainerNode",bE="",bn="field",g="fields",aE="form-builder-field",ch="form-builder-textarea-field",cb="id",r="icon",ah="label",aA="name",cs="node",a8="portalLayout",aM="predefinedValue",bp="proxy",au="size",W=" ",aG="template",ab="templateNode",bG="text",ap="textarea",m="value",z=b1.getClassName,d=z(bn),bq=z(bn,bG),N=z(bn,ap),bI=z(aE),b4=z(aE,cs),bL=z(bC,cd),ak='<textarea id="{id}" class="'+[b4,d,bq,N].join(W)+'" name="{name}">{value}</textarea>';var aK=b1.Component.create({NAME:ch,ATTRS:{template:{valueFn:function(){return ak;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bI,HTML_PARSER:{templateNode:bK+b4},EXTENDS:b1.FormBuilderTextField,prototype:{getHTML:function(){var A=this;var cw=A.get(aG);var cy=A.get(cb);var cu=A.get(ah);var L=A.get(aA);var cv=A.get(au);var cx=A.get(aM);return b1.substitute(cw,{id:cy,label:cu,name:L,value:cx});},getNode:function(){var A=this;return b1.Node.create(A.getHTML());}}});b1.FormBuilderTextAreaField=aK;b1.FormBuilder.types["textarea"]=b1.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","aui-tooltip","io","substitute"],skinnable:true});