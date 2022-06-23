const slugify = require("slugify");

module.exports = {
  beforeCreate(createdArticle) {
    const { data } = createdArticle.params;

    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },

  beforeUpdate(updatedArticle) {
    const { data } = updatedArticle.params;

    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
