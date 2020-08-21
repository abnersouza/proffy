# Proffy

## ❔ About

A study platform to connect students and teachers.
The main idea is the teacher to register the classes and the student select a class to study.

## 📸 Screenshots

<p align="center"><b>Interface Web</b></p>
<p align="center">
  <img src="https://repository-images.githubusercontent.com/285049464/92458900-d744-11ea-8a78-36754300c647" alt="Landing Page Proffy in Desktop" />
</p>

## 🛠 Techs

Proffy was built using the following:

- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## ⚙ How to Install and Start

To install and start proffy follow the steps below:

### Installation

Clone the Repository:

```
git clone https://github.com/abnersouza/proffy.git
```

### Start Node Server

Open the cloned repository na navigate to the web folder

```
cd ./proffy/server
```

Install the dependencies 🚀

##### NPM

```bash
# Install all dependencies
> npm install

# Create a sqlite database and run the migrations
> npm run knex:migrate:latest

# Start the proffy web
> npm start
```

##### YARN

```bash
# Install all dependencies
> yarn install

# Start the proffy web
> yarn start
```

<br>

### Start Web Version

Open the cloned repository na navigate to the web folder

```
cd ./proffy/web
```

Install the dependencies 🚀

##### NPM Packages

```bash
# Install all dependencies
> npm install

# Start the proffy web
> npm start
```

##### YARN Packages

```bash
# Install all dependencies
> yarn install

# Start the proffy web
> yarn start
```

<br>

### Start Mobile Version

Open the cloned repository na navigate to the web folder

```
cd ./proffy/mobile
```

Install the dependencies 🚀

##### EXPO

###### EXPO Installation NPM or Yarn

<br>

```bash
# NPM
> npm install expo-cli --global

# Yarn
> yarn global add expo-cli
```

###### Expo Dependencies

```bash
# Expo Dependencies
> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

```

##### NPM Packages

```bash
# Install all dependencies
> npm install

# Start the proffy mobile
> npm start
```

##### YARN Packages

```bash
# Install all dependencies
> yarn global add expo-cli

# Start the proffy mobile
> yarn start
```

## 🥅 Plans

- Implement the classroom for one to one video call using WebRTC and Socket.io

## 📜 License

This project is under MIT License [MIT](./LICENSE)

## Special Thanks

To all @Rocketseat team members for the amazing [Next Level Week 2](https://nextlevelweek.com/episodios/omnistack/1/edicao/2) course.

Made with ❤️ by Abner Souza
