import React from 'react';
import { cn } from '@/lib/utils';
// import { Input } from '@/components/ui/input'; // SearchInput commented out as per context and image
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, /* Search, */ ChevronDown, User, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onToggleMobileSidebar, className }) => {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex h-[70px] items-center justify-between border-b border-border bg-card px-6",
        "left-0 md:left-64", // Full width on mobile, offset by sidebar on desktop
        className
      )}
    >
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggleMobileSidebar} className="mr-4 md:hidden">
          <Menu size={24} />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        {/* Search Input - commented out based on visual evidence from screenshot and context component */}
        {/* <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input type="search" placeholder="Search..." className="pl-10" />
        </div> */}
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-accentBlue hover:bg-accentBlue/90 text-primary-foreground">
              Create
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuItem>New Invoice</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              {/* Using a generic avatar, replace src with actual user image if available */}
              <AvatarImage src="https://avatar.vercel.sh/dummy-user.png" alt="User avatar" /> 
              <AvatarFallback>JD</AvatarFallback> {/* John Doe initials or similar */} 
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
