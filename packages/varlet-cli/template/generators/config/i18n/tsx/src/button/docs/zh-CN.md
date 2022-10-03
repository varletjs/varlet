# 按钮

### 基本使用
```html
<var-button>按钮起步</var-button>
```

```vue
import BasicUse from '../example/BasicUse'
```

### 主题色按钮
```html
<var-button color="#009688">按钮起步</var-button>
```

```vue
import ModifyColor from '../example/ModifyColor'
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |