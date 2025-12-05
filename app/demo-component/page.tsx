'use client';

import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Alert } from '../components/Alert';
import { Progress } from '../components/Progress';

export default function DemoComponent() {
  const [alerts, setAlerts] = useState<Record<string, boolean>>({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const closeAlert = (key: string) => {
    setAlerts((prev) => ({ ...prev, [key]: false }));
  };

  const resetAlerts = () => {
    setAlerts({
      info: true,
      success: true,
      warning: true,
      error: true,
    });
  };

  return (
    <main className="flex flex-col gap-12 w-full">
      {/* Hero Section */}
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Khám phá</p>
        <div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Sức mạnh của Component
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Tư duy xếp hình Lego: Xây dựng giao diện từ những component nhỏ có thể tái sử dụng. Mỗi component là một khối Lego - độc lập, linh hoạt, và có thể ghép nối lại theo nhiều cách khác nhau.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Tư duy Lego trong Component Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🧱',
              title: 'Modularity',
              description: 'Mỗi component là một module độc lập, có thể được phát triển và test riêng biệt.',
            },
            {
              icon: '🔄',
              title: 'Reusability',
              description: 'Một component có thể được sử dụng ở nhiều nơi khác nhau trong ứng dụng.',
            },
            {
              icon: '🎨',
              title: 'Composability',
              description: 'Các component nhỏ có thể được kết hợp lại để tạo thành UI phức tạp hơn.',
            },
          ].map((item, index) => (
            <Card key={index} variant="highlighted" padding="md">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Buttons Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Button Component</h2>
        <p className="text-slate-600">
          Button là component cơ bản nhất. Nó có nhiều variant (kiểu dáng) và size để phục vụ các tình huống khác nhau.
        </p>

        <Card variant="default" padding="lg">
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Variants</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Sizes</h3>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-slate-600 min-w-12">Small:</span>
                  <Button size="sm">Small</Button>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-slate-600 min-w-12">Medium:</span>
                  <Button size="md">Medium</Button>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-slate-600 min-w-12">Large:</span>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">States</h3>
              <div className="flex gap-3">
                <Button>Enabled</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Card Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Card Component</h2>
        <p className="text-slate-600">
          Card là container để chứa content. Nó có nhiều variant để tạo visual hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="md">
            <h3 className="font-bold text-slate-900 mb-2">Default Card</h3>
            <p className="text-slate-700 text-sm">
              Kiểu mặc định với border nhẹ, thích hợp cho content thông thường.
            </p>
          </Card>

          <Card variant="highlighted" padding="md">
            <h3 className="font-bold text-slate-900 mb-2">Highlighted Card</h3>
            <p className="text-slate-700 text-sm">
              Có nền màu, thích hợp để highlight thông tin quan trọng.
            </p>
          </Card>

          <Card variant="gradient" padding="md">
            <h3 className="font-bold mb-2">Gradient Card</h3>
            <p className="text-sm opacity-90">
              Nền gradient tối, thích hợp cho call-to-action hoặc feature highlight.
            </p>
          </Card>

          <Card variant="minimal" padding="md">
            <h3 className="font-bold text-slate-900 mb-2">Minimal Card</h3>
            <p className="text-slate-700 text-sm">
              Không border hay nền, chỉ có padding. Rất linh hoạt.
            </p>
          </Card>
        </div>
      </section>

      {/* Badge Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Badge Component</h2>
        <p className="text-slate-600">
          Badge dùng để hiển thị trạng thái, tags, hoặc count nhỏ gọn.
        </p>

        <Card variant="default" padding="lg">
          <div className="space-y-6">
            {/* Colors */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                <Badge color="blue">Active</Badge>
                <Badge color="emerald">Success</Badge>
                <Badge color="orange">Pending</Badge>
                <Badge color="red">Error</Badge>
                <Badge color="purple">Featured</Badge>
                <Badge color="slate">Inactive</Badge>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Sizes</h3>
              <div className="flex gap-2 items-center">
                <Badge size="sm">Small Badge</Badge>
                <Badge size="md">Medium Badge</Badge>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge color="blue">React</Badge>
                <Badge color="blue">Next.js</Badge>
                <Badge color="blue">Tailwind</Badge>
                <Badge color="emerald">New Feature</Badge>
                <Badge color="orange">In Progress</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Alert Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Alert Component</h2>
        <p className="text-slate-600">
          Alert dùng để hiển thị tin nhắn thông báo với các loại khác nhau.
        </p>

        <div className="space-y-3">
          {alerts.info && (
            <Alert
              type="info"
              title="Thông tin"
              onClose={() => closeAlert('info')}
            >
              Đây là một thông báo thông tin. Bạn có thể đóng nó bằng nút ✕.
            </Alert>
          )}

          {alerts.success && (
            <Alert
              type="success"
              title="Thành công"
              onClose={() => closeAlert('success')}
            >
              Thao tác của bạn đã được thực hiện thành công!
            </Alert>
          )}

          {alerts.warning && (
            <Alert
              type="warning"
              title="Cảnh báo"
              onClose={() => closeAlert('warning')}
            >
              Hãy chú ý đến thông báo này trước khi tiếp tục.
            </Alert>
          )}

          {alerts.error && (
            <Alert
              type="error"
              title="Lỗi"
              onClose={() => closeAlert('error')}
            >
              Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hỗ trợ.
            </Alert>
          )}
        </div>

        <Button onClick={resetAlerts} variant="secondary" size="sm">
          Hiển thị lại tất cả Alert
        </Button>
      </section>

      {/* Progress Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Progress Component</h2>
        <p className="text-slate-600">
          Progress dùng để hiển thị tiến trình hoàn thành một tác vụ.
        </p>

        <Card variant="default" padding="lg">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Colors</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Blue - 25%</p>
                  <Progress value={25} color="blue" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Emerald - 50%</p>
                  <Progress value={50} color="emerald" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Orange - 75%</p>
                  <Progress value={75} color="orange" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Red - 90%</p>
                  <Progress value={90} color="red" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Purple - 100%</p>
                  <Progress value={100} color="purple" showLabel={false} animated={false} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-3">Without Label</h3>
              <Progress value={60} color="emerald" showLabel={false} />
            </div>
          </div>
        </Card>
      </section>

      {/* Composition Example */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Tư duy Composability</h2>
        <p className="text-slate-600">
          Khi kết hợp các component nhỏ lại, ta tạo thành một UI hoàn chỉnh. Dưới đây là ví dụ:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1: Product Card */}
          <Card variant="highlighted" padding="lg">
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-3">
                <h3 className="font-bold text-slate-900 text-lg">React Course</h3>
                <Badge color="emerald" size="sm">
                  Popular
                </Badge>
              </div>
              <p className="text-slate-700 text-sm">
                Học React từ cơ bản đến nâng cao với các ví dụ thực tế.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-slate-600">Progress: 12/24 lessons</p>
                <Progress value={50} color="blue" />
              </div>
              <div className="flex gap-2 pt-3">
                <Button size="sm" variant="primary">
                  Tiếp tục
                </Button>
                <Button size="sm" variant="tertiary">
                  Chi tiết
                </Button>
              </div>
            </div>
          </Card>

          {/* Example 2: Status Card */}
          <Card variant="default" padding="lg">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-slate-900 text-lg">Deployment Status</h3>
                <Badge color="emerald" size="sm">
                  Live
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-700">Build: Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-700">Tests: Passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-700">Deploy: Successful</span>
                </div>
              </div>

              <Button variant="success" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Best Practices</h2>

        <div className="space-y-3">
          <Alert type="info" title="💡 Naming">
            Đặt tên component rõ ràng, mô tả chức năng của nó. Tránh tên quá chung chung như <code className="bg-slate-200 px-1 rounded text-xs">Box</code> hoặc <code className="bg-slate-200 px-1 rounded text-xs">Wrapper</code>.
          </Alert>

          <Alert type="info" title="🎨 Props">
            Component nên có props linh hoạt để tái sử dụng được. Không nên hard-code style hoặc behavior.
          </Alert>

          <Alert type="info" title="📦 Single Responsibility">
            Một component nên chỉ có một trách nhiệm duy nhất. Nếu quá phức tạp, hãy tách nhỏ thành các component con.
          </Alert>

          <Alert type="info" title="🧪 Testing">
            Component nên có thể test độc lập. Tránh phụ thuộc vào state global hoặc routing.
          </Alert>

          <Alert type="info" title="📚 Documentation">
            Viết JSDoc hoặc Storybook để document component. Giúp team khác dễ sử dụng lại.
          </Alert>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white p-8">
        <h2 className="text-3xl font-bold">Kết luận</h2>
        <p className="text-lg">
          Tư duy xếp hình Lego giúp chúng ta xây dựng UI một cách có hệ thống, dễ bảo trì, và dễ mở rộng. Thay vì viết code từ con số không mỗi lần, 
          ta xây dựng một thư viện component tái sử dụng được, giúp tăng tốc độ phát triển.
        </p>
        <p className="text-lg">
          Hãy bắt đầu bằng cách tạo những component nhỏ, kiểm tra chúng hoạt động tốt, rồi từng bước kết hợp lại thành những UI phức tạp hơn. 
          Đó chính là cách những ứng dụng web tuyệt vời được xây dựng!
        </p>
      </section>
    </main>
  );
}
