import {Router} from "vue-router";
import {NavigationEntries} from "@/config/navigation/NavigationEntry";

const DEFAULT_ROUTES = (router: Router): NavigationEntries => [
    {
        path: '/',
        name: 'Home',
        external: false,
        active: router.currentRoute.value.path === '/'
    },
    {
        path: 'https://www.spigotmc.org/members/i-s.79996/#resources',
        name: 'Spigot',
        external: true,
        active: false
    },
    {
        path: 'https://ci.athion.net',
        name: 'Jenkins (CI)',
        external: true,
        active: false
    },
    {
        path: '/',
        name: 'Sponsors',
        external: true,
        active: false
    },
    {
        path: '/',
        name: 'Contact Us',
        external: true,
        active: false
    },
    {
        path: 'https://discord.gg/intellectualsites',
        name: 'Discord',
        external: true,
        active: false
    }
]

export const getNavigationEntries = (router: Router): NavigationEntries => {
    return DEFAULT_ROUTES(router);
}