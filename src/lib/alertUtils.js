import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Create SweetAlert instance with React wrapper
const MySwal = withReactContent(Swal);

// Reusable function for showing confirmation alert
export const showDeleteConfirmation = () => {
  return MySwal.fire({
    title: "Are you sure?", // Title of the modal
    text: "Do you want to delete this item?", // Modal text
    icon: "warning", // Modal icon
    showCancelButton: true, // Show cancel button
    confirmButtonText: "Yes, delete it", // Confirm button text
    cancelButtonText: "Cancel", // Cancel button text
  });
};
