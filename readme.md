<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cpmcclure/barclime">
    <img src="public/img/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Barclime</h3>

  <p align="center">
    Creating better coffee with data and curiosity
    <!-- <br />
    <a href="https://github.com/cpmcclure/barclime"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://github.com/cpmcclure/barclime/issues">Report Bug</a>
    ·
    <a href="https://github.com/cpmcclure/barclime/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Barclime exists as a project to tinker with, and hopefully provide baristas with an app to track espresso data and learn more about creating delicious coffee.

Most baristas know that shot parameters, such as grind, dosage, weight and extraction time, need to change throughout the day to get a good shot of espresso. Many have experienced the sudden, unexpected shift in how shots pull – whether due to equipment issues, weather changes or movin to a new roast date. The goal of barclime is to be able to track everything we can to better understand what changes to make when things start to go wrong, and find out where the issues might lie.

Currently, barclime allows users to track shot parameters (grind, dose, extraction time, shot weight, roast date and tasting notes), as well as local weather data and time of day. This data is stored in the user profile for future reference.

Long term goals include an in-shop raspberry pi server to track temperature, humidity and pressure within the shop itself, a network to connect baristas within the same shop to share data and machine updates, a taster's wheel interface for adding tasting notes, graph views of data, and machine learning to suggest parameters for better shots.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- GETTING STARTED -->
## Getting Started

Currently the only way to use Barclime is to install it on your mahcine locally.

### Prerequisites

This project requires a MongoDB database – set up a free account at [https://www.mongodb.com](https://www.mongodb.com).

In order to use the local weather feature, get a free API key from [https://www.weatherapi.com](https://www.weatherapi.com)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/cpmcclure/barclime.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in `/config`, then add a mongodb db connection string (DB_STRING), the weatherapi.com API key (WEATHERKEY) and your desired port number for the server(PORT).
   ```
   DB_STRING = 'ENTER YOUR MONGODB CONNECTION STRING'
   WEATHERKEY = 'ENTER YOUR API KEY'
   PORT = 'ENTER YOUR PORT NUMBER'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To get the server for Barclime running on you local machine, run either `npm run start` or `npm run dev` to reun the server with nodemon, which will automatically restart the server when changes are made.

Go to the port you chose in a browser (localhost:port) to get to the app. Create an account and password (this info will be stored on your mongodb, password will be encrypted). Enter the info for your first shot and start tracking data!

To view shot data click the profile picture in the top left corner. This isn't intuitive and will be updated soon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/cpmcclure/barclime/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- CONTACT -->
<!-- ## Contact

Chris McClure - [@cp_mcclure](https://twitter.com/cp_mcclure) - c.patrick.mcclure@gmail.com

Project Link: [https://github.com/cpmcclure/barclime](https://github.com/cpmcclure/barclime)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/cpmcclure/barclime.svg?style=for-the-badge
[contributors-url]: https://github.com/cpmcclure/barclime/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/cpmcclure/barclime.svg?style=for-the-badge
[forks-url]: https://github.com/cpmcclure/barclime/network/members
[stars-shield]: https://img.shields.io/github/stars/cpmcclure/barclime.svg?style=for-the-badge
[stars-url]: https://github.com/cpmcclure/barclime/stargazers
[issues-shield]: https://img.shields.io/github/issues/cpmcclure/barclime.svg?style=for-the-badge
[issues-url]: https://github.com/cpmcclure/barclime/issues
[license-shield]: https://img.shields.io/github/license/cpmcclure/barclime.svg?style=for-the-badge
[license-url]: https://github.com/cpmcclure/barclime/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cpmcclure
[product-screenshot]: public/img/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 