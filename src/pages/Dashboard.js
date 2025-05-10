import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <NavigationMenuLink href="/training">
                            Training Sessions
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/sparring">
                            Sparring Sessions
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="/tournaments">
                            Tournaments
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Training Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Training Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Sessions: 24</p>
                <p>Hours Trained: 48</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>

            {/* Sparring Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Sparring Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Rolls: 36</p>
                <p>Submission Rate: 65%</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>

            {/* Tournament Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Tournament Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Competitions: 3</p>
                <p>Medals: 2</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 