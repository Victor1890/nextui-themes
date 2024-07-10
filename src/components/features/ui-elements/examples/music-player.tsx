'use client';

import { Button, Card, CardBody, Image, Slider } from "@nextui-org/react";
import { ChevronFirst, ChevronLast, Heart, Pause, Repeat2, Shuffle } from "lucide-react";
import { useState } from "react";

export function MusicPlayer() {

    const [liked, setLiked] = useState(false)

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[710px]"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height={200}
                            shadow="md"
                            src="https://nextui.org/images/album-cover.png"
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                                <p className="text-small text-foreground/80">12 Tracks</p>
                                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                            </div>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => setLiked((v) => !v)}
                            >
                                <Heart
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                                />
                            </Button>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                            <Slider
                                aria-label="Music progress"
                                classNames={{
                                    track: "bg-default-500/30",
                                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                                }}
                                color="foreground"
                                defaultValue={33}
                                size="sm"
                            />
                            <div className="flex justify-between">
                                <p className="text-small">1:23</p>
                                <p className="text-small text-foreground/50">4:32</p>
                            </div>
                        </div>

                        <div className="flex w-full items-center justify-center">
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <Repeat2 className="text-foreground/80" />
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <ChevronFirst />
                            </Button>
                            <Button
                                isIconOnly
                                className="w-auto h-auto data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <Pause size={30} />
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <ChevronLast />
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <Shuffle className="text-foreground/80" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}