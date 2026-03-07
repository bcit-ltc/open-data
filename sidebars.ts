import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  datasetSidebar: [
    {
      type: 'doc',
      id: 'portal',
      label: 'Overview',
    },
    {
      type: 'link',
      label: 'About',
      href: '/#about',
    },
    {
      type: 'link',
      label: 'Datasets Overview',
      href: '/#datasets',
    },
    {
      type: 'link',
      label: 'AudioVideoProcessed',
      href: '/#audiovideoprocessed',
    },
    {
      type: 'link',
      label: 'ContentObjects',
      href: '/#contentobjects',
    },
    {
      type: 'link',
      label: 'DiscussionsForum',
      href: '/#discussionsforum',
    },
    {
      type: 'link',
      label: 'GradeObjects',
      href: '/#gradeobjects',
    },
    {
      type: 'link',
      label: 'OrganizationalUnits',
      href: '/#organizationalunits',
    },
    {
      type: 'link',
      label: 'QuizObjects',
      href: '/#quizobjects',
    },
    {
      type: 'link',
      label: 'ReleaseConditionsObjects',
      href: '/#releaseconditionsobjects',
    },
    {
      type: 'link',
      label: 'RoleDetails',
      href: '/#roledetails',
    },
  ],
};

export default sidebars;
