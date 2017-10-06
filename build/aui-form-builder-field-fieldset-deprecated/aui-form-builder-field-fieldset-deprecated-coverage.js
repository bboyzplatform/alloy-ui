if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-fieldset-deprecated/aui-form-builder-field-fieldset-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-fieldset-deprecated/aui-form-builder-field-fieldset-deprecated.js'] = {"path":"build/aui-form-builder-field-fieldset-deprecated/aui-form-builder-field-fieldset-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":73}}},"2":{"name":"(anonymous_2)","line":83,"loc":{"start":{"line":83,"column":21},"end":{"line":83,"column":32}}},"3":{"name":"(anonymous_3)","line":94,"loc":{"start":{"line":94,"column":21},"end":{"line":94,"column":32}}},"4":{"name":"(anonymous_4)","line":137,"loc":{"start":{"line":137,"column":17},"end":{"line":137,"column":28}}},"5":{"name":"(anonymous_5)","line":153,"loc":{"start":{"line":153,"column":26},"end":{"line":153,"column":37}}},"6":{"name":"(anonymous_6)","line":185,"loc":{"start":{"line":185,"column":30},"end":{"line":185,"column":44}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":213,"column":79}},"2":{"start":{"line":10,"column":0},"end":{"line":22,"column":69}},"3":{"start":{"line":33,"column":0},"end":{"line":206,"column":3}},"4":{"start":{"line":84,"column":16},"end":{"line":84,"column":49}},"5":{"start":{"line":95,"column":16},"end":{"line":95,"column":36}},"6":{"start":{"line":138,"column":12},"end":{"line":138,"column":32}},"7":{"start":{"line":140,"column":12},"end":{"line":144,"column":14}},"8":{"start":{"line":154,"column":12},"end":{"line":155,"column":48}},"9":{"start":{"line":157,"column":12},"end":{"line":175,"column":15}},"10":{"start":{"line":186,"column":12},"end":{"line":189,"column":82}},"11":{"start":{"line":191,"column":12},"end":{"line":199,"column":13}},"12":{"start":{"line":192,"column":16},"end":{"line":192,"column":44}},"13":{"start":{"line":194,"column":17},"end":{"line":199,"column":13}},"14":{"start":{"line":195,"column":16},"end":{"line":195,"column":40}},"15":{"start":{"line":197,"column":17},"end":{"line":199,"column":13}},"16":{"start":{"line":198,"column":16},"end":{"line":198,"column":61}},"17":{"start":{"line":201,"column":12},"end":{"line":201,"column":48}},"18":{"start":{"line":208,"column":0},"end":{"line":208,"column":54}},"19":{"start":{"line":210,"column":0},"end":{"line":210,"column":63}}},"branchMap":{"1":{"line":191,"type":"if","locations":[{"start":{"line":191,"column":12},"end":{"line":191,"column":12}},{"start":{"line":191,"column":12},"end":{"line":191,"column":12}}]},"2":{"line":191,"type":"binary-expr","locations":[{"start":{"line":191,"column":16},"end":{"line":191,"column":19}},{"start":{"line":191,"column":23},"end":{"line":191,"column":38}}]},"3":{"line":194,"type":"if","locations":[{"start":{"line":194,"column":17},"end":{"line":194,"column":17}},{"start":{"line":194,"column":17},"end":{"line":194,"column":17}}]},"4":{"line":194,"type":"binary-expr","locations":[{"start":{"line":194,"column":21},"end":{"line":194,"column":25}},{"start":{"line":194,"column":29},"end":{"line":194,"column":43}}]},"5":{"line":197,"type":"if","locations":[{"start":{"line":197,"column":17},"end":{"line":197,"column":17}},{"start":{"line":197,"column":17},"end":{"line":197,"column":17}}]},"6":{"line":197,"type":"binary-expr","locations":[{"start":{"line":197,"column":21},"end":{"line":197,"column":24}},{"start":{"line":197,"column":28},"end":{"line":197,"column":42}}]}},"code":["(function () { YUI.add('aui-form-builder-field-fieldset-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-fieldset"," */","","var L = A.Lang,","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_FIELD_LABEL = getCN('form-builder-field', 'label'),","    CSS_FORM_BUILDER_DROP_ZONE = getCN('form', 'builder', 'drop', 'zone'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_FIELDSET = '<fieldset id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE].join(' ') + '\"></fieldset>',","    TPL_LEGEND = '<legend class=\"' + CSS_FIELD_LABEL + '\"></legend>';","","/**"," * A base class for `A.FormBuilderFieldsetField`."," *"," * @class A.FormBuilderFieldsetField"," * @extends A.FormBuilderField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderFieldsetField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-fieldset-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderFieldsetField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * If `true` children are accepted.","         *","         * @attribute acceptChildren","         * @default true","         * @type Boolean","         * @readOnly","         */","        acceptChildren: {","            value: true,","            readOnly: true","        },","","        /**","         * Indicates which is the type of data for the input field.","         *","         * @attribute dataType","         * @default undefined","         */","        dataType: {","            value: undefined","        },","","        /**","         * Markup used to generate a label.","         *","         * @attribute labelNode","         */","        labelNode: {","            valueFn: function() {","                return A.Node.create(TPL_LEGEND);","            }","        },","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_FIELDSET;","            }","        }","","    },","","    /**","     * Static property used to define the UI attributes.","     *","     * @property UI_ATTRS","     * @type Array","     * @static","     */","    UI_ATTRS: ['acceptChildren', 'label', 'showLabel'],","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderField,","","    prototype: {","        CONTENT_TEMPLATE: TPL_FIELDSET,","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this;","","            return L.sub(","                instance.get('template'), {","                    id: AEscape.html(instance.get('id'))","                }","            );","        },","","        /**","         * Returns a list of property models including the `A.TextCellEditor()`","         * and `A.RadioCellEditor` models.","         *","         * @method getPropertyModel","         */","        getPropertyModel: function() {","            var instance = this,","                strings = instance.getStrings();","","            return [{","                attributeName: 'type',","                editor: false,","                name: strings.type","            }, {","                attributeName: 'label',","                editor: new A.TextCellEditor(),","                name: strings.label","            }, {","                attributeName: 'showLabel',","                editor: new A.RadioCellEditor({","                    options: {","                        'true': strings.yes,","                        'false': strings.no","                    }","                }),","                formatter: A.bind(instance._booleanFormatter, instance),","                name: strings.showLabel","            }];","        },","","        /**","         * Set the `acceptChildren` attribute on the UI.","         *","         * @method _uiSetAcceptChildren","         * @param val","         * @protected","         */","        _uiSetAcceptChildren: function(val) {","            var instance = this,","                contentBox = instance.get('contentBox'),","                dropZone = instance.get('dropZoneNode'),","                markupDropZone = contentBox.one('.' + CSS_FORM_BUILDER_DROP_ZONE);","","            if (val && !markupDropZone) {","                contentBox.append(dropZone);","            }","            else if (!val && markupDropZone) {","                markupDropZone.remove();","            }","            else if (val && markupDropZone) {","                instance.set('dropZoneNode', markupDropZone);","            }","","            instance.get('templateNode').hide();","        }","","    }","","});","","A.FormBuilderFieldsetField = FormBuilderFieldsetField;","","A.FormBuilderField.types.fieldset = A.FormBuilderFieldsetField;","","","}, '3.0.3-deprecated.65', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_sM4cyRTAl2EaEls8v8uMyw = __coverage__['build/aui-form-builder-field-fieldset-deprecated/aui-form-builder-field-fieldset-deprecated.js'];
__cov_sM4cyRTAl2EaEls8v8uMyw.s['1']++;YUI.add('aui-form-builder-field-fieldset-deprecated',function(A,NAME){__cov_sM4cyRTAl2EaEls8v8uMyw.f['1']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['2']++;var L=A.Lang,AEscape=A.Escape,getCN=A.getClassName,CSS_FIELD_LABEL=getCN('form-builder-field','label'),CSS_FORM_BUILDER_DROP_ZONE=getCN('form','builder','drop','zone'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_FIELDSET='<fieldset id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE].join(' ')+'"></fieldset>',TPL_LEGEND='<legend class="'+CSS_FIELD_LABEL+'"></legend>';__cov_sM4cyRTAl2EaEls8v8uMyw.s['3']++;var FormBuilderFieldsetField=A.Component.create({NAME:'form-builder-fieldset-field',ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},labelNode:{valueFn:function(){__cov_sM4cyRTAl2EaEls8v8uMyw.f['2']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['4']++;return A.Node.create(TPL_LEGEND);}},template:{valueFn:function(){__cov_sM4cyRTAl2EaEls8v8uMyw.f['3']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['5']++;return TPL_FIELDSET;}}},UI_ATTRS:['acceptChildren','label','showLabel'],CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderField,prototype:{CONTENT_TEMPLATE:TPL_FIELDSET,getHTML:function(){__cov_sM4cyRTAl2EaEls8v8uMyw.f['4']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['6']++;var instance=this;__cov_sM4cyRTAl2EaEls8v8uMyw.s['7']++;return L.sub(instance.get('template'),{id:AEscape.html(instance.get('id'))});},getPropertyModel:function(){__cov_sM4cyRTAl2EaEls8v8uMyw.f['5']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['8']++;var instance=this,strings=instance.getStrings();__cov_sM4cyRTAl2EaEls8v8uMyw.s['9']++;return[{attributeName:'type',editor:false,name:strings.type},{attributeName:'label',editor:new A.TextCellEditor(),name:strings.label},{attributeName:'showLabel',editor:new A.RadioCellEditor({options:{'true':strings.yes,'false':strings.no}}),formatter:A.bind(instance._booleanFormatter,instance),name:strings.showLabel}];},_uiSetAcceptChildren:function(val){__cov_sM4cyRTAl2EaEls8v8uMyw.f['6']++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['10']++;var instance=this,contentBox=instance.get('contentBox'),dropZone=instance.get('dropZoneNode'),markupDropZone=contentBox.one('.'+CSS_FORM_BUILDER_DROP_ZONE);__cov_sM4cyRTAl2EaEls8v8uMyw.s['11']++;if((__cov_sM4cyRTAl2EaEls8v8uMyw.b['2'][0]++,val)&&(__cov_sM4cyRTAl2EaEls8v8uMyw.b['2'][1]++,!markupDropZone)){__cov_sM4cyRTAl2EaEls8v8uMyw.b['1'][0]++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['12']++;contentBox.append(dropZone);}else{__cov_sM4cyRTAl2EaEls8v8uMyw.b['1'][1]++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['13']++;if((__cov_sM4cyRTAl2EaEls8v8uMyw.b['4'][0]++,!val)&&(__cov_sM4cyRTAl2EaEls8v8uMyw.b['4'][1]++,markupDropZone)){__cov_sM4cyRTAl2EaEls8v8uMyw.b['3'][0]++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['14']++;markupDropZone.remove();}else{__cov_sM4cyRTAl2EaEls8v8uMyw.b['3'][1]++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['15']++;if((__cov_sM4cyRTAl2EaEls8v8uMyw.b['6'][0]++,val)&&(__cov_sM4cyRTAl2EaEls8v8uMyw.b['6'][1]++,markupDropZone)){__cov_sM4cyRTAl2EaEls8v8uMyw.b['5'][0]++;__cov_sM4cyRTAl2EaEls8v8uMyw.s['16']++;instance.set('dropZoneNode',markupDropZone);}else{__cov_sM4cyRTAl2EaEls8v8uMyw.b['5'][1]++;}}}__cov_sM4cyRTAl2EaEls8v8uMyw.s['17']++;instance.get('templateNode').hide();}}});__cov_sM4cyRTAl2EaEls8v8uMyw.s['18']++;A.FormBuilderFieldsetField=FormBuilderFieldsetField;__cov_sM4cyRTAl2EaEls8v8uMyw.s['19']++;A.FormBuilderField.types.fieldset=A.FormBuilderFieldsetField;},'3.0.3-deprecated.65',{'requires':['aui-form-builder-field-deprecated']});
