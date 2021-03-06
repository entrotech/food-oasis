const router = require("express").Router();

const tenantRouter = require("./tenant-router");
const accountRouter = require("./account-router");
const categoryRouter = require("./category-router");
const neighborhoodRouter = require("./neighborhood-router");
const suggestionRouter = require("./suggestion-router");

const faqRouter = require("./faq-router");
const stakeholderRouter = require("./stakeholder-router");
const stakeholderBestRouter = require("./stakeholder-best-router");
const stakeholderLogRouter = require("./stakeholder-log-router");
const importRouter = require("./import-router");
const loadRouter = require("./load-router");
const esriRouter = require("./esri-router");

module.exports = router;

router.use("/api/stakeholders", stakeholderRouter);
router.use("/api/stakeholderbests", stakeholderBestRouter);
router.use("/api/stakeholderlogs", stakeholderLogRouter);
router.use("/api/tenants", tenantRouter);
router.use("/api/accounts", accountRouter);
router.use("/api/categories", categoryRouter);
router.use("/api/neighborhoods", neighborhoodRouter);
router.use("/api/suggestions", suggestionRouter);
router.use("/api/faqs", faqRouter);
router.use("/api/imports", importRouter);
router.use("/api/loads", loadRouter);
router.use("/api/esri", esriRouter);
