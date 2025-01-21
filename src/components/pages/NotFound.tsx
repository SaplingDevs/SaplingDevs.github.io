export default function NotFound() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <section className="text-center">
        <h1 className="text-3xl font-bold">Oops! Page not found.</h1>
        <img src="/sapling-clear.svg" className="w-10 mt-6 mx-auto" alt="Sapling Logo" />
      </section>
    </div>
  )
}
