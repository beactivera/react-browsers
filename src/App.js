import './style/App.scss';
import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import Browser from './components/Browser';
import Footer from './components/Footer';

const browsers = [
  {
    name: 'Mozilla Firefox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg',
    description:
      'Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. It uses the Gecko rendering engine to display web pages, which implements current and anticipated web standards',
  },
  {
    name: 'Google Chrome',
    logo: 'https://www.google.com/chrome/static/images/chrome-logo_112px.svg',
    description:
      'Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox. Versions were later released for Linux, macOS, iOS, and also for Android, where it is the default browser.',
  },
  {
    name: 'Microsoft Edge',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SPUTPXITKNbBGQyKUN1ERkqt9D6uNAYU-Q&usqp=CAU',
    description:
      "Microsoft Edge is a proprietary, cross-platform web browser created by Microsoft. It was first released in 2015 as part of Windows 10 and Xbox One and later ported to other platforms as a fork of Google's Chromium open-source project: Android and iOS, macOS, older Windows versions, and most recently Linux. ",
  },
];

function App() {
  return (
    <div className="App">
      <Navigation items={['Home', 'About', 'Contact']} />
      <Header title={'Popular Web Browsers'} />
      <Subtitle
        text={
          'Below you can find the most popular browsers in the world. Each day many people use them to search for information or read their favourite blog or even watch the movie. For the Web Developers, they are crucial for their work.'
        }
      />
      <article className="Section">
        {browsers.map((browser, i) => {
          return <Browser key={i} {...browser} />;
        })}
      </article>
      <Footer text={'Copyright by Bogate Interfejsy Webowe'} />
    </div>
  );
}

export default App;
