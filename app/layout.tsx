import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Todo Workspace",
  description: "Simple todo app with shared layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-800 relative font-plus-jakarta`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/30 via-indigo-400/25 to-purple-400/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-[-8rem] right-[-6rem] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-300/30 via-cyan-300/20 to-blue-300/25 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        </div>

        <div className="min-h-screen flex flex-col">
          <header className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm border-b border-white/60">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <Image src="/images/logo_cusc.png" alt="CUSC logo" width={48} height={48} className="h-12 w-12 object-contain" priority />
                <div>
                  <p className="text-sm font-medium text-slate-500">Làm chủ kỹ năng Lập trình Web Full-stack</p>
                  <p className="text-base font-semibold text-slate-900">Hệ thống quản lý công việc</p>
                </div>
              </div>
              <nav className="hidden gap-2 text-sm font-medium text-slate-600 sm:flex">
                <Link href="/" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  Trang chủ
                </Link>
                <Link href="/gioi-thieu" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  Giới thiệu
                </Link>
                <Link href="/demo-component" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  Component
                </Link>
                <Link href="/demo-state" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  State
                </Link>
                <Link href="/demo-render" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  Render
                </Link>
                <Link href="/huong-dan" className="rounded-lg px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900">
                  Hướng dẫn
                </Link>
              </nav>
            </div>
          </header>

          <div className="mx-auto flex w-full flex-1 gap-6 px-6 py-8">
            <aside className="hidden w-72 shrink-0 flex-col gap-6 rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-100/70 lg:flex">
              {/* Banner với gradient animate */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-4 text-white shadow-lg">
                <div className="absolute inset-0 animate-pulse opacity-20">
                  <div className="absolute h-20 w-20 rounded-full bg-white blur-3xl -top-10 -left-10" />
                  <div className="absolute h-32 w-32 rounded-full bg-white blur-3xl -bottom-16 -right-16" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">CUSC Community</p>
                  <h3 className="mt-1 text-lg font-bold">Khám Phá Thêm</h3>
                  <p className="mt-2 text-xs leading-relaxed text-blue-50">Truy cập các tài nguyên học tập và cộng đồng</p>
                </div>
              </div>

              {/* Navigation Internal */}
              <nav className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Ứng Dụng</div>
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  Danh sách công việc
                </Link>
              </nav>

              {/* Navigation Educational */}
              <nav className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Học Tập</div>
                <Link
                  href="/gioi-thieu"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:text-indigo-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                  Giới thiệu Full-stack
                </Link>
                <Link
                  href="/demo-component"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-50 hover:text-purple-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
                  Component Design
                </Link>
                <Link
                  href="/demo-state"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  State & Props
                </Link>
                <Link
                  href="/demo-render"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
                  Rendering Methods
                </Link>
                <Link
                  href="/huong-dan"
                  className="rounded-lg px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-700 font-medium text-slate-700 group flex items-center gap-2"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  Hướng dẫn Fullstack
                </Link>
              </nav>

              {/* External Links */}
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Liên Kết Ngoài</div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://cusc.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-3 text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide">CUSC Official</p>
                        <p className="text-xs text-emerald-50 mt-0.5">cusc.vn</p>
                      </div>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://aptech.cusc.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 p-3 text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide">Aptech Training</p>
                        <p className="text-xs text-orange-50 mt-0.5">aptech.cusc.vn</p>
                      </div>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </aside>

            <main className="flex-1 rounded-3xl bg-white/95 p-6 shadow-xl ring-1 ring-slate-100/70 backdrop-blur">{children}</main>
          </div>

          <footer className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-t border-white/60">
            <div className="mx-auto flex items-center justify-between px-6 py-4 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} Todo Workspace</span>
              <span className="hidden sm:block">Build with Next.js & Prisma</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
