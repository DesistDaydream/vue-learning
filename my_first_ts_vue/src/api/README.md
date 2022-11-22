#

通过在 tsconfig.json 文件中添加如下配置，以便让接口变为全局可用

```json
  "include": [
    // 导出所有接口目录到全局
    "src/api/**/*",
  ],
```
