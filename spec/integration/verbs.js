const { olla } = require("./olla");
const { syödä } = require("./syödä");
const { nähdä } = require("./nähdä");
const { voida } = require("./voida");
const { kokea } = require("./kokea");
const { takellella } = require("./takellella");
const { soutaa } = require("./soutaa");
const { elää } = require("./elää");

const verbs = [
    elää,
    soutaa,
    takellella,
    kokea,
    voida,
    nähdä,
    syödä,
    olla,
];

exports.verbs = verbs;
