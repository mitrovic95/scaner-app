import {ToastOptions} from 'ng2-toastr';

export class ToastrCustomOptions extends ToastOptions {
  toastLife = 2500;
  newestOnTop = false;
  showCloseButton = true;
  positionClass = 'toast-bottom-center';
  maxShown = 10;
}
