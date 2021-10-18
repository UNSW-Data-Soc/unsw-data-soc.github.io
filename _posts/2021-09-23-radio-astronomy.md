---
layout: post
title:  "Radio Waves: Signals from Distant Celestial Objects"
date:   2021-09-23
tags: 
    - Application of Data Science
author: Gordon Huang
image: /assets/images/blog/21-09-23/centaurus-a.jpg
excerpt_separator: <!--more-->
---

Observing distant intergalactic objects that are hundreds of millions of light years away is like trying to read a newspaper on the moon — from Earth. But radio astronomy makes it possible to capture invisible wavelengths of light, unveiling the most elusive corners of the observable universe.

<!--more-->

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Beyond our cosy neighbourhood of planets in the solar system, foreign celestial objects like stars and galaxies are separated from us by huge expanses of empty space. Most of the time, the only direct evidence we have for their existence is the faint beams of light emitted and propagated through space over millions of years to reach us. To collect and analyze these miniscule signals, astronomers over the last century have developed lots of clever techniques and instruments to deduce much more information about celestial objects than what meets the eye. In this article we will take a look at how radio astronomers detect radiation from deep space and what this data reveals about distant celestial objects.

## What are radio waves, and why observe them?

The human retina allows us to distinguish between many colours of light permeating our physical environment. But all these colours amount to just a tiny fraction of the electromagnetic spectrum: from the 380nm wavelength of violet to the 740nm wavelength of red. This is enough for our naked eye to see the small specks of yellowish-white that are stars in the Milky Way galaxy. But celestial objects like stars and nebulae don't just give off human-visible light. Using special optical instruments we are able to observe astronomical objects by the radiation they emit in other bands of the electromagnetic spectrum beyond just visible light.

