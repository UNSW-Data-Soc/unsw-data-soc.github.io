## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone this repository to your local machine.
2. Build and serve the site using jekyll: `bundle exec jekyll serve`

Any changes made to any page will then be compiled and displayed live on your localhost.

### Prerequisites

What things you need to install the software and how to install them

* Your preferred (web-dev) code editor - e.g. Brackets, VS Code, Vim.
* Jekyll [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)
  *Note: Windows devs are recommended to first install and set up Windows Subsystem for Linux (WSL) for smoother development. Refer to [Michael Treat's guide](https://github.com/michaeltreat/Windows-Subsystem-For-Linux-Setup-Guide) for an explanation and walkthrough of WSL.*

### Style Guide

* 2 space indentation
* Liquid code should have 1 space between the start and the end of the tag. For example, `{% for x in list %}`, **not** `{%for x in list %}`. Likewise, `{{ person.name }}` **not** `{{person.name}}`.

### References/Tips and Tricks

* [Per-page Custom CSS - JReel](https://jreel.github.io/per-page-custom-css-in-jekyll/)
* [Jekyll Style Guide - Ben Balter](https://ben.balter.com/jekyll-style-guide/)
* [Jekyll Tips and Best Practices - JReel](https://jreel.github.io/jekyll-tips-tricks-and-best-practices/)
* [Jekyll Collections](https://ben.balter.com/2015/02/20/jekyll-collections/)
* [Prose - Web editor for static sites on Github Pages](https://prose.io)

### Deployment

Github Pages builds and deploys our website automatically from master. We will never commit directly to master, only ever merge changes from other branches after review.