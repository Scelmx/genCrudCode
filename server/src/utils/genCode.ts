function extractApisFromSchema(schema) {
  const apis = [];

  function scanSchema(schema) {
    if (schema.api) {
      const api = {
        name: schema.api,
        method: schema.method || 'GET',
        body: schema.body || {},
      };
      apis.push(api);
    }

    if (schema.items && Array.isArray(schema.items)) {
      schema.items.forEach((item) => {
        scanSchema(item);
      });
    }
    if (schema.component === 'crud' && schema.list) {
      scanSchema(schema.list);
    }

    // 检查表单组件中的每个字段，看是否有 API 请求
    if (schema.component === 'form' && schema.fields) {
      schema.fields.forEach((field) => {
        scanSchema(field);
      });
    }
  }

  scanSchema(schema);
  return apis;
}
