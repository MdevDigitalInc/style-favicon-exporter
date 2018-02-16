![Moreira Development](http://moreiradevelopment.io/social/googleLogo.png)

# Styles & Favicon Export Tool
## This tool exports SASS with full optimization

## How To Use The Exporter
Using the exporter is quite simple, all you need to do is login to NPM - install
the necessary dependencies and run the build task for it to output the necessary
files.

### Login to NPM
Make sure you are logged in to NPM before using the tool, especially the first
time around when you need to install dependencies. If you do not have an NPM
account speak to your development manager.

```bash
npm login
# Enter Username
# Enter Password
# Enter Email
```

### Install NPM dependencies
The tool will not work without the necessary dependencies installed. You must
run the npm install command from within the exporter-tool directory.

```bash
cd exporter-tool/
npm install
```

### Run Build or Watch tasks
The build task will process the SCSS and the favicons and output them into the
`dist` folder. There you will find a folder with the compiled styles.css, the
compiled icons and a helpful HTML document with header tags.

The watch task will accomplish the same as the build task but it will watch for
changes on the files and run automatically. This is a good mode to use during
development.

```bash
# Build Task
npm run build

# Watch task
npm run dev
```
---

### [ Moreira Development ]
We provide process-driven UX/UI + development to help our clients unleash their potential to connect with their audience. Our not-so-secret sauce is gaining a fundamental understanding of the challenges and opportunities our clients present us to provide innovative custom solutions using the latest web application technologies.

### [ Contact ]
[Moreira Development Website](http://moreiradevelopment.io).

[Contact Support](mailto:support@moreiradevelopment.io).

Phone: +1(519)-860-4261


