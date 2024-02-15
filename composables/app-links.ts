export const useAppLinks = () => {
    const route = useRoute()

    const links = useState<string[]>('links', () => {
        return ["about", "skills", "experience", "portfolio"]
    })

    // Function to check if a link is active
    const isLinkActive = (link: string): boolean => {
        // Check if the current route's path or hash matches the link
        return route.path === `${link}` || route.hash === `#${link}`;
    };

    return {
        links,
        isLinkActive
    }
}