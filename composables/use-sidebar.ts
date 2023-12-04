export const useSidebar = () => {
    const isSidebarOpen = useState<boolean>('isSidebarOpen', () => false)

    const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value

    return {
        isSidebarOpen,
        toggleSidebar
    }
}