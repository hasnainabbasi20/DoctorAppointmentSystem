
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Header (){

    return(
    <>
    
    <div className="py-3 opacity-75 bg-slate-900">
        
        <div className="container z-50 style={{ position: 'relative' }} flex justify-between mx-auto ">
        <h1 className="font-mono text-4xl font-bold">Logo</h1>
    <Menubar>
  <MenubarMenu>
    <MenubarTrigger className={'bg-inherit bg-slate-500'}>
    <Avatar>
  <AvatarImage  src="https://images.unsplash.com/photo-1642975967602-653d378f3b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
            
        </div>


    </div>
    
    
    
    </>
    )
}