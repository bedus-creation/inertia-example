import route from "ziggy-js"
import { Ziggy as ZiggyGenerated } from "../../js/ziggy"

export default () => {
    const routes = ZiggyGenerated // eslint-disable-line no-undef

    return (name, params = undefined, absolute = undefined) => route(name, params, absolute, routes)
}
