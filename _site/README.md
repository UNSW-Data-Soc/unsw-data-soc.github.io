# Mainpage

Website for UNSW DataSoc. This website is the face of the society and has a breakdown of our:
* Mission Statement
* Team
* Sponsors
* Resources for students
* Contact details
* Joining details

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. Clone this repository to your local machine.
2. Build and serve the site using jekyll: `bundle exec jekyll serve`

Any changes made to any page will then be compiled and displayed live on your localhost. 

### Prerequisites

What things you need to install the software and how to install them

* Your preferred (web-dev) code editor - e.g. Brackets, VS Code, Vim.
* Jekyll [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)
  *Note: Windows devs are recommended to first install and set up Windows Subsystem for Linux (WSL) for smoother development. Refer to [Michael Treat's guide](https://github.com/michaeltreat/Windows-Subsystem-For-Linux-Setup-Guide) for an explanation and walkthrough of WSL.*

### Software Dependencies

* [Jekyll (and by extension, Ruby)](https://jekyllrb.com/) - static site generator usued
* [Bulma CSS](https://bulma.io/) - CSS framework
* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [Github Pages](https://pages.github.com/) - Website hosting
* [Namecheap](https://www.namecheap.com/) - Custom domain

### Style Guide

* 2 space indentation
* Liquid code should have 1 space between the start and the end of the tag. For example, `{% for x in list %}`, **not** `{%for x in list %}`. Likewise, `{{ person.name }}` **not** `{{person.name}}`.

## Deployment

Github Pages builds and deploys our website automatically from master. We will never commit directly to master, only ever merge changes from other branches after review.

## Authors

* **Victor Tsang** - *Initial work* - [victorwctsang](https://github.com/victorwctsang)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* Special thanks to the first and second generation datasoc leads, for laying down the groundwork. Thanks @Jacky, @Chris, @Claire, @Dean.
