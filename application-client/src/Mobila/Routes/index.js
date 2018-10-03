let routes = [];

const push = (route) =>{
    routes.push(route);
};

const getRoutes = () => routes;

const resetRoutes = () => {
    routes = [];
};
export default {
    push,
    getRoutes,
    resetRoutes
}