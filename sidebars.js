/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
          'general/welcome',
          'general/contributing',
          'general/community',
          'general/faucet',
          'general/faq',
          'general/glossary'
      ],
    },
    {
      type: 'category',
      label: 'Learn',
      items: [
          'learn/main',
          'learn/learn-account',
          {
              type: 'category',
              label: 'Validator',
              items: [
                'learn/validator-basic',
                'learn/become-validator',
                'learn/docker'
              ]
          },
          'learn/nominator'
      ],
    },
    {
      type: 'category',
      label: 'Build',
      items: [
          'build/build-intro',
          'build/network',
          'build/build-did',
          'build/build-organization',
          'build/build-certificate',
          'build/supply-chain'
      ],
    },
  ],
   
};
