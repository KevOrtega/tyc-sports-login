[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://media.tycsports.com/files/2020/03/06/90689/logo-tyc_416x234.jpg?v=1" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TyC Sports Login</h3>

  <p align="center">
    A simple example of how could be the TyC Sports's registration system
    <br />
    <a href="https://tyc-sports-login.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

When I went to https://play.tycsports.com/ I saw that the google login was broken, so I decided to do this little example, recreating the whole registration system, fixing that feature and also adding authorizations to limit users access to different pages

### Built With

- [![React][React.js]][React-url]
- [![Next][Next.js]][Next-url]
- [![typescript][typescript]][typescript-url]
- [![tailwindcss][tailwindcss]][tailwindcss-url]
- [![mongodb][mongodb]][mongodb-url]
- [![jwt][jwt]][jwt-url]
- [![npm][npm]][npm-url]
- [![vercel][vercel]][vercel-url]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1.  Install node package manager:

- npm
  ```sh
  npm install npm@latest -g
  ```

2. Generate a next auth secret key https://generate-secret.vercel.app/32
3. Obtain your google ID and Google Secret Key to paste in dotenv config https://console.cloud.google.com/apis
4. Obtain your facebook ID and Facebook Secret Key to paste in dotenv config https://developers.facebook.com/apps

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/KevOrtega/tyc-sports-login
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add an .env file. It must has this variables:
   ```
   mongo_user
   mongo_password
   NEXTAUTH_URL
   NEXTAUTH_SECRET
   google_id
   google_secret_key
   facebook_id
   facebook_secret_key
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kevortega/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/es
[jwt]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[jwt-url]: https://jwt.io
[npm]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://nodejs.org/en/download
[vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/
