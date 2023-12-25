export const useNotification = () => {
    const notification = useState<string>('notification', () => '');
    const isVisible = useState<boolean>('isVisible', () => false);

    const showNotification = (message: string) => {
        notification.value = message;
        isVisible.value = true;
        setTimeout(() => {
            isVisible.value = false;
        }, 5000); // Hide after 5 seconds
    };

    return { notification, isVisible, showNotification };
};
