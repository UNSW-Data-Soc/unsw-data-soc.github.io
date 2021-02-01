---
layout: default
title: Events
title-image: city3_left.png
introduction: This is the events page
---
<section class="hero is-info is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Events
      </h1>
      <br>
      <h2 class="subtitle">
      From social events to workshops to networking opportunities
      </h2>
    </div>
  </div>
</section>
<div class="hero-body">
    <h2 class="title is-1 centered">Upcoming Events</h2>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <h2> We will have more events coming soon </h2>
    {% else %}
        <div class='columns'>
    {% endif %}
    {% assign index = 0 %}
    {% assign e = site.data.events.Events | sort_natural: "start-date" %}
    {% for event in e %}
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
                        <img src="{{event.img}}" alt="Placeholder image">
                        </figure>
                    </div>
                    <br>
                    <div class='media-content'>
                        <p class='title is-4 has-text-centered is-uppercase'> DataSoc Presents: {{event.name}}</p>
                        <!-- {% if event.description %}
                            <p class='is-size-8 has-text-centered has-text-weight-light'>{{event.description}}</p>
                            <br>
                        {% endif %} -->
                        {% if event.start-date != event.end-date %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }} - {{event.end-date | date:"%B %d, %Y" }}</p>
                        {% else %}
                            <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }}</p>
                        {% endif %}
                        {% if event.time %}
                            <p class='subtitle is-6 has-text-centered'>{{event.time}}, {{event.location}}</p>
                        {% endif %}
                        {% if event.link %}
                            <p class='subtitle is-6 has-text-centered'> <a href="{{event.link}}" title="Sign up here!"> More Information Here! </a></p>
                        {% else %}
                            <p class='subtitle is-6 has-text-centered'>Link coming soon!</p>
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