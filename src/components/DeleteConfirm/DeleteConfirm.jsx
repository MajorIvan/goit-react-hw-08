// import css from "./DeleteConfirm.module.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

// export const DeleteConfirm = ({ open, message, onConfirm, onCancel }) => {
//   if (!open) return null;
//   return (
//     <div className={css.overlay}>
//       <div className={css.modal}>
//         <p>{message}</p>
//         <div className={css.actions}>
//           <button onClick={onConfirm}>
//             Yes
//           </button>
//           <button onClick={onCancel}>
//             No
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export const DeleteConfirm = ({ open, message, onConfirm, onCancel }) => (
  <Dialog open={open} onClose={onCancel}>
    <DialogTitle>Confirmation</DialogTitle>
    <DialogContent>{message}</DialogContent>
    <DialogActions>
      <Button onClick={onConfirm} color="primary" variant="contained">
        Yes
      </Button>
      <Button onClick={onCancel} color="secondary" variant="outlined">
        No
      </Button>
    </DialogActions>
  </Dialog>
);
