export const useNotification = () => {
    const isVisible = useState<boolean>('isVisible', () => false);
    const notificationMessage = useState<string>('notificationMessage', () => '');
    const notificationType = useState<string>('notificationType', () => '')

    const showNotification = (message: string, type: string = 'success') => {
        notificationMessage.value = message;
        notificationType.value = type;
        isVisible.value = true;
        setTimeout(() => {
            isVisible.value = false;
        }, 5000); // Hide after 5 seconds
    };

    return { isVisible, notificationMessage, notificationType, showNotification };
};