![Atmospheric transmittance plot](/assets/images/blog/21-09-23/atmospheric-transmittance.png)<br/>
_A plot of Earth’s atmospheric transmittance (or opacity) to various wavelengths of electromagnetic radiation. The large band of transmittable wavelengths on the right are high-frequency radio waves which can be detected by radio telescopes on the ground. Source: [Lumen Learning](https://courses.lumenlearning.com/boundless-physics/chapter/the-electromagnetic-spectrum/)_

The Earth's atmospheric gases like carbon dioxide and water vapour absorb certain wavelengths of light coming from outer space, so on the surface of Earth we can only detect in sufficient intensity the wavelengths which can pass through the atmosphere. In particular, the band of wavelengths between about 1cm and 8m are able to pass through the atmospheric gases, dust, and even concrete. This spectral region is part of a larger class of electromagnetic radiation known as radio waves.

You might be familiar with radio waves as the type of radiation used for telecommunications like FM and AM radio broadcasts, mobile phone calls and wifi networks. Radio waves are excellent for long-range information transmission due to its long wavelength and resultant properties like travelling long distances without losing energy, penetrating through materials like dust, and bending or "diffracting" around obstacles. These properties are also useful for astronomers, as radio waves can travel millions of light years across the universe, and are one of few bands of radiation that can pass through both interstellar gases, as well as the Earth's atmosphere. Let's take a look at the sources of radio waves from outer space that we would like to observe.

## Astronomical sources of radio waves

Hydrogen gas is the most common chemical substance in the universe, accounting for about 75% of all ordinary matter. In its neutral atomic form (individual unbounded atoms), hydrogen naturally emits light in the radio band. Radio telescopes are able to leverage the abundance of hydrogen to map regions of space where visible light sources are scarce but hydrogen is concentrated. Compare these two images of the M81 galaxy, a spiral galaxy 11 million light-years from Earth.

![M81 Galaxy Group](/assets/images/blog/21-09-23/m81-galaxy-group.png)<br/>
_Optical light (left) and radio (right) images of the M81 Group of Galaxies. Source: [National Radio Astronomy Observatory](http://www.aoc.nrao.edu/intro/galaxies.html)_

The left image shows the galaxy and its neighbours in visible light, and the right image shows intensity of radio emissions from the group. The faint blue streaks in the radio image reveal streamers of hydrogen gas connecting the galaxies. The trails of hydrogen mark the path of stars throughout the tidal interactions between the galaxies, which can only be deduced from radio images.

Some black holes consume matter at a staggering rate, generating a tremendous amount of energy. This causes nearby electrons to be accelerated in an outward spiral due to magnetic fields, emitting strong radio waves in the process. This phenomenon is captured in radio images of the Cygnus A elliptical galaxy — one of the brightest radio sources in the sky.

![Cygnus A](https://upload.wikimedia.org/wikipedia/commons/5/58/3c405.jpg)<br/>
_Combined radio-optical image of Cygnus A galaxy. Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:3c405.jpg)_

In visible light, only the small yellowish speck that is the galaxy and all its stars can be seen. But radio emissions reveal two jets protruding in opposite directions from the galaxy's supermassive blackhole in the centre. These jets extend ten times further from the centre than the stars in the host galaxy, and can only be detected due to the propulsion of electrons in a long narrow stream and their collision with gas in the surrouding cosmic medium.

## Detecting radio waves and making discoveries

Radio images like the ones of M81 and Cygnus A are produced by radio telescopes — telescopes that detect EMR in the radio wavelengths using a large reflector dish that focuses radio waves on a receiver.

![Radio Telescope](/assets/images/blog/21-09-23/radio-telescope.jpg)<br/>
_A radio telescope detects EMR in the radio band using a dish and receiver, allowing us to see radio emissions from distant objects. Source: [BBC Science](https://www.bbc.com/news/uk-england-manchester-35093020)_

The quality of radio images depends on the telescopes angular resolution, which can be approximated using the equation $$ R = \frac{\lambda}{D} $$ where $$ \lambda $$ is the wavelength of the observed radiaton, and $$ D $$ is the diameter of the telescope's reflector dish. The wavelength of radio waves are much larger compared to optical light, so to maintain a sharp angular resolution, radio telescopes need reflectors with a larger diameter.

Instead of building one very large and potentially costly dish, astronomers instead use a technique called Very Long Baseline Interferometry (VLBI) — signals from a collection of telescopes scattered across the Earth's surface are mixed together to produce images having the same angular resolution as an instrument the size of the the entire collection.

![The Event Horizon Telescope Collaboration](https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Event_Horizon_Telescope_and_Global_mm-VLBI_Array_on_the_Earth.jpg)<br/>
_Locations of the telescopes of the Event Horizon Telescope and the Global mm-VLBI Array. Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Event_Horizon_Telescope_and_Global_mm-VLBI_Array_on_the_Earth.jpg)_

In 2019, the Event Horizon Telescope collaboration between a global network of observatories produced the first ever image of a black hole. To achieve a small enough angular resolution to see the black hole's event horizon would require a radio dish as large as the Earth, and equivalent to seeing an apple on the moon from the surface of Earth. But using VLBI, the observatories were able to combine their data to produce an image with just as high angular resolution as a theoretical Earth-sized telescope.

![First image of a black hole](https://projects.iq.harvard.edu/files/styles/os_files_xlarge/public/eht/files/20190410-78m-800x466.png?m=1554877319&itok=rxdks7ro)<br/>
_EHT image of the supermassive black hole at the centre of the M87 elliptical galaxy. Source: [Event Horizon Telescope Collaboration](https://eventhorizontelescope.org/press-release-april-10-2019-astronomers-capture-first-image-black-hole)_

Until this image was produced, there was no direct evidence for the existence of black holes. This image confirms the predictions of the theory of General Relativity published in 1916 by Einstein, who himself was sceptical of its existence. Since the invention of radio telescopes in 1937, studies and observations of outer space have been blessed with many other groundbreaking discoveries including pulsars, quasars, and the cosmic microwave background.

## Conclusion

As a small civilisation practically stranded on a mote of dust floating through the cosmos, humans have a limited view of distant celestial objects. It is like trying to map an entire country while standing still on the spot. But in the midst of our limitations we have developed many ingenious techniques and instruments to make the most of our clear skies. Astronomy involves monumental endeavours to collect any possible trace of empirical data from outer space in spite of our inherent setbacks. It reminds us to seek more creative and innovative approaches as observers of our universe, even when it seems impossible to the naked eye.