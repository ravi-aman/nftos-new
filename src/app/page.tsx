import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-16">
          Innovative Web3 solutions for a decentralized future.
        </h1>

        {/* Mailing List Section */}
        <div className="w-full max-w-2xl border rounded-3xl p-8">
          <h2 className="text-xl font-medium mb-2">JOIN OUR MAILING LIST</h2>
          <p className="text-2xl text-gray-800 mb-8">Get the latest update from the Trillicorn.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <Input type="email" placeholder="email Adress" className="flex-1 rounded-full border-gray-300" />
            <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8">Submit</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  )
}

