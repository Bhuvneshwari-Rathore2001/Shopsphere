import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

interface IModal {
  title: string;
  body?: string;
  continueText?: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  onHandleContinue:()=>{}
}
export function Modal({
  title,
  body,
  continueText = 'Confirm',
  setOpen,
  open,
  onHandleContinue
}: IModal) {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{body}</DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            Cancel
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={onHandleContinue}
          >
            {continueText}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
