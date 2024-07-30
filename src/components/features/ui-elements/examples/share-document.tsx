"use client";

import { Button, Card, CardBody, CardHeader, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, User } from "@nextui-org/react";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PeopleWithAccessProps {
  name: string;
  description: string;
}

const OPTIONS = [
  {
    label: "Can edit",
  },
  {
    label: "Can view",
  },
  {
    label: "Can comment",
  },
];

function PeopleWithAccess({ name, description }: PeopleWithAccessProps) {
  const [selected, setSelected] = useState("Can edit");

  return (
    <div className="flex items-center justify-between space-x-4">
      <User
        name={name}
        description={description}
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/30373425?v=4",
        }}
      />
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" endContent={<ChevronDown />}>
            {selected}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" items={OPTIONS} onAction={(x) => setSelected(x.toString())}>
          {({ label }) => (
            <DropdownItem key={label} endContent={label === selected && <Check />}>
              {label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

const PEOPLE_WITH_ACCESS_DUMMIES = [
  {
    name: "John Doe",
    description: "Product Manager",
  },
  {
    name: "Jane Doe",
    description: "Designer",
  },
  {
    name: "John Smith",
    description: "Developer",
  },
];

export function ShareDocument() {
  return (
    <Card className="border-none w-full max-w-2xl bg-background">
      <CardHeader className="items-start flex-col space-y-1.5 p-6">
        <div className="items-start flex-col space-y-1.5">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Share Document</h3>
          <p className="text-sm">Share your document with others</p>
        </div>
        <div className="flex items-center justify-between space-y-1.5 w-full gap-3">
          <Input placeholder="Enter email address" variant="bordered" defaultValue="" />
          <Button color="primary">Share</Button>
        </div>
      </CardHeader>
      <CardBody className="p-6 pt-0">
        <Divider />
        <div className="space-y-4 pt-6">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-4">
            {PEOPLE_WITH_ACCESS_DUMMIES.map((person) => (
              <PeopleWithAccess key={person.name} name={person.name} description={person.description} />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
