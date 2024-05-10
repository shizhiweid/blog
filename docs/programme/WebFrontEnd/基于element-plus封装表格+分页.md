---
title: 19. 基于element-plus封装表格+分页
order: 19
comment: false
collapsible: false
date: 2024-02-01
categories: 
  - programme
  - WebFrontEnd
tags: 
  - 
columns: 
  - 

---

### **基于element-plus封装表格+分页**



**子组件：**

```javascript
<template>
  <div>
    
    <el-table :data="tableData" border >
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        width="300"
        v-for="item of table"
        :key="item.prop" 
      />
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>


<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from "vue";
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  table: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: () => 0,
  },
});
const emits = defineEmits(["pagination"]);

const currentPage = ref(1);
const pageSize = ref(10);
const small = ref(false);
const background = ref(true);
const disabled = ref(false);

const handleSizeChange = (val) => {
  emits("pagination", currentPage.value, pageSize.value);
  console.log(`${val} items per page`, pageSize.value);
};
const handleCurrentChange = (val) => {
  emits("pagination", currentPage.value, pageSize.value);
  console.log(`current page: ${val}`, currentPage.value);
};

onMounted(() => {});

const count = ref(0);
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>

```



**父组件使用：**

```javascript
<template>
  <div>
    <TablePagination
      :tableData="tableData"
      :table="table"
      :total="total"
      @pagination="pagination"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import TablePagination from "../components/table-pagination.vue";

const total = ref(0);
// 表格的prop和label属性
const table = [
  { label: "时间", prop: "date" },
  { label: "姓名", prop: "name" },
  { label: "地址", prop: "address" },
];

// 初始化分页状态
const paginationData = {
  current: 1,
  page: 10,
};
// 当前页数据
const tableData = ref([]);

/**
 * 获取分页中currentPage和pageSize
 */
const pagination = (currentPage, pageSize) => {
  paginationData.current = currentPage;
  paginationData.page = pageSize;
  console.log(paginationData);
  serveData();
};
// ----------------------------------------
// 模拟数据库总数据条数
const dataList = Array.from({ length: 50 }, (_, index) => ({
  date: `197${index + 1}`,
  name: `Tom${index + 1}`,
  address: "河南",
}));
// 模拟获取接口数据
const serveData = () => {
  total.value = dataList.length; //数据量
  //当前页数据
  tableData.value = dataList.slice(
    (paginationData.current - 1) * paginationData.page,
    (paginationData.current - 1) * paginationData.page + paginationData.page
  );
};
onMounted(() => {
  serveData();
});
</script>
<style scoped lang='less'>
</style>
```

