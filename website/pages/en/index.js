const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  intro: `
[React Native] enables you to build world-class native application
experiences on multiple platforms using a consistent developer
experience based on Javascript and [React].

**React Native for Win32 brings React Native support to Office 365**. With this, you can use Javascript to build native
Office experiences for PCs, phones, tablets, 2-in-1s, Web, as well as the MacOS desktop ecosystems.

![Written in Javascript, Running Native](img/homepage/native-and-js.png)

[React Native]: http://facebook.github.io/react-native
[React]: https://reactjs.org/
  `,
  roadmapwindows: `
We are in the process of implementing React Native for Win32 as part of the \`vnext\` effort. Please
see the [Roadmap 2020] blog for details on this effort and investment
roadmap for the upcoming months.

**React Native for Win32 vnext now supports React Native version 0.60.**
Download the latest [npm package] to get the updates.
  `,
  resources: `
    **Resources**

  - Learn the **basics of React Native** using the [React Native Tutorial]
  - Learn about the core [React Native Components and APIs]
  - Check out the [API Parity status] doc for updates on what we support from core
  - For new **Win32 specific APIs** [check out our list here]
  - Learn how to **extend React Native for Win32** through [Native modules] and [Native UI components]

[Get started]: docs/getting-started
[React Native for Windows]: https://github.com/microsoft/react-native-windows
[React Native for Mac]: https://aka.ms/react-native-mac
[React Native Tutorial]: https://facebook.github.io/react-native/docs/tutorial.html
[React Native Components and APIs]: https://facebook.github.io/react-native/docs/activityindicator
[API Parity status]: docs/parity-status
[Windows Brushes and Themes]: docs/windowsbrush-and-theme
[check out our list here]: https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/api/react-native-windows.md
[Native modules]: docs/native-modules
[Native UI components]: docs/view-managers
  `
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Heading = ({ text }) => <h2 className="Heading">{text}</h2>;

    const GetStartedButton = () => (
      <div>
      <div style={{marginBottom: 35}}>
        <a
          className="ActionButton primary"
          href={baseUrl + "docs/getting-started"}
          target="_self"
        >
          Get started with Windows
        </a>
        </div>
      </div>
    );

    const GitHubButton = () => (
      <a
        className="github-button"
        href="https://github.com/microsoft/react-native-windows"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star microsoft/react-native-windows on GitHub"
      >
        Star
      </a>
    );

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const TwoColumns = ({ columnOne, columnTwo, reverse }) => (
      <div className={`TwoColumns ${reverse ? "reverse" : ""}`}>
        <div className={`column first ${reverse ? "right" : "left"}`}>
          {columnOne}
        </div>
        <div className={`column last ${reverse ? "left" : "right"}`}>
          {columnTwo}
        </div>
      </div>
    );

    const HeaderHero = () => (
      <Section background="dark" className="HeaderHero">
        <div className="socialLinks">
          <GitHubButton />
        </div>
        <TwoColumns
          reverse
          columnOne={
            <React.Fragment>
              <div width={400}>
                <img alt="" src={baseUrl + "img/homepage/cross-platform.png"} />
              </div>
            </React.Fragment>
          }
          columnTwo={
            <React.Fragment>
              <h1 className="title">React Native</h1>
              <p className="tagline">For Win32</p>
              <div className="buttons">
                <GetStartedButton />
              </div>
            </React.Fragment>
          }
        />
      </Section>
    );

    const Intro = () => (
      <Section background="light">
        <div className="content">
          <Heading text="Bringing React Native to Office 365" />
          <MarkdownBlock>{textContent.intro}</MarkdownBlock>
        </div>
      </Section>
    );

    const Roadmap = () => (
      <Section background="tint">
        <div className="content">
          <Heading text="Status and Roadmap" />
          <h2>Win32</h2>
          <MarkdownBlock>{textContent.roadmapwindows}</MarkdownBlock>
        </div>
      </Section>
    );

    const Resources = () => (
      <Section background="light">
        <div className="content">
          <Heading text="Resources" />
          <MarkdownBlock>{textContent.resources}</MarkdownBlock>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <HeaderHero />
        <Intro />
        <Roadmap />
        <Resources />
      </div>
    );
  }
}

module.exports = Index;
