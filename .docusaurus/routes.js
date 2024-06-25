import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0e8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '0f4'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3cc'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '071'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd03'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f68'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '82f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aea'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '40e'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4f1'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '153'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'fed'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '466'),
    routes: [
      {
        path: '/docs/baseplus/installation',
        component: ComponentCreator('/docs/baseplus/installation', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/baseplus/post-installation',
        component: ComponentCreator('/docs/baseplus/post-installation', '1eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/custom-block-types',
        component: ComponentCreator('/docs/category/custom-block-types', 'e39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/extra',
        component: ComponentCreator('/docs/category/extra', 'acf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/guides',
        component: ComponentCreator('/docs/category/guides', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/how-to',
        component: ComponentCreator('/docs/category/how-to', '1f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/changelog',
        component: ComponentCreator('/docs/changelog', 'fe5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/background_image',
        component: ComponentCreator('/docs/custom_block_types/background_image', 'd82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/background-video',
        component: ComponentCreator('/docs/custom_block_types/background-video', 'b71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/collapsible',
        component: ComponentCreator('/docs/custom_block_types/collapsible', '3b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/detailed_feature',
        component: ComponentCreator('/docs/custom_block_types/detailed_feature', 'a4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/dropdowns',
        component: ComponentCreator('/docs/custom_block_types/dropdowns', 'c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/fancy_linked_images',
        component: ComponentCreator('/docs/custom_block_types/fancy_linked_images', 'ba4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/fancy_tabs',
        component: ComponentCreator('/docs/custom_block_types/fancy_tabs', 'c0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/featured_linked_text_tiles',
        component: ComponentCreator('/docs/custom_block_types/featured_linked_text_tiles', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/front_page_cover',
        component: ComponentCreator('/docs/custom_block_types/front_page_cover', '67e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/google_map',
        component: ComponentCreator('/docs/custom_block_types/google_map', 'd97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/hero',
        component: ComponentCreator('/docs/custom_block_types/hero', '903'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/hero_form',
        component: ComponentCreator('/docs/custom_block_types/hero_form', 'd2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/hero_v2',
        component: ComponentCreator('/docs/custom_block_types/hero_v2', 'be8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/highlight_feature',
        component: ComponentCreator('/docs/custom_block_types/highlight_feature', '46a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/how_it_works',
        component: ComponentCreator('/docs/custom_block_types/how_it_works', '1ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/icon_features',
        component: ComponentCreator('/docs/custom_block_types/icon_features', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/image_with_overlaid_text',
        component: ComponentCreator('/docs/custom_block_types/image_with_overlaid_text', '6cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/logo-links',
        component: ComponentCreator('/docs/custom_block_types/logo-links', '39c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/media_tabs',
        component: ComponentCreator('/docs/custom_block_types/media_tabs', '183'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/modal',
        component: ComponentCreator('/docs/custom_block_types/modal', '7d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/tabs',
        component: ComponentCreator('/docs/custom_block_types/tabs', '1db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/timeline',
        component: ComponentCreator('/docs/custom_block_types/timeline', '8ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/typing_animation',
        component: ComponentCreator('/docs/custom_block_types/typing_animation', '21d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/custom_block_types/video_gallery',
        component: ComponentCreator('/docs/custom_block_types/video_gallery', '76a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/extra/modules_and_configuration',
        component: ComponentCreator('/docs/extra/modules_and_configuration', 'd73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/extra/roadmap',
        component: ComponentCreator('/docs/extra/roadmap', 'b9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/extra/views',
        component: ComponentCreator('/docs/extra/views', '6f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/basic_theme_overview',
        component: ComponentCreator('/docs/guides/basic_theme_overview', 'e93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/content_types',
        component: ComponentCreator('/docs/guides/content_types', '5f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/static_blocks',
        component: ComponentCreator('/docs/guides/static_blocks', 'ce4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/add-new-album',
        component: ComponentCreator('/docs/how-to/add-new-album', '924'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/allow-blocks-to-be-referenced',
        component: ComponentCreator('/docs/how-to/allow-blocks-to-be-referenced', '481'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/change-pwa-application-name',
        component: ComponentCreator('/docs/how-to/change-pwa-application-name', 'f52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/create-new-instances-of-blocks',
        component: ComponentCreator('/docs/how-to/create-new-instances-of-blocks', '000'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/custom-color-profile',
        component: ComponentCreator('/docs/how-to/custom-color-profile', '5ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/customize-theme',
        component: ComponentCreator('/docs/how-to/customize-theme', '663'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/google-fonts-locally',
        component: ComponentCreator('/docs/how-to/google-fonts-locally', '3c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/implement-one-signal-push-notifications',
        component: ComponentCreator('/docs/how-to/implement-one-signal-push-notifications', '671'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '457'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/themes',
        component: ComponentCreator('/docs/themes', '72f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/video-tutorials',
        component: ComponentCreator('/docs/video-tutorials', 'f37'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1ac'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
