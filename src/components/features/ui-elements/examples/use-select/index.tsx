"use client";

import { Avatar, Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { USERS } from "./data";

export function UserSelect() {
  return (
    <Card className="border-none w-full max-w-2xl bg-background">
      <CardBody>
        <Select items={USERS} label="Assigned to" placeholder="Select a user" labelPlacement="outside" className="max-w-2xl">
          {(user) => (
            <SelectItem key={user.id} textValue={user.name}>
              <div className="flex gap-2 items-center">
                <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                <div className="flex flex-col">
                  <span className="text-small">{user.name}</span>
                  <span className="text-tiny text-default-400">{user.email}</span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      </CardBody>
    </Card>
  );
}
