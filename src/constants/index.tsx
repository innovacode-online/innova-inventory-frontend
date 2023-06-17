import { BsBagDash, } from "react-icons/bs";
import { RxDashboard, } from "react-icons/rx";
import { GoInbox, } from "react-icons/go";


interface Menu {
    icon: JSX.Element;
    path: string;
    name: string;
}

export const DASHBOARD_MENU: Menu[] = [
    {
        icon: <BsBagDash/>,
        path: '/products',
        name: 'Productos'
    },
    {
        icon: <RxDashboard/>,
        path: '/categories',
        name: 'Categorias'
    },
    {
        icon: <GoInbox/>,
        path: '/sales',
        name: 'Ventas'
    }
];