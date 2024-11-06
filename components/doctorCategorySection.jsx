
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { doctorCategories, doctors } from "@/lib/doctorsData"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function DoctCategorySect(){
 
    return(
        <>
        <div className="container flex justify-between mx-auto">
            <h1 className="font-mono text-3xl font-semibold">Premium Doctors</h1>
            <Select >
  <SelectTrigger className="w-[200px] h-[50px] text-xl">
    <SelectValue placeholder="Categories" />
  </SelectTrigger>
  <SelectContent className="text-2xl font-bold">
    {
       doctorCategories.map((categories)=>(
           
           <SelectItem key={categories} value={categories}>{categories}</SelectItem>
       ))
    }
   
  </SelectContent>
         </Select>
        </div>

        <div className="relative grid mx-auto grid-col-1 md:grid-cols-4 lg:grid-col-4">
            
            {
              doctors.map((data)=>(
                
                
                <Card key={data.id} className="w-[400px] h-[150px]">

                  <CardHeader>
                    
                    <CardTitle>
                       {data.name}
                    </CardTitle>
                    
                  </CardHeader>
                  
                        
               </Card>
              ))
            }
           
        </div>
        
        
        
        
        
        </>
    )
}


