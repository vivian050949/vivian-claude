import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F7F5F2] flex flex-col items-center justify-center gap-3">
          <p className="text-[#1C2B3A] font-semibold">頁面發生錯誤</p>
          <p className="text-[#6B7280] text-sm">請重新整理頁面</p>
        </div>
      )
    }
    return this.props.children
  }
}
