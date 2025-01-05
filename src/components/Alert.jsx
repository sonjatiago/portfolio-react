import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={{ base: 3, md: 4 }} // Adjust padding for smaller screens
          px={{ base: 4, md: 6 }} // Responsive padding
          backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}
          maxW={{ base: "90%", sm: "80%", md: "400px" }} // Responsive width
          borderRadius="md" // Rounded corners for aesthetic appeal
        >
          <AlertDialogHeader
            fontSize={{ base: "md", sm: "lg" }} // Adjust font size for small screens
            fontWeight="bold"
          >
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody
            fontSize={{ base: "sm", sm: "md" }} // Make text smaller on mobile for better fit
          >
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
