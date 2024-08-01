import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Fragment } from "react";

export function CopyCodeBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Fragment>
      <Button variant="light" onPress={onOpen}>
        Copy code
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <p>Modal Body</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
