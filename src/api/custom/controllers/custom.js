"use strict";

/**
 *  custom controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::custom.custom", ({ stapi }) => ({
  async findProducts(ctx) {
    const entries = await strapi.entityService.findMany(
      "api::product.product",
      {
        fields: ["name"],
        sort: { name: "ASC" },
        limit: -1,
      }
    );

    const sanitizedEntity = await this.sanitizeOutput(entries, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async getBrandEdit(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service("api::brand.brand").findOne(id, query);
    // const entity = await strapi.service("api::brand.brand").find(query);
    const all_products = await this.findProducts(ctx);
    const entityWithProducts = {
      entity,
      all_products,
    };
    const sanitizedEntity = await this.sanitizeOutput(entityWithProducts, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async getCategoryEdit(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service("api::category.category")
      .findOne(id, query);
    const all_products = await this.findProducts(ctx);
    const entityWithProducts = {
      entity,
      all_products,
    };
    const sanitizedEntity = await this.sanitizeOutput(entityWithProducts, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
