---
title: 20. 基于东信软件封装elementUi上传功能
order: 20
comment: false
collapsible: false
date: 2024-01-01
categories: 
  - programme
  - WebFrontEnd
tags: 
  - 
columns: 
  - 

---

### **基于东信软件封装elementUi上传功能**



**upload上传：**

```javascript
<template>
  <div class="upload-bottom">
    <el-upload
      class="upload-demo"
      action="#"
      ref="upload"
      drag
      :limit="1"
      :http-request="httpRequest"
      :before-upload="uploadPreviewBottom"
      :before-remove="beforeRemoveBottom"
      :file-list="placeholder"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip"></div>
    </el-upload>
  </div>
</template>

<script>
import { filesUpload } from "@/api/management-centre/index.js";
export default {
  props: ["index", "courseWareUrl"],
  data() {
    return {
      // 附件列表
      placeholder: [],
      //中间附件存储
      fileLists: [],
    };
  },
  watch: {
    courseWareUrl: {
      deep: true,
      immediate: true,
      handler(val) {
        this.placeholder = [];
        if (val) {
          this.placeholder.push({
            name: "附件",
            url: val,
          });
        }
      },
    },
  },
  created() {},
  methods: {
    // 附件上传
    getfilesUpload() {
      let formData = new FormData();
      for (let i = 0; i < this.fileLists.length; i++) {
        formData.append("files", this.fileLists[i]);
      }
      formData.append("type", 1);
      filesUpload(formData).then((res) => {
        const attachmentUrl = [];
        res.data.forEach((item) => {
          let lastIndex = item.tempUrl.lastIndexOf("_"); // 查找最后一个斜杠的位置
          let name = item.tempUrl.slice(lastIndex + 1);
          attachmentUrl.push(name);
        });
        this.$emit("attachment", attachmentUrl, this.index);
      });
    },
    // 文件上传
    httpRequest(files) {
      console.log(files, "0===0");
      //   file类型文件组
      this.fileLists.push(files.file);
      this.getfilesUpload();
    },
    /**
     * 文件上传前的钩子
     */
    uploadPreviewBottom(file) {
      //   if (file.type != "" || file.type != null || file.type != undefined) {
      //     //截取文件的后缀，判断文件类型
      //     // const FileExt = file.name.replace(/.+\./, "").toLowerCase();
      //     const isLt50M = file.size / 1024 / 1024 > 50; //这里做文件大小限制
      //     //如果大于50M
      //     if (isLt50M) {
      //       this.$message({
      //         message: "单个文件体积不能超过 50MB!",
      //         type: "warning",
      //       });
      //       return false;
      //     }
      //   }
    },
    /**
     * 文件删除前的钩子
     */
    beforeRemoveBottom(files, fileList) {
      this.fileLists.forEach((item, index) => {
        if (item.uid === files.file.uid) {
          this.fileLists.splice(index, 1);
        }
      });
      //   var isLt5M = file.size / 1024 / 1024 < 50;
      //   // var extension = this.fileType.includes(FileExt);
      //   if (!isLt5M) {
      //     var i = fileList.indexOf(file);
      //     fileList.splice(i, 1); // 自动删除不符合要求的文件，不让它出现在预览列表中
      //     return false; // 只有return false 才会真的限制
      //   }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .el-upload-dragger {
  width: 90px;
  height: 30px;
}
</style>
```

