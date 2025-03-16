export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  )
} 