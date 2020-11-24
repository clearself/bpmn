import xcrud from 'xcrud'
import golbalConfig from 'xcrud/package/common/config'
import showConfig from '../flowable/showConfig'
golbalConfig.set({
  input: {
    // size: 'mini'
  },
  select: {
    // size: 'mini'
  },
  colorPicker: {
    showAlpha: true
  },
  xform: {
    form: {
      labelWidth: 'auto'
      // size: 'mini'
    }
  }
})
export default {
  components: { xForm: xcrud.xForm },
  props: {
    modeler: {
      type: Object,
      required: true
    },
    element: {
      type: Object,
      required: true
    },
    categorys: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    'formData.id': function(val) {
      this.updateProperties({ id: val })
    },
    'formData.name': function(val) {
      this.updateProperties({ name: val })
    },
    'formData.color': function(val) {
      this.setColor({ fill: val, stroke: val })
      this.updateProperties({ color: val })
    },
	'formData.documentation': function (val) {
            if (val) {
                const documentation = this.modeler.get('moddle').create('bpmn:Documentation', {text: val});
				console.log('documentation',documentation)
                const newObjectList = []
                newObjectList.push(documentation)
                this.updateProperties({documentation : newObjectList})
            } else {
                this.updateProperties({documentation : undefined})
            }
        }
  },
  methods: {
    updateProperties(properties) {
      const modeling = this.modeler.get('modeling')
      modeling.updateProperties(this.element, properties)
    },
    setColor(properties) {
      const modeling = this.modeler.get('modeling')
      modeling.setColor(this.element, properties)
    },
	getDocumentation(){
	    const documentations = this.element.businessObject?.documentation
	    const text = (documentations && documentations.length > 0) ? documentations[0].text : ''
	    return text
	},
  },
  computed: {
    elementType() {
      const bizObj = this.element.businessObject
	  console.log('bizObj.eventDefinitions',bizObj.eventDefinitions)
      return bizObj.eventDefinitions
        ? bizObj.eventDefinitions[0].$type
        : bizObj.$type
    },
    showConfig() {
		console.log('this.elementType',this.elementType)
      return showConfig[this.elementType] || {}
    }
  }
}
