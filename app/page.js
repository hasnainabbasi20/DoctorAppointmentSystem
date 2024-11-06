import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DoctCategorySect from "@/components/DoctorCategorySection";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-center bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1674702727317-d29b2788dc4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGRvY3RvcnN8ZW58MHx8MHx8fDA=)" }}>
        <div className="relative z-50 p-4 bg-black bg-opacity-40">
          
          <Header/>
          <Hero />
          <DoctCategorySect/>
          
        </div>
      </main>
    </>
  )
}