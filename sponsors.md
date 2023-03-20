---
layout: landing-banner
title: Our Sponsors
subtitle: |
  DataSoc wouldn't be DataSoc without the amazing companies we've worked with throughout our journey as a society.
  With more and more data-oriented decisions and predictions made everyday, the demand for talented Data Science graduates is growing.
  <br><br>
  It's our long term goal to help our members become as capable they can be, and it wouldn't be possible without the continued support from industry.
  <br><br>
  **Interested in sponsoring? Reach out to <a href="mailto:external@unswdata.com" style="text-decoration: underline dotted">external@unswdata.com</a>**
---

<style>

img {
    width:  200px;
    height: 100px;
    object-fit: scale-down;
}

.sponsor-figure {
    padding: 1.25rem 0.625rem;
    flex: 1 0 180px;
    margin: 2% 4rem;
    max-width: 25%;
}

@media (max-width: 700px) {
    .sponsor-figure {
        flex: 1 0 180px;
        margin: 0% 4rem;
        max-width: 60%;

        /* Displaying logo figures */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

@media (max-width: 400px) {
    .sponsor-figure {
        flex: 1 0 180px;
        margin: 0% 4rem;
        max-width: 100%;

        /* Displaying logo figures */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.sponsor_info {
    text-align: center;
}

.separator {
    padding: 4rem;
}

.columns-is-vcentered-sponsor-figure-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.small {
    width: 125px;
}

</style>

<div class="hero-body">
  <!--Sponsors -->
  {% for tier in site.data.sponsors %}
    <div class="separator">
        <div class="container">
        <div class="section-title-wrapper">
            <h2 class="title is-1 centered">{{ tier[0] }}</h2>
            <div class="columns-is-vcentered-sponsor-figure-container">
                {% for sponsor in tier[1] %}
                    <div class="column sponsor-figure">
                        <div class="sponsor_icon">
                            <a href="{{ sponsor.link }}" target="_blank">
                                <img class="{% if tier[0] == 'Partners' %}small{% endif %}" src="{{ sponsor.icon }}">
                            </a>
                        </div>
                        <div class="sponsor_info">
                            {{ sponsor.description | newline_to_br}}
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
        </div>
    </div>
  {% endfor%}
</div>
