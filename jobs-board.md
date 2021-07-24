---
layout: landing-banner
title: Jobs Board
subtitle: Are you interested in gaining real-world experience to apply knowledge learnt in your degree and fast forward your career? Keep an eye out for internship and graduate opportunities that are constantly updated on this page!
colour: is-warning
---
<!-- MAKE SURE UPLOADED IMAGES ARE SQUARE -->

<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<div class="hero-body">
    <h2 class="title is-1 centered">Upcoming Jobs</h2>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <h2> We will have more jobs coming soon, stay tuned! </h2>
    {% else %}
        <div class='columns'>
        {% assign index = 0 %}
        {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
        {% for job in e %}
            {% capture end_date %}{{job.end-date | date: '%s'}}{% endcapture %}
            {% if curr_time < end_date %}
                {% assign mod = index | modulo: 4 %}
                {% if mod == 0 and index != 0 %}
                    <div class='columns'>
                {% endif %}
                <div class='column is-3'>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-1by1">
                            {% if job.img %}
                            <a href="{{job.link}}">
                                <img src="{{job.img}}" alt="Placeholder image">
                            </a>
                            {% endif %}
                            </figure>
                        </div>
                        <br>
                        <div class='card-content'>
                            <p class='title is-4 has-text-centered is-uppercase'> {{job.name}} </p>
                            <p class='subtitle is-6 has-text-centered'>Closing Date: {{job.end-date | date:"%B %d, %Y" }}</p>
                             <div  style="text-align: center;">
                                {% if job.description %}
                                    <span class="button modal-button" data-target="job-- {{ job.name | replace: ' ', '-' | downcase }}">
                                    <p class='subtitle is-6 has-text-centered'>More Information Here!</p>
                                    </span>
                                    {% include job-modal-card.html name = job.name description = job.description link = job.link %}
                                {% endif %}
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
                {% assign index = index | plus: 1 %}
                {% if mod == 3 %}
                    </div>
                {% endif %}
            {% endif %}
            {% endfor %}
            {% if mod != 3 %}
                </div>
            {% endif %}
            {% endif %}
<br>
<br>
    <h2 class="title is-1 centered">Previous Jobs</h2>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
    {% assign first_element = e.first.end-date | date: "%s" %}
    {% if e == None or first_element > curr_time %}
        <h2> Nothing here at the moment! </h2>
    {% else %}
        <div class='columns'>
    {% endif %}
    {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" | reverse %}
    {% assign index = 0 %}
    {% for job in e %}
        {% capture end_date %}{{job.end-date | date: '%s'}}{% endcapture %}
        {% if curr_time > end_date %}
            {% assign mod = index | modulo: 4 %}
            {% if mod == 0 and index != 0 %}
                <div class='columns'>
            {% endif %}
            <div class='column is-3'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-1by1">
                        <a href="{{job.link}}">
                            <img src="{{job.img}}" alt="Placeholder image" class="center">
                        </a>
                        </figure>
                    </div>
                    <br>
                    <div class='media-content'>
                        <p class='title is-5 has-text-centered is-uppercase'> {{job.name}}</p>
                        <p class='subtitle is-6 has-text-centered'>Closing Date: {{job.end-date | date:"%B %d, %Y" }}</p>
                        <br>
                    </div>
                </div>
            </div>
            {% assign index = index | plus: 1 %}
            {% if mod == 3 %}
                </div>
            {% endif %}
        {% endif %}
    {% endfor %}
<script src="/assets/js/modals.js"></script>

