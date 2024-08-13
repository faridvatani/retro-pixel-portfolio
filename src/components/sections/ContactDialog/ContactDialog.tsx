import React, { FC } from "react";
import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";
import TextSpan from "@/components/ui/TextSpan";
import Icon from "@/components/ui/Icon";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog: FC<ContactDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      rounded
      className="max-w-lg"
    >
      <div className="flex justify-between items-center">
        <TextSpan className="text-2xl font-semibold">Contact Me</TextSpan>
        <Button onClick={onClose}>
          <Icon type="close" size="small"></Icon>
        </Button>
      </div>
      <p className="mt-4 text-pretty text-sm">
        If you have any questions or would like to get in touch, please feel
        free to send me a message using the form below.
      </p>
      <form className="mt-4">
        <Input
          id="name"
          label="Name"
          placeholder="Your Name"
          className="mb-4"
        />
        <Input
          id="email"
          label="Email"
          placeholder="Your Email"
          className="mb-4"
        />
        <Textarea
          id="message"
          label="Message"
          placeholder="Your Message"
          className="mb-4"
        />
        <Button variant="primary" type="submit" className="mt-5">
          Send Message
        </Button>
      </form>
    </Dialog>
  );
};

export default ContactDialog;
