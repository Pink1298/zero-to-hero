# Component Library - Tư duy Lego

Một thư viện component reusable được thiết kế theo nguyên tắc **Modularity**, **Reusability**, và **Composability** - giống như xếp hình Lego!

## 🧱 Nguyên tắc Thiết kế

### 1. Modularity (Tính Mô-đun)
Mỗi component là một module độc lập, có thể:
- Phát triển riêng biệt
- Test độc lập
- Bảo trì dễ dàng
- Không phụ thuộc vào các component khác

### 2. Reusability (Tính Tái Sử Dụng)
Một component có thể sử dụng ở nhiều nơi khác nhau:
- Cùng một component, khác nhau props → khác nhau output
- Giảm code duplication
- Tăng tính nhất quán của giao diện

### 3. Composability (Tính Ghép Nối)
Các component nhỏ có thể kết hợp lại thành UI phức tạp:
- Button + Card + Badge = Product Card
- Alert + Progress + Button = Status Panel
- Vô hạn khả năng kết hợp

## 📦 Các Component Có Sẵn

### Button
Button component với nhiều variant, size, và state.

```tsx
import { Button } from '@/components';

// Variants: primary, secondary, tertiary, danger, success, warning
<Button variant="primary">Click me</Button>

// Sizes: sm, md, lg
<Button size="lg">Large Button</Button>

// States
<Button disabled>Disabled</Button>
```

**Props:**
- `variant?`: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning'
- `size?`: 'sm' | 'md' | 'lg'
- `disabled?`: boolean
- `onClick?`: () => void

### Card
Container để chứa content với nhiều style options.

```tsx
import { Card } from '@/components';

// Variants: default, highlighted, gradient, minimal
<Card variant="highlighted">
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>

// Paddings: sm, md, lg
<Card padding="lg">Large padding card</Card>
```

**Props:**
- `variant?`: 'default' | 'highlighted' | 'gradient' | 'minimal'
- `padding?`: 'sm' | 'md' | 'lg'

### Badge
Badge để hiển thị status, tags, hoặc count nhỏ gọn.

```tsx
import { Badge } from '@/components';

<Badge color="emerald">Success</Badge>
<Badge color="red" size="sm">Error</Badge>
```

**Props:**
- `color?`: 'blue' | 'emerald' | 'orange' | 'red' | 'purple' | 'slate'
- `size?`: 'sm' | 'md'

### Alert
Alert component để hiển thị thông báo.

```tsx
import { Alert } from '@/components';

<Alert type="info" title="Information">
  This is an info message
</Alert>

<Alert type="error" onClose={() => {}}>
  An error occurred
</Alert>
```

**Props:**
- `type?`: 'info' | 'success' | 'warning' | 'error'
- `title?`: string
- `onClose?`: () => void

### Progress
Progress bar để hiển thị tiến trình.

```tsx
import { Progress } from '@/components';

<Progress value={65} color="emerald" />
<Progress value={45} showLabel={false} />
```

**Props:**
- `value`: number (0-100)
- `max?`: number (default: 100)
- `color?`: 'blue' | 'emerald' | 'orange' | 'red' | 'purple'
- `showLabel?`: boolean (default: true)
- `animated?`: boolean (default: true)

## 🎨 Thí Dụ Composability

### Product Card
```tsx
<Card variant="highlighted">
  <div className="flex justify-between items-start mb-3">
    <h3 className="font-bold">React Course</h3>
    <Badge color="emerald">Popular</Badge>
  </div>
  <p className="text-slate-700 mb-4">Learn React from basics to advanced</p>
  <Progress value={50} />
  <div className="flex gap-2 mt-4">
    <Button variant="primary" size="sm">Continue</Button>
    <Button variant="tertiary" size="sm">Details</Button>
  </div>
</Card>
```

### Status Panel
```tsx
<Card variant="default">
  <div className="space-y-3">
    <Alert type="success" title="System Status">
      All systems operational
    </Alert>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>CPU Usage</span>
        <Badge color="emerald" size="sm">35%</Badge>
      </div>
      <Progress value={35} color="emerald" />
    </div>
  </div>
</Card>
```

## 🔧 Best Practices

### 1. Naming Convention
```tsx
// ✅ Good - describes functionality
<Button variant="primary" />
<Card variant="highlighted" />

// ❌ Bad - too generic
<Box />
<Wrapper />
```

### 2. Props Design
```tsx
// ✅ Good - flexible with default values
interface ButtonProps {
  variant?: 'primary' | 'secondary'; // has default
  size?: 'sm' | 'md' | 'lg';        // has default
  onClick?: () => void;
}

// ❌ Bad - hard-coded styles
<Button text="Click" bgColor="blue" fontSize="16px" />
```

### 3. Single Responsibility
```tsx
// ✅ Good - Button only handles button behavior
function Button({ variant, onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// ❌ Bad - doing too much
function Button({ onClick, validate, submitForm, children }: ButtonProps) {
  // 5 responsibilities
}
```

### 4. Composition Over Props
```tsx
// ✅ Good - use composition
<Card>
  <Button>Click</Button>
  <Alert>Message</Alert>
</Card>

// ❌ Bad - too many props
<MegaCard button={{}} alert={{}} />
```

### 5. Accessibility
```tsx
// ✅ Good - semantic HTML with proper ARIA
<button className="..." aria-label="Close alert">
  ✕
</button>

// ❌ Bad - div pretending to be button
<div className="..." onClick={close}>✕</div>
```

## 📚 Sử Dụng trong Dự Án

### Import từ Index
```tsx
import { Button, Card, Badge, Alert, Progress } from '@/components';
```

### Trong Component
```tsx
'use client';
import { Button, Card } from '@/components';

export function MyComponent() {
  return (
    <Card variant="highlighted">
      <h2>Hello</h2>
      <Button onClick={() => alert('Hi!')}>Click Me</Button>
    </Card>
  );
}
```

## 🚀 Mở Rộng Library

Để thêm component mới, hãy làm theo các bước:

1. **Tạo file component** (e.g., `Input.tsx`)
   ```tsx
   export interface InputProps {
     // props definition
   }
   
   export function Input({ ...props }: InputProps) {
     // component code
   }
   ```

2. **Export từ index.ts**
   ```tsx
   export { Input } from './Input';
   export type { InputProps } from './Input';
   ```

3. **Document** - Thêm description vào README này

4. **Test** - Thêm example vào `/demo-component` page

## 🎯 Kết Luận

Tư duy Lego giúp chúng ta:
- ✅ Viết code dễ bảo trì
- ✅ Tái sử dụng component
- ✅ Tăng tốc độ phát triển
- ✅ Đảm bảo tính nhất quán của UI
- ✅ Dễ scale khi dự án phát triển

Hãy bắt đầu xây dựng UI của bạn như xếp hình Lego! 🧱
