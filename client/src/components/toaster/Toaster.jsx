import { Toaster, toast } from 'sonner';

export const SuccessToast = (message) => {
  toast.success(message, {
    duration: 5000,
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    duration: 5000,
  });
};

export const LoadingToast = (state = true) => {
  if (state === true) {
    toast.loading('Loading...');
  } else {
    toast.dismiss();
  }
};


export const ToasterContainer = () => {
  return <Toaster richColors position='bottom-right' />;
};