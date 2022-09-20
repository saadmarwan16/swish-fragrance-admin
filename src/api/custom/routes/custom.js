// 'use strict';

// /**
//  * custom router.
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::custom.custom');

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/find-products",
      handler: "custom.findProducts",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/get-brand-edit/:id",
      handler: "custom.getBrandEdit",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/get-category-edit/:id",
      handler: "custom.getCategoryEdit",
      config: {
        auth: false,
      },
    },
  ],
};
