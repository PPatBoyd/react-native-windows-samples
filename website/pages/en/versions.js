const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  introtext: `
  React Native for Win32 has a release train that is tracked on GitHub through the [react-native-windows-releases](https://github.com/microsoft/react-native-windows/releases/) archive.
  When a major release is made available, it will be present here under the **Latest version** section.

  Once the release has had significant time to be tested and contributers have addressed as many issues as possible, the release will be upgraded to a **Stable version** and become present in the corosponding section below.
  `,
  latestverison: `
  The latest and greatest, bleeding edge version release of React Native for Win32 will be listed and updated here.
  `
};

class Versions extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const TableRow = ({background = "light", versionNumber, docLink, changeLogLink, changeLogText = "Changelog"}) => (
      <div className={`TableRowItem ${background}`} style={{width: '487px'}}>
        <div className={`TableRowItem ${"versiontext"}`} style={{fontSize: 14, padding: 10}}>{versionNumber}</div>
        <div className={`TableRowItem ${"text"}`} style={{padding: 7}}>
          <a href={docLink} style={{fontSize: 14, padding: 10}}>
            Documentation
          </a>
        </div>
        <div className={`TableRowItem ${"text"}`} style={{padding: 7}}>
          <a href={changeLogLink} style={{fontSize: 14}}>
            {changeLogText}
          </a>
        </div>
      </div>
    );

    const VersioningInformation = () => (
      <Section background="light">
        <div className="content">
          <h1 style={{fontSize: '60px', marginTop: '-20px', fontWeight: 'bold'}}>React Native for Windows Versions </h1>
          <MarkdownBlock>{textContent.introtext}</MarkdownBlock>
          <h1 style={{fontWeight: 'bold'}}>Latest version</h1>
          <MarkdownBlock>{textContent.latestverison}</MarkdownBlock>
          <TableRow versionNumber="MASTER"
          docLink="https://www.aka.ms/react-native-win32"
          changeLogLink="https://github.com/microsoft/react-native-windows/compare/react-native-windows_v0.60.0-vnext.118...master"
          changeLogText="Commits since 0.60"/>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <VersioningInformation />
      </div>
    );
  }
}

module.exports = Versions;
