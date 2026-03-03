import Medicines from "../models/Medicine.model.js";

const homePageController = async (req, res, next) => {
    try {

        let searchQuery = {};

        if (req.query.search) {
            searchQuery.name = {
                $regex: req.query.search,
                $options: "i"
            };
        }
            
        let queryParameter = parseInt( req.query.page ) || 1;

        const options = {
            page: queryParameter,
            limit: 8,
            collation: {
                locale: 'en',
            },
        };

        const getMedicinesData = await Medicines.paginate(searchQuery, options);

        res.render(
            "home/homepage",
            { 
                queryParameter, 
                getMedicinesData
            }
        );

    } catch ( error ) {
        console.log( `Error while rendering Home Page: ${ error.message }` );
    }
};

export default homePageController;