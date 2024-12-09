import { Typography } from "@/components/ui/typography";
import { THEME } from "@/constants";
import { useThemeStore } from "@/stores/theme.store";
import { THEME_TEMPLATE_OUTPUT } from "@/utils/string.util";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Check, Copy } from "lucide-react";
import dynamic from "next/dynamic";
import { Fragment, useMemo } from "react";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import { mapSchemaToThemeColors } from "@/utils/color.util";

const SnippetCode = dynamic(() => import("./snippet-code"), { ssr: false, loading: () => <p>Loading...</p> });

export function CopyCodeBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme } = useThemeStore();
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const themeValue = useMemo(() => {
    const activeTheme = THEME.find((t) => t.name === theme.name);
    if (!activeTheme) return "";

    const schemas = mapSchemaToThemeColors(activeTheme.schemas)
    return THEME_TEMPLATE_OUTPUT({ schemas });
  }, [theme]);

  return (
    <Fragment>
      <Button variant="light" onPress={onOpen}>
        Copy code
      </Button>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <Typography as="p" className="text-lg font-semibold leading-none tracking-tight">
              Theme
            </Typography>
            <Typography as="p" className="text-sm text-muted-foreground font-normal">
              Copy and paste the following code into your <span className="font-bold">tailwind.config.ts</span> file
            </Typography>
          </ModalHeader>
          <ModalBody>
            {themeValue && (
              <Button
                onClick={() => {
                  copyToClipboard(themeValue);
                }}
                size="sm"
                color="default"
                className="absolute right-14 top-24 z-10"
                startContent={isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
              >
                Copy
              </Button>
            )}

            <SnippetCode value={themeValue} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
