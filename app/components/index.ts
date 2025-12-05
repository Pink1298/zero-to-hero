/**
 * UI Component Library - Tư duy Lego
 * 
 * Thư viện component reusable được thiết kế theo nguyên tắc:
 * 1. Modularity - Mỗi component độc lập
 * 2. Reusability - Có thể dùng ở nhiều nơi
 * 3. Composability - Ghép nối lại thành UI phức tạp
 */

export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card } from './Card';
export type { CardProps } from './Card';

export { Badge } from './Badge';
export type { BadgeProps } from './Badge';

export { Alert } from './Alert';
export type { AlertProps } from './Alert';

export { Progress } from './Progress';
export type { ProgressProps } from './Progress';

// Todo Components
export { TodoHeader } from './TodoHeader';
export { AddTodoForm } from './AddTodoForm';
export { TodoStats } from './TodoStats';
export { DateFilter } from './DateFilter';
export { TodoList } from './TodoList';

// State & Props demo widgets
export { CounterCard, ToggleCard, LivePreview } from './StateWidgets';
export type { CounterCardProps, ToggleCardProps, LivePreviewProps } from './StateWidgets';

// Render demo utilities
export { RenderMethodCard, LiveRenderDemo, ServerTimeDisplay, RenderComparisonTable } from './RenderUtils';
export type { RenderMethodCardProps, ServerTimeDisplayProps } from './RenderUtils';
