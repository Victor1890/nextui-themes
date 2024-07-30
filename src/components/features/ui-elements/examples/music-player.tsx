"use client";

import { Button, Card, CardBody, cn, Image, Slider } from "@nextui-org/react";
import { ChevronFirst, ChevronLast, Heart, Pause, Repeat2, Shuffle } from "lucide-react";
import { useState } from "react";

export function MusicPlayer() {
  const [liked, setLiked] = useState(false);

  return (
    <Card isBlurred className="border-none w-full max-w-[710px] bg-background/60 dark:bg-default-100/50">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image alt="Album cover" className="object-cover" height={200} shadow="md" src="/twenty-one-pilots/img/Blurryface.webp" width="100%" />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Blurryface</h3>
                <p className="text-small text-foreground/80">14 Tracks</p>
                <h1 className="text-large font-medium mt-2">Tear in My Heart</h1>
              </div>
              <Button
                isIconOnly
                className="text-default data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <Heart className={cn("text-foreground/80", liked ? "text-primary" : "")} fill={liked ? "currentColor" : "none"} />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default/30",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">3:09</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light">
                <Repeat2 className="text-primary/80" />
              </Button>
              <Button isIconOnly className="text-primary data-[hover]:bg-primary/10" radius="full" variant="light">
                <ChevronFirst />
              </Button>
              <Button isIconOnly className="text-primary w-auto h-auto data-[hover]:bg-primary/10" radius="full" variant="light">
                <Pause size={30} />
              </Button>
              <Button isIconOnly className="text-primary data-[hover]:bg-primary/10" radius="full" variant="light">
                <ChevronLast />
              </Button>
              <Button isIconOnly className="text-primary data-[hover]:bg-primary/10" radius="full" variant="light">
                <Shuffle className="text-primary/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
