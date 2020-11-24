<template>
  <div>
    <x-form ref="xForm" v-model="formData" :config="formConfig">
      <!-- <template #executionListener>
        <el-badge :value="executionListenerLength">
          <el-button size="small" @click="dialogName = 'executionListenerDialog'">编辑</el-button>
        </el-badge>
      </template>
      <template #signal>
        <el-badge :value="signalLength">
          <el-button size="small" @click="dialogName = 'signalDialog'">编辑</el-button>
        </el-badge>
      </template> -->
    </x-form>
    <!-- <executionListenerDialog
      v-if="dialogName === 'executionListenerDialog'"
      :element="element"
      :modeler="modeler"
      @close="finishExecutionListener"
    />
    <signalDialog
      v-if="dialogName === 'signalDialog'"
      :element="element"
      :modeler="modeler"
      @close="finishExecutionListener"
    /> -->
  </div>
</template>

<script>
import mixinPanel from '../../common/mixinPanel'
export default {
  mixins: [mixinPanel],
  data() {
    return {
      formData: {}
    }
  },
  computed: {
    formConfig() {
      const _this = this
      return {
        inline: false,
        item: [
			{
			  xType: 'input',
			  name: 'id',
			  label: '阶段 id',
			  rules: [{ required: true, message: 'Id 不能为空' }]
			},
          {
            xType: 'input',
            name: 'name',
            label: '阶段名称'
          },
          {
            xType: 'colorPicker',
            name: 'color',
			showAlpha: true,
            label: '节点颜色'
          },
        ]
      }
    }
  },
  watch: {
    
  },
  created() {
    const cache = {
      ...this.element.businessObject,
      ...this.element.businessObject.$attrs
    }
	console.log('cache',cache)
    // 移除camunda前缀，格式化数组
    for (const key in cache) {
      if (key.indexOf('camunda:') === 0) {
        const newKey = key.replace('camunda:', '')
        cache[newKey] = cache[key]
        delete cache[key]
      }
    }
    this.formData = cache
  },
  methods: {
  
  }
}
</script>

<style>

</style>
