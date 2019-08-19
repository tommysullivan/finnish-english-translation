finnish
=======

An exploration of english to finnish translation using TDD

# Installation

Prerequisites: nodejs and yarn package manager

After git cloning to your local machine, from the project's directory, install all dependencies
using the following command:

    yarn

# Usage / Testing

Run the tests to see how various verb infinitives are conjugated, given
the different pronouns as well as the tenses, with negation or otherwise.

    yarn
    yarn test

# Next Steps 

- Refactoring
    - Move "configuration" json folder contents into typescript files in src
    - Make compiler more strict and then fix compiler errors (especially any)
    - Remove all mutation
    - Break files into smaller pieces
    - Make the array based definitions / configurations more self-evident
- Features
    - Derive "stems" from "infinitives"
    - Add other tenses
    - Add the conjugations of nouns