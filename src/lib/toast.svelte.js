/**
 * @typedef {Object} Action
 * @property {string} label - The label for the action button.
 * @property {() => void} onClick - The callback to execute when the action is clicked.
 */

/**
 * @typedef {Object} ToastOptions
 * @property {string} [description] - A secondary message to display.
 * @property {number} [duration=5000] - Duration in milliseconds before the toast disappears. Set to 0 to keep it indefinitely.
 * @property {'default' | 'success' | 'error' | 'warning' | 'info'} [type='default'] - The visual style of the toast.
 * @property {Action} [action] - An optional action button to display.
 * @property {(id: string) => void} [onDismiss] - Callback executed when the toast is dismissed.
 */

/**
 * @typedef {Object} ToastProps
 * @property {string} id - Unique identifier for the toast.
 * @property {string} title - The main title of the toast.
 * @property {string} [description] - A secondary message to display.
 * @property {'default' | 'success' | 'error' | 'warning' | 'info'} [type] - The visual style of the toast.
 * @property {Action} [action] - An optional action button to display.
 */

/**
 * Global state for managing toasts.
 * @type {{ toasts: ToastProps[] }}
 */
export const toastState = $state({
	toasts: []
});

/**
 * Programmatically trigger a toast notification.
 * 
 * @param {string} title - The main message to display.
 * @param {ToastOptions} [options] - Configuration for the toast.
 * @returns {string} The unique ID of the created toast.
 * 
 * @example
 * toast("Message sent", { description: "Your message is on its way." });
 */
export const toast = (title, options = {}) => {
	const id = Math.random().toString(36).slice(2, 9);
	const duration = options.duration ?? 5000;
	const type = options.type ?? 'default';

	const newToast = { ...options, id, title, type };
	toastState.toasts.push(newToast);

	if (duration !== 0) {
		setTimeout(() => {
			dismiss(id);
		}, duration);
	}

	return id;
};

/**
 * Dismiss a toast by its ID.
 * @param {string} id 
 */
const dismiss = (id) => {
	const index = toastState.toasts.findIndex((t) => t.id === id);
	if (index !== -1) {
		const toastObj = toastState.toasts[index];
		if (toastObj.onDismiss) toastObj.onDismiss(id);
		toastState.toasts.splice(index, 1);
	}
};

/**
 * Trigger a success toast.
 * @param {string} title
 * @param {Omit<ToastOptions, 'type'>} [options]
 */
toast.success = (title, options = {}) => toast(title, { ...options, type: 'success' });

/**
 * Trigger an error toast.
 * @param {string} title
 * @param {Omit<ToastOptions, 'type'>} [options]
 */
toast.error = (title, options = {}) => toast(title, { ...options, type: 'error' });

/**
 * Trigger a warning toast.
 * @param {string} title
 * @param {Omit<ToastOptions, 'type'>} [options]
 */
toast.warning = (title, options = {}) => toast(title, { ...options, type: 'warning' });

/**
 * Trigger an info toast.
 * @param {string} title
 * @param {Omit<ToastOptions, 'type'>} [options]
 */
toast.info = (title, options = {}) => toast(title, { ...options, type: 'info' });

/**
 * Programmatically dismiss a toast.
 */
toast.dismiss = dismiss;
