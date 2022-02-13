import * as constants from './queries';
import axios from "axios";

export const getNavItems = async  () => {
    await axios.post(constants.GRAPHQL_API, {
        query: constants.GET_NAVITEMS_QUERY
    })
}