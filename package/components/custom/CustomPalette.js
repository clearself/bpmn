/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
const SUITABILITY_SCORE_HIGH = 100,
      SUITABILITY_SCORE_AVERGE = 50,
      SUITABILITY_SCORE_LOW = 25;
export default function PaletteProvider(palette, create, elementFactory, globalConnect, bpmnFactory) {
    this.create = create
    this.elementFactory = elementFactory
    this.globalConnect = globalConnect
    this.bpmnFactory = bpmnFactory

    palette.registerProvider(this)
}

PaletteProvider.$inject = [
    'palette',
    'create',
    'elementFactory',
    'globalConnect',
    'bpmnFactory'
]

PaletteProvider.prototype.getPaletteEntries = function(element) {
    const {
        create,
        elementFactory,
        bpmnFactory
    } = this;
	function createTask(suitabilityScore) {
	  return function(event) {
	    const businessObject = bpmnFactory.create('bpmn:UserTask',{name:"会签"});
	  
	    businessObject.suitable = suitabilityScore;
	  
	    const shape = elementFactory.createShape({
	      type: 'bpmn:UserTask',
	      businessObject: businessObject
	    });
	  
	    create.start(event, shape); 
	  }
	}
    function createUserTask() {
        return function(event) {
            const businessObject = bpmnFactory.create('bpmn:UserTask',{name:"用户任务"});
            // businessObject['custom'] = 1 // 这样不行
            const shape = elementFactory.createShape({
                type: 'bpmn:UserTask',
                businessObject
            });
            const label = elementFactory.createLabel();
            console.log(shape) // 只在拖动或者点击时触发
            console.log(label) // 只在拖动或者点击时触发
            create.start(event, shape);
            // create.start(event, label);
        }
    }

    function createStratEvent() {
        return function(event) {
			 const businessObject = bpmnFactory.create('bpmn:StartEvent',{name:"开始"});
            const shape = elementFactory.createShape({
                type: 'bpmn:StartEvent',
				businessObject
			});
            create.start(event, shape);
        }
    }
	function createEndEvent() {
	    return function(event) {
			 const businessObject = bpmnFactory.create('bpmn:EndEvent',{name:"结束"});
	        const shape = elementFactory.createShape({
	            type: 'bpmn:EndEvent',
				businessObject
	        });
	        create.start(event, shape);
	    }
	}
    function createGateway() {
        return function(event) {
			const businessObject = bpmnFactory.create('bpmn:ExclusiveGateway',{name:"网关"});
            const shape = elementFactory.createShape({
                type: 'bpmn:ExclusiveGateway',
				businessObject
            });
            create.start(event, shape);
        }
    }
	function createGroup() {
	    return function(event) {
			const businessObject = bpmnFactory.create('bpmn:Group',{name:"阶段"});
	        const shape = elementFactory.createShape({
	            type: 'bpmn:Group',
				businessObject
	        });
	        create.start(event, shape);
	    }
	}
    return {
        'create.start-event': {
            group: 'event',
            className: 'bpmn-icon-start-event-none',
            title: '开始',
            action: {
                dragstart: createStratEvent(),
                click: createStratEvent()
            }
        },
		'create.end-event': {
		    group: 'event',
		    className: 'bpmn-icon-end-event-none',
		    title: '结束',
		    action: {
		        dragstart: createEndEvent(),
		        click: createEndEvent()
		    }
		},
        'create.user-task': {
            group: 'task',
            className: 'bpmn-icon-user-task',
            title: '用户任务',
            action: {
                dragstart: createUserTask(),
                click: createUserTask()
            }
        },
		'create.sign-task': {
		  group: 'activity',
		  className: 'bpmn-icon-user-task',
		  title: '会签',
		  action: {
		    dragstart: createTask(SUITABILITY_SCORE_LOW),
		    click: createTask(SUITABILITY_SCORE_LOW)
		  }
		},
        'create.exclusive-gateway': {
            group: 'gateway',
            className: 'bpmn-icon-gateway-none',
            title: '创建一个网关',
            action: {
                dragstart: createGateway(),
                click: createGateway()
            }
        },
		'create.group': {
		    group: 'group',
		    className: 'bpmn-icon-group',
		    title: '用户任务',
		    action: {
		        dragstart: createGroup(),
		        click: createGroup()
		    }
		},
    }
}