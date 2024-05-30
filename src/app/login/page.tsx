import Login from "@/components/Login";

export default function Page() {
    return <div className="flex justify-center items-center bg-[url('/images/Dust.png')] bg-black bg-cover w-full h-screen"> 
    <div className="p-4 border">
       <Login />
    </div>
    </div>
  }