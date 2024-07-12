'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, cn, Input, User } from "@nextui-org/react";
import { Plus, SendHorizontal } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

interface IMessage {
    content: string;
    sender: 'me' | 'other';
}

export function Chat() {

    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<IMessage[]>([
        {
            content: "Hello! How can I help you today?",
            sender: "other"
        },
        {
            content: "I need help with my order",
            sender: "me"
        },
        {
            content: "Sure! Can you provide me with your order number?",
            sender: "other"
        },
        {
            content: "123456789",
            sender: "me"
        },
        {
            content: "Thank you! Let me check your order status",
            sender: "other"
        },
        {
            content: "You're welcome",
            sender: "me"
        }
    ]);
    const inputLength = useMemo(() => input.length, [input])

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement | HTMLDivElement>) => {
        event.preventDefault()
        if (!inputLength) return

        setMessages(prev => ([...prev, { sender: "me", content: input }]));
        setInput("");
    }, [inputLength, input])

    return (
        <Card className="border-none w-full max-w-2xl bg-background/60 dark:bg-default-100/50">
            <CardHeader className="space-y-1.5 p-6 flex flex-row items-center justify-between">
                <User
                    name="Junior Garcia"
                    description={(
                        "@jrgarciadev"
                    )}
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                    }}
                />
                <Button
                    isIconOnly
                    radius="full"
                    variant="ghost"
                >
                    <Plus className="size-6" />
                </Button>
            </CardHeader>
            <CardBody className="p-6 pt-0">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.content}
                            className={cn(
                                "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                message.sender === "me" ? "bg-primary text-primary-foreground ml-auto" : "bg-foreground/10"
                            )}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>
            </CardBody>
            <CardFooter
                as={"form"}
                className="p-6 gap-3"
                onSubmit={handleSubmit}
            >
                <Input
                    variant="bordered"
                    placeholder="Type a message..."
                    autoComplete="off"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    variant="flat"
                    isIconOnly
                    color="primary"
                    isDisabled={!inputLength}
                >
                    <SendHorizontal className="size-5" />
                </Button>
            </CardFooter>
        </Card>
    )
}