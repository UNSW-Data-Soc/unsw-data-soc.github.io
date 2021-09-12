---
layout: landing-banner
title: Events
subtitle: From social events to workshops to networking opportunities
colour: is-link
---
<style>
    .card{
        min-height:100%;
        display:flex;
        flex-direction:column;
    }
    .card-image{
        display:flex;
        flex-grow:2;
    }
</style>
<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<div class="hero-body">
    <h2 class="title is-1 centered">Upcoming Events</h2>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <h2> We will have more events coming soon, stay tuned! </h2>
    {% else %}
        <div class='columns'>
    {% endif %}
    {% assign index = 0 %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
    {% for event in e %}
        {% if event.tag == 'planned' %}
            {% continue %}
        {% endif %}
        {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
        {% if curr_time < event_date %}
            {% assign mod = index | modulo: 3 %}
            {% if mod == 0 and index != 0 %}
                <div class='columns'>
            {% endif %}
            <div class='column is-4'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by3">
                        {% if event.img %}
                        <img src="{{event.img}}" alt="Placeholder image">
                        {% else %}
                        <img src="/assets/images/events/upcoming_events.png" alt="Placeholder image">
                        {% endif %}
                        </figure>
                    </div>
                    <br>
                    <div class='card-content'>
                        {% if event.name == 'Commbank Connect' %}
                            <p class='title is-4 has-text-centered is-uppercase'>{{event.name}}</p>
                        {% else %}
                            <p class='title is-4 has-text-centered is-uppercase'>DataSoc Presents: {{event.name}}</p>
                        {% endif %}
                        {% if event.start-date != event.end-date %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }} - {{event.end-date | date:"%B %d, %Y" }}</p>
                        {% else %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }}</p>
                        {% endif %}
                        {% if event.time and event.location %}
                            <p class='subtitle is-6 has-text-centered'>{{event.time}}, {{ event.location }}</p>
                        {% elsif event.time %}
                            <p class='subtitle is-6 has-text-centered'>{{event.time}}</p>
                        {% endif %}
                        <div  style="text-align: center;">
                            {% if event.link %}
                                <span class="button modal-button" data-target="event-- {{ event.name | replace: ' ', '-' | downcase }}">
                                    <p class='subtitle is-6 has-text-centered'>More Information Here!</p>
                                </span>
                            {% else %}
                                <p class='subtitle is-6 has-text-centered'>Details coming soon!</p>
                            {% endif %}
                        </div>
                        {% if event.description %}
                            {% include event-modal-card.html name= event.name description = event.description link = event.link%}
                        {% endif %}
                        <br>
                    </div>
                </div>
            </div>
            {% assign index = index | plus: 1 %}
            {% if mod == 2 %}
                </div>
            {% endif %}
        {% endif %}
    {% endfor %}
    {% if mod != 2 %}
        </div>
    {% endif %}
    <br>
    <br>
    <h2 class="title is-1 centered">Planned Events</h2>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <h2> We are in the process of planning events, check back soon! </h2>
    {% else %}
        <div class='columns'>
    {% endif %}
    {% assign index = 0 %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
    {% for event in e %}
        {% if event.tag != 'planned' %}
            {% continue %}
        {% endif %}
        {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
        {% if curr_time < event_date %}
            {% assign mod = index | modulo: 6 %}
            {% if mod == 0 and index != 0 %}
                <div class='columns'>
            {% endif %}
            <div class='column is-2'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by3">
                        <img src="/assets/images/events/planned_events.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <br>
                    <div class='media-content'>
                        <p class='title is-4 has-text-centered is-uppercase'>{{event.name}}</p>
                        <!-- {% if event.description %}
                            <p class='is-size-8 has-text-centered has-text-weight-light'>{{event.description}}</p>
                            <br>
                        {% endif %} -->
                        {% if event.start-date != event.end-date %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }} - {{event.end-date | date:"%B %d, %Y" }}</p>
                        {% else %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }}</p>
                        {% endif %}
                        <br>
                    </div>
                </div>
            </div>
            {% assign index = index | plus: 1 %}
            {% if mod == 5 %}
                </div>
            {% endif %}
        {% endif %}
    {% endfor %}
    {% if mod != 5 %}
        </div>
    {% endif %}
    <br>
    <br>
    <h2 class="title is-1 centered">Previous Events</h2>
    {% assign first_element = e.first.end-date | date: "%s" %}
    {% if e == None or first_element > curr_time %}
        <h2> We will have more events coming soon </h2>
    {% else %}
        <div class='columns'>
    {% endif %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" | reverse %}
    {% assign index = 0 %}
    {% for event in e %}
        {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
        {% if curr_time > event_date %}
            {% assign mod = index | modulo: 3 %}
            {% if mod == 0 and index != 0 %}
                <div class='columns'>
            {% endif %}
            <div class='column is-4'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by3">
                        <img src="{{event.img}}" alt="Placeholder image">
                        </figure>
                    </div>
                    <br>
                    <div class='media-content'>
                        <p class='title is-5 has-text-centered is-uppercase'> {{event.name}}</p>
                        {% if event.start-date != event.end-date %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }} - {{event.end-date | date:"%B %d, %Y" }}</p>
                        {% else %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }}</p>
                        {% endif %}
                        <br>
                    </div>
                </div>
            </div>
            {% assign index = index | plus: 1 %}
            {% if mod == 2 %}
                </div>
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
<script src="/assets/js/modals.js"></script>