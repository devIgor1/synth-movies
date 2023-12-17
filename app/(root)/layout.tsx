const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default RootLayout
