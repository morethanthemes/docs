import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Installation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: 'docs/baseplus/installation',
    description: (
      <>
        How to install and get started with Webmaker+.
      </>
    ),
  },
  {
    title: 'Themes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: 'docs/themes',
    description: (
      <>
        Check out all the Themes that come with Webmaker+.
      </>
    ),
  },
  {
    title: 'Live demo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: 'http://www.webmaker.plus',
    target: '_blank',
    description: (
      <>
        Try Webmaker+ through the live demo.
      </>
    ),
  },
];

function Feature({Svg, title, link, target, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link} target={target}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
