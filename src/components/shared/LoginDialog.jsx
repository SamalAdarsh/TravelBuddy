import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useGoogleAuth } from "@/services/authAPI";
import { toast, Toaster } from "sonner";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";

const LoginDialog = ({ open, onClose }) => {
  const handleLogin = useGoogleAuth({
    onSuccess: () => {
      onClose();
      toast.success("Login Successful");
    },
  });
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleLogin} className={"w-full rounded-md"}>
            <FaGoogle /> Login With Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
