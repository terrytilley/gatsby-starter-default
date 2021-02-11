require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      siteId: process.env.GATSBY_SITE_ID,
    },
  })
}
