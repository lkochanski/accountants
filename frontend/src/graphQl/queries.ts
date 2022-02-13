export const GRAPHQL_API = "http://localhost:1337/graphql";

export const GET_NAVITEMS_QUERY = `
    query Navitems {
        navItems {
            data {
                attributes {
                    name
                    route
                }
            }
        }
    }
`